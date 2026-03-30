import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/Layout';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentOnboarding from './pages/student/StudentOnboarding';
import Courses from './pages/student/Courses';
import Doubts from './pages/student/Doubts';
import StudyPlan from './pages/student/StudyPlan';
import MentorDashboard from './pages/mentor/MentorDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

const AppRoutes = () => {
  const { currentRole, currentUser, updateCurrentUser } = useApp();

  const handleOnboardingComplete = (user) => {
    updateCurrentUser(user);
  };

  // If no user is logged in, show onboarding
  if (!currentUser || !currentUser.onboarded) {
    if (currentRole === 'student') {
      return <StudentOnboarding onComplete={handleOnboardingComplete} />;
    }
    // For mentor/admin, show their respective dashboards with mock user
    return (
      <Layout>
        {currentRole === 'mentor' ? <MentorDashboard /> : <AdminDashboard />}
      </Layout>
    );
  }

  return (
    <Layout>
      <Routes>
        {/* Student Routes */}
        {currentRole === 'student' && (
          <>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/study-plan" element={<StudyPlan />} />
            <Route path="/doubts" element={<Doubts />} />
            <Route path="/progress" element={<StudentDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}

        {/* Mentor Routes */}
        {currentRole === 'mentor' && (
          <>
            <Route path="/mentor" element={<MentorDashboard />} />
            <Route path="/mentor/students" element={<MentorDashboard />} />
            <Route path="/mentor/content" element={<MentorDashboard />} />
            <Route path="/mentor/sessions" element={<MentorDashboard />} />
            <Route path="/mentor/doubts" element={<MentorDashboard />} />
            <Route path="*" element={<Navigate to="/mentor" replace />} />
          </>
        )}

        {/* Admin Routes */}
        {currentRole === 'admin' && (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<AdminDashboard />} />
            <Route path="/admin/mentors" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminDashboard />} />
            <Route path="/admin/courses" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </>
        )}
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}

export default App;
