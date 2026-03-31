import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  FaHome, FaBookOpen, FaUsers, FaCalendarAlt, FaQuestionCircle, 
  FaBell, FaGraduationCap, FaBars, FaTimes, FaSignOutAlt, 
  FaUser, FaMagic, FaChevronRight
} from 'react-icons/fa';
import ChatbotPanel from './ChatbotPanel';

const Layout = ({ children, onLogout }) => {
  const { currentRole, currentUser, updateStudent } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatbotContext, setChatbotContext] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setChatbotContext(e.detail);
      setShowChatbot(true);
    };
    window.addEventListener('open-ai-drawer', handler);
    return () => window.removeEventListener('open-ai-drawer', handler);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setShowChatbot(false);
  }, [location.pathname]);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const navigation = {
    student: [
      { name: 'Dashboard', icon: FaHome, path: '/' },
      { name: 'Courses', icon: FaBookOpen, path: '/courses' },
      ...(currentUser && parseInt(currentUser.class) > 5 ? [
        { name: 'Study Planner', icon: FaCalendarAlt, path: '/study-plan' }
      ] : []),
      { name: 'Doubts', icon: FaQuestionCircle, path: '/doubts' },
      { name: 'Profile', icon: FaUser, path: '/profile' },
      { name: 'AI Tutor', icon: FaMagic, path: '#', action: () => setShowChatbot(true), special: true }
    ],
    mentor: [
      { name: 'Dashboard', icon: FaHome, path: '/mentor' },
      { name: 'Students', icon: FaUsers, path: '/mentor/students' },
      { name: 'Content', icon: FaBookOpen, path: '/mentor/content' },
      { name: 'Sessions', icon: FaCalendarAlt, path: '/mentor/sessions' },
      { name: 'Doubts', icon: FaQuestionCircle, path: '/mentor/doubts' },
      { name: 'Courses', icon: FaGraduationCap, path: '/mentor/courses' }
    ],
    admin: [
      { name: 'Dashboard', icon: FaHome, path: '/admin' },
      { name: 'Courses', icon: FaBookOpen, path: '/admin/modules' },
      { name: 'Sessions', icon: FaCalendarAlt, path: '/admin/sessions' },
      { name: 'Students', icon: FaUsers, path: '/admin/students' },
      { name: 'Mentors', icon: FaGraduationCap, path: '/admin/mentors' },
      { name: 'Notifications', icon: FaBell, path: '/admin/notifications' }
    ]
  };

  const currentNav = navigation[currentRole] || navigation.student;
  const isFoundation = currentRole === 'student' && currentUser?.age <= 10;

  return (
    <div className={`min-h-screen ${isFoundation ? 'bg-[#f0f2f5]' : 'bg-[#f8fafc]'} font-plus-jakarta flex overflow-hidden`}>
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isFoundation 
            ? 'bg-[#6200ea] text-white border-r-0' 
            : 'bg-white border-r-[4px] border-gray-100 flex flex-col'
        } flex flex-col shadow-2xl md:shadow-none`}
      >
        <div className="p-8 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => setSidebarOpen(false)}
            className={`text-3xl font-black tracking-tighter flex items-center gap-2 group ${isFoundation ? 'text-white' : 'text-gray-900'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:rotate-12 transition-transform ${
              isFoundation ? 'bg-pink-500 text-white' : 'bg-[#af101a] text-white'
            }`}>
              <FaGraduationCap />
            </div>
            <span>LearnSync</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className={`md:hidden p-2 ${isFoundation ? 'text-white/50' : 'text-gray-400'}`}>
            <FaTimes fontSize={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide pb-8">
          {currentNav.map((item) => {
            const isActive = location.pathname === item.path;
            
            if (item.action) {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action();
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-6 py-4 rounded-2xl transition-all ${
                    isActive
                      ? isFoundation 
                        ? 'bg-white/20 text-white shadow-lg' 
                        : 'bg-[#c21e25] text-white shadow-juicy border-b-4 border-red-800'
                      : isFoundation
                        ? 'text-white/70 hover:bg-white/10 hover:text-white'
                        : item.special
                          ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 border-b-4 border-amber-300'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-b-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="text-xl" />
                    <span className="font-black text-sm uppercase tracking-widest">{item.name}</span>
                  </div>
                  <FaChevronRight className="text-[10px] opacity-30" />
                </button>
              );
            }
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between gap-3 px-6 py-4 rounded-2xl transition-all ${
                  isActive 
                    ? isFoundation 
                      ? 'bg-white/20 text-white shadow-lg' 
                      : 'bg-[#af101a] text-white shadow-juicy border-b-4 border-red-800' 
                    : isFoundation
                      ? 'text-white/70 hover:bg-white/10 hover:text-white'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-b-4 border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon className={`text-xl ${isActive ? 'text-white' : isFoundation ? 'text-white/40' : 'text-gray-300'}`} />
                  <span className="font-black text-sm uppercase tracking-widest">{item.name}</span>
                </div>
                <FaChevronRight className={`text-[10px] ${isActive ? 'opacity-100' : 'opacity-30'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Profile Peek (Sidebar Bottom) */}
        <div className="p-4 mt-auto">
           <div className={`${isFoundation ? 'bg-white/10' : 'bg-gray-50'} rounded-[2rem] p-4 flex items-center gap-4 border-2 border-transparent hover:border-gray-100 transition-all`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 font-black shadow-sm ${
                isFoundation ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-gray-100 text-[#c21e25]'
              }`}>
                {currentUser?.name?.[0] || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-black truncate uppercase tracking-tighter ${isFoundation ? 'text-white' : 'text-gray-900'}`}>{currentUser?.name || 'User Name'}</p>
                <p className={`text-[10px] font-bold capitalize ${isFoundation ? 'text-white/50' : 'text-gray-400'}`}>{currentRole}</p>
              </div>
              <button 
                onClick={handleLogout}
                className={`p-3 rounded-xl transition-all ${isFoundation ? 'text-white/30 hover:text-white hover:bg-white/10' : 'text-gray-300 hover:text-red-500 hover:bg-red-50'}`}
                title="Logout"
              >
                <FaSignOutAlt />
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className={`h-20 backdrop-blur-md px-6 flex items-center justify-between shrink-0 relative z-40 ${
          isFoundation ? 'bg-white/80 border-b-0 shadow-sm' : 'bg-white/80 border-b-[4px] border-gray-50'
        }`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-3 text-gray-400 md:hidden hover:bg-gray-50 rounded-xl transition-colors"
            >
              <FaBars fontSize={20} />
            </button>
            <div className={`hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] ${isFoundation ? 'text-gray-400' : 'text-gray-300'}`}>
               System Status <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className={`relative p-3 transition-colors ${isFoundation ? 'text-gray-400 hover:text-[#6200ea]' : 'text-gray-400 hover:text-gray-900'}`}>
              <FaBell fontSize={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[2px] bg-gray-50 mx-2 hidden sm:block"></div>
            <Link to="/profile" className="flex items-center gap-4 p-1 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="hidden sm:block text-right">
                <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter">Profile Overview</p>
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em]">Last Active: 2m ago</p>
              </div>
              <div className={`w-10 h-10 rounded-full border-2 group-hover:border-blue-300 transition-colors flex items-center justify-center p-1 overflow-hidden ${
                isFoundation ? 'border-purple-100 bg-purple-50' : 'border-blue-100 bg-blue-50'
              }`}>
                <div className={`w-full h-full rounded-full flex items-center justify-center text-white font-black text-sm ${
                  isFoundation ? 'bg-[#6200ea]' : 'bg-[#af101a]'
                }`}>
                   {currentUser?.name?.[0] || 'U'}
                </div>
              </div>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Scroll Container */}
        <div className={`flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide ${isFoundation ? 'bg-[#f0f2f5]' : 'bg-[#f8fafc]'}`}>
          <div className="max-w-[1600px] mx-auto">
            {currentRole === 'student' && showChatbot ? (
              <div className="animate-in zoom-in duration-300 h-full">
                <ChatbotPanel
                  isOpen={showChatbot}
                  context={chatbotContext}
                  onQuizGenerated={(quiz) => {
                    if (currentUser) {
                      const updatedStudent = {
                        ...currentUser,
                        xp: (currentUser.xp || 0) + Math.floor(quiz.score / 10),
                      };
                      updateStudent(currentUser.id, updatedStudent);
                    }
                  }}
                  studentId={currentUser?.id}
                />
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[45] md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
