import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FaEye, FaEyeSlash, FaGoogle, FaEnvelope, FaLock, 
  FaGraduationCap, FaChalkboardTeacher, FaUserShield,
  FaArrowRight, FaUserAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const { appData } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserSelect = (user, role) => {
    onLogin(user, role);
  };

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (appData.students.length > 0) {
      onLogin(appData.students[0], 'student');
    }
  };

  const BRAND_RED = '#af101a';

  return (
    <div className="min-h-screen bg-[#f3f4f6]/50 flex flex-col font-inter">
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Experience LearnSync Section */}
          <div className="hidden lg:block space-y-10">
            <div className="space-y-4">
               <h1 className="text-6xl font-black text-gray-900 leading-tight tracking-tighter">
                  Experience<br />
                  <span style={{ color: BRAND_RED }}>LearnSync</span>
               </h1>
               <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
                  Select a demo profile to explore our AI-powered learning environment instantly.
               </p>
            </div>

            <div className="space-y-3">
               {/* Demo Cards based on the provided image */}
               {[
                 { id: 'student_1', name: 'Priya Sharma', sub: 'Student • Class 4th • Foundation', icon: FaGraduationCap, color: '#fee2e2', textCol: '#af101a', student: appData.students.find(s => s.id === 'student_1'), role: 'student' },
                 { id: 'student_2', name: 'Aarav Kumar', sub: 'Student • Class 7th • Growth', icon: FaGraduationCap, color: '#fee2e2', textCol: '#af101a', student: appData.students.find(s => s.id === 'student_2'), role: 'student' },
                 { id: 'student_3', name: 'Rohan Patel', sub: 'Student • Class 11th • Mastery', icon: FaGraduationCap, color: '#fee2e2', textCol: '#af101a', student: appData.students.find(s => s.id === 'student_3'), role: 'student' },
                 { id: 'mentor_1', name: 'Dr. Anjali Verma', sub: 'Mentor • Math & Science', icon: FaChalkboardTeacher, color: '#fee2e2', textCol: '#af101a', student: appData.mentors.find(m => m.id === 'mentor_1'), role: 'mentor' },
                 { id: 'mentor_2', name: 'Rahul Mehta', sub: 'Mentor • English & Math', icon: FaChalkboardTeacher, color: '#fee2e2', textCol: '#af101a', student: appData.mentors.find(m => m.id === 'mentor_2'), role: 'mentor' },
                 { id: 'admin_1', name: 'Admin User', sub: 'NGO Administrator • Full Access', icon: FaUserAlt, color: '#fee2e2', textCol: '#af101a', student: { id: 'admin', name: 'Admin' }, role: 'admin' }
               ].map((card, i) => (
                 <div 
                   key={i}
                   onClick={() => handleUserSelect(card.student || { id: card.id, name: card.name }, card.role)}
                   className="group bg-white p-5 rounded-2xl border border-transparent hover:border-red-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                 >
                    <div className="flex items-center gap-5">
                       <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f3f4f6]" style={{ color: card.textCol }}>
                          <card.icon size={18} />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-sm leading-tight">{card.name}</h4>
                          <p className="text-gray-400 text-[11px] font-medium mt-0.5">{card.sub}</p>
                       </div>
                    </div>
                    <FaArrowRight className="text-gray-300 group-hover:text-red-600 transition-colors" size={14} />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Login Form Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-[2rem] shadow-[0_4px_32px_rgba(26,28,28,0.04)] p-10 md:p-14 border border-gray-100">
               <div className="text-center mb-10">
                  <h1 className="text-3xl font-black tracking-tighter mb-1" style={{ color: BRAND_RED }}>LearnSync</h1>
                  <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-8">AI-Powered Learning Platform</p>
                  <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
               </div>

               <form onSubmit={handleManualLogin} className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Email Address</label>
                     <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input 
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full bg-[#f3f4f6] border-none rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium focus:ring-1 focus:ring-red-600/10 transition-all outline-none"
                           placeholder="name@university.edu"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between items-center px-1">
                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Password</label>
                        <button type="button" className="text-[10px] font-black text-red-600 hover:underline uppercase tracking-wider">Forgot?</button>
                     </div>
                     <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input 
                           type={showPassword ? 'text' : 'password'}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full bg-[#f3f4f6] border-none rounded-xl py-3.5 pl-12 pr-12 text-sm font-medium focus:ring-1 focus:ring-red-600/10 transition-all outline-none"
                           placeholder="••••••••"
                        />
                        <button 
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                        >
                           {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                     </div>
                  </div>

                  <button 
                     type="submit"
                     className="w-full text-white py-4 rounded-xl font-bold transition-all active:scale-[0.98] mt-4 shadow-lg shadow-red-900/10"
                     style={{ backgroundColor: BRAND_RED }}
                  >
                     Sign In
                  </button>

                  <div className="relative flex items-center py-4">
                     <div className="flex-grow border-t border-gray-100"></div>
                     <span className="flex-shrink mx-4 text-gray-300 text-[10px] font-black uppercase tracking-widest">OR</span>
                     <div className="flex-grow border-t border-gray-100"></div>
                  </div>

                  <button 
                     type="button"
                     className="w-full bg-white border border-gray-100 text-gray-700 font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
                  >
                     <FaGoogle className="text-blue-500" />
                     <span className="text-sm">Sign in with Google</span>
                  </button>

                  <p className="text-center text-xs text-gray-500 font-medium pt-2">
                     Don't have an account? <span className="text-red-600 font-bold hover:underline cursor-pointer">Sign Up</span>
                  </p>

                  <div className="bg-[#f3f4f6] rounded-xl p-5 border border-gray-100/50 mt-10">
                     <div className="flex gap-4">
                        <FaUserShield className="text-gray-400 mt-0.5" size={16} />
                        <div>
                           <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-1 leading-none">Admin Access</p>
                           <p className="text-[10px] font-bold text-gray-400 leading-relaxed">
                              Platform administrators must use the designated institution portal for secure credentialing and oversight.
                           </p>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="w-full py-10 px-8 bg-white border-t border-gray-50">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-medium text-gray-400 uppercase tracking-[0.1em]">
            <div className="font-black text-sm text-gray-900 normal-case tracking-normal">LearnSync</div>
            <div className="flex flex-wrap justify-center gap-10">
               <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
               <span className="hover:text-black cursor-pointer transition-colors">Terms of Service</span>
               <span className="hover:text-black cursor-pointer transition-colors">Contact Support</span>
               <span className="hover:text-black cursor-pointer transition-colors">Security</span>
            </div>
            <div className="text-center md:text-right">
               © 2024 LearnSync AI-Powered Learning Platform. All rights reserved.
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Login;
