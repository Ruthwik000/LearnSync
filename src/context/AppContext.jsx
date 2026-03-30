import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import * as firestoreService from '../services/firestore';
import { storage } from '../utils/storage';
import { seedFirestore, isDatabaseEmpty } from '../utils/seedFirestore';
import {
  MOCK_APP_STUDENTS,
  MOCK_APP_MENTORS,
  MOCK_APP_COURSES,
  MOCK_SESSIONS,
  MOCK_DOUBTS,
  mockNotifications as INITIAL_NOTIFICATIONS,
} from '../utils/mockData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    students: [],
    mentors: [],
    courses: [],
    chapters: [],
    topics: [],
    sessions: [],
    doubts: [],
    studyPlans: [],
    analytics: {}
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setCurrentRole] = useState('student');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Shared notifications state — persisted in localStorage so reports survive
  // account switches (mentor → admin demo flow)
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('learnsync-notifications');
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(null);

      const savedUser = storage.get('currentUser');
      const savedRole = storage.get('currentRole');
      if (savedUser) setCurrentUser(savedUser);
      if (savedRole) setCurrentRole(savedRole);

      // Load saved doubts from localStorage (persisted across sessions)
      const savedDoubts = localStorage.getItem('learnsync-doubts');
      const doubts = savedDoubts ? JSON.parse(savedDoubts) : MOCK_DOUBTS;

      setAppData({
        students: MOCK_APP_STUDENTS,
        mentors: MOCK_APP_MENTORS,
        courses: MOCK_APP_COURSES,
        chapters: [],
        topics: [],
        sessions: MOCK_SESSIONS,
        doubts,
        studyPlans: [],
        analytics: {}
      });

      setLoading(false);
    } catch (err) {
      console.error('Error loading data:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  const refreshData = async () => {
    await loadInitialData();
  };

  const updateCurrentUser = async (user) => {
    setCurrentUser(user);
    storage.set('currentUser', user);

    // Only update Firestore if user has a valid ID and is not 'new'
    if (user && user.id && user.id !== 'new' && user.id !== 'admin') {
      try {
        await firestoreService.updateUser(user.id, user);
      } catch (error) {
        console.error('Error updating user in Firestore:', error);
      }
    }
  };

  const switchRole = (role) => {
    setCurrentRole(role);
    storage.set('currentRole', role);
  };

  const addStudent = async (student) => {
    const studentId = student.id && student.id !== 'new'
      ? `student_${student.id}`
      : `student_${Date.now()}`;

    const studentData = {
      ...student,
      role: 'student',
      onboarded: student.onboarded || false,
      assignedStudents: student.assignedStudents || [],
      completedTopics: student.completedTopics || [],
      xp: student.xp || 0,
      level_number: student.level_number || 1,
      streak: student.streak || 0
    };

    delete studentData.id; // Remove id from data

    const result = await firestoreService.createUser(studentId, studentData);

    if (result.success) {
      await refreshData();
      return { ...result, id: studentId };
    }

    return result;
  };

  const updateStudent = async (id, updates) => {
    const result = await firestoreService.updateUser(id, updates);

    if (result.success) {
      // Refresh data to get updated student
      await refreshData();
    }

    return result;
  };

  const addMentor = async (mentor) => {
    const mentorId = mentor.id && mentor.id !== 'new'
      ? `mentor_${mentor.id}`
      : `mentor_${Date.now()}`;

    const mentorData = {
      ...mentor,
      id: mentorId,
      role: 'mentor',
      onboarded: mentor.onboarded || false,
      assignedStudents: mentor.assignedStudents || [],
      subjects: mentor.subjects || [],
      sessionsCompleted: mentor.sessionsCompleted || 0
    };

    // Auto-assign unassigned students to this new mentor
    const allAssignedStudentIds = appData.mentors.flatMap(m => m.assignedStudents || []);
    const unassignedStudents = appData.students.filter(s => !allAssignedStudentIds.includes(s.id));
    
    // Assign up to teachingCapacity students
    const capacity = mentor.teachingCapacity || 5;
    const studentsToAssign = unassignedStudents.slice(0, capacity).map(s => s.id);
    mentorData.assignedStudents = [...(mentorData.assignedStudents || []), ...studentsToAssign];

    setAppData(prev => ({
      ...prev,
      mentors: [...prev.mentors, mentorData]
    }));

    return { success: true, id: mentorId };
  };

  const updateMentor = async (id, updates) => {
    const result = await firestoreService.updateUser(id, updates);

    if (result.success) {
      // Refresh data to get updated mentor
      await refreshData();
    }

    return result;
  };

  const addCourse = async (course) => {
    const result = await firestoreService.createCourse(course);

    if (result.success) {
      await refreshData();
    }

    return result;
  };

  const addChapter = async (chapter) => {
    const result = await firestoreService.createChapter(chapter);

    if (result.success) {
      await refreshData();
    }

    return result;
  };

  const addTopic = async (topic) => {
    const result = await firestoreService.createTopic(topic);

    if (result.success) {
      await refreshData();
    }

    return result;
  };

  const addSession = async (session) => {
    const result = await firestoreService.createSession(session);

    if (result.success) {
      await refreshData();
    }

    return result;
  };

  const addDoubt = async (doubt) => {
    const newDoubt = {
      ...doubt,
      id: `doubt_${Date.now()}`,
      status: 'open',
      replies: [],
      createdAt: new Date().toISOString()
    };
    
    setAppData(prev => {
      const updated = {
        ...prev,
        doubts: [...prev.doubts, newDoubt]
      };
      // Persist to localStorage
      localStorage.setItem('learnsync-doubts', JSON.stringify(updated.doubts));
      return updated;
    });
    
    return { success: true, id: newDoubt.id };
  };

  const updateDoubt = async (id, updates) => {
    setAppData(prev => {
      const updated = {
        ...prev,
        doubts: prev.doubts.map(d => d.id === id ? { ...d, ...updates } : d)
      };
      localStorage.setItem('learnsync-doubts', JSON.stringify(updated.doubts));
      return updated;
    });
    
    return { success: true };
  };

  // ── Notification helpers ────────────────────────────────────────────────
  const addNotification = (notification) => {
    const newNotif = {
      ...notification,
      id: `notif_${Date.now()}`,
      status: 'unread',
      date: new Date().toISOString().split('T')[0],
    };
    setNotifications(prev => {
      const updated = [newNotif, ...prev];
      localStorage.setItem('learnsync-notifications', JSON.stringify(updated));
      return updated;
    });
    return { success: true, id: newNotif.id };
  };

  const updateNotification = (id, updates) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, ...updates } : n);
      localStorage.setItem('learnsync-notifications', JSON.stringify(updated));
      return updated;
    });
  };

  const dismissNotification = (id) => {
    setNotifications(prev => {
      const updated = prev.filter(n => n.id !== id);
      localStorage.setItem('learnsync-notifications', JSON.stringify(updated));
      return updated;
    });
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => {
      const updated = prev.map(n => ({ ...n, status: 'read' }));
      localStorage.setItem('learnsync-notifications', JSON.stringify(updated));
      return updated;
    });
  };

  const addStudyPlan = async (plan) => {
    const result = await firestoreService.createStudyPlan(plan.studentId, plan);

    if (result.success) {
      await refreshData();
    }

    return result;
  };

  const updateStudyPlan = async (studentId, updates) => {
    const result = await firestoreService.updateStudyPlan(studentId, updates);

    if (result.success) {
      await refreshData();
    }

    return result;
  };

  const value = {
    appData,
    currentUser,
    currentRole,
    loading,
    error,
    notifications,
    updateCurrentUser,
    switchRole,
    addStudent,
    updateStudent,
    addMentor,
    updateMentor,
    addCourse,
    addChapter,
    addTopic,
    addSession,
    addDoubt,
    updateDoubt,
    addNotification,
    updateNotification,
    dismissNotification,
    markAllNotificationsRead,
    addStudyPlan,
    updateStudyPlan,
    refreshData
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-lg mb-2">Loading LearnSync...</div>
          <div className="text-gray-400 text-sm">Connecting to database</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-2">Error loading data</div>
          <div className="text-gray-600 text-sm mb-4">{error}</div>
          <button
            onClick={loadInitialData}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
