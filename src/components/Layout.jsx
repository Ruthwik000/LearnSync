import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Home, BookOpen, Users, UserCheck, Calendar, HelpCircle, BarChart3, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const { currentRole, switchRole, currentUser, appData } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = {
    student: [
      { name: 'Dashboard', icon: Home, path: '/' },
      { name: 'Courses', icon: BookOpen, path: '/courses' },
      { name: 'Study Planner', icon: Calendar, path: '/study-plan' },
      { name: 'Doubts', icon: HelpCircle, path: '/doubts' },
      { name: 'Progress', icon: BarChart3, path: '/progress' }
    ],
    mentor: [
      { name: 'Dashboard', icon: Home, path: '/mentor' },
      { name: 'Students', icon: Users, path: '/mentor/students' },
      { name: 'Content', icon: BookOpen, path: '/mentor/content' },
      { name: 'Sessions', icon: Calendar, path: '/mentor/sessions' },
      { name: 'Doubts', icon: HelpCircle, path: '/mentor/doubts' }
    ],
    admin: [
      { name: 'Dashboard', icon: Home, path: '/admin' },
      { name: 'Students', icon: Users, path: '/admin/students' },
      { name: 'Mentors', icon: UserCheck, path: '/admin/mentors' },
      { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
      { name: 'Courses', icon: BookOpen, path: '/admin/courses' }
    ]
  };

  const currentNav = navigation[currentRole] || navigation.student;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}>
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900">LearnSync</h1>
        </div>
        
        <nav className="px-4 space-y-2">
          {currentNav.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-50 rounded-lg"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-4">
            <select
              value={currentRole}
              onChange={(e) => switchRole(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                {currentUser?.name?.[0] || 'U'}
              </div>
              <span className="text-gray-900 font-medium">
                {currentUser?.name || 'User'}
              </span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
