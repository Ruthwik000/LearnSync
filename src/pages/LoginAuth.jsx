import { useState } from 'react';
import { motion } from 'framer-motion';
import { signIn, signUp, signInWithGoogle } from '../services/auth';
import {
  FaGoogle, FaEye, FaEyeSlash,
  FaGraduationCap, FaChalkboardTeacher,
  FaUserShield, FaArrowRight,
} from 'react-icons/fa';
import { MdEmail, MdLock, MdAdminPanelSettings, MdPerson } from 'react-icons/md';

/* ── Role icon ── */
const RoleIcon = ({ role }) => {
  const cls = 'text-[#b91c1c] text-sm';
  if (role === 'student') return <FaGraduationCap className={cls} />;
  if (role === 'mentor')  return <FaChalkboardTeacher className={cls} />;
  return <FaUserShield className={cls} />;
};

/* ── Single demo profile row ── */
const ProfileRow = ({ name, subtitle, role, onClick, delay, disabled }) => (
  <motion.button
    initial={{ opacity: 0, x: -14 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.2, delay }}
    onClick={onClick}
    disabled={disabled}
    className="w-full flex items-center gap-3 px-4 py-3.5 bg-white border border-gray-200 rounded-xl
               hover:border-[#b91c1c] hover:shadow-sm transition-all duration-200 group text-left
               disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
      <RoleIcon role={role} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-900 text-sm leading-tight">{name}</p>
      <p className="text-xs text-gray-500 truncate mt-0.5">{subtitle}</p>
    </div>
    <FaArrowRight className="text-gray-300 group-hover:text-[#b91c1c] transition-colors flex-shrink-0 text-xs" />
  </motion.button>
);

/* ── Main ── */
const LoginAuth = ({ onLogin }) => {
  const [isSignUp, setIsSignUp]   = useState(false);
  const [role, setRole]           = useState('student');
  const [showPw, setShowPw]       = useState(false);
  const [showCPw, setShowCPw]     = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [formData, setFormData]   = useState({
    email: '', password: '', name: '', confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    setError('');
  };

  /* Demo profiles */
  const demos = [
    { name: 'Priya Sharma',     subtitle: 'Student • Class 4th • Foundation', role: 'student',
      data: { id: 'demo-priya',  name: 'Priya Sharma',     email: 'priya@demo.com',  role: 'student', onboarded: true, age: 9,  class: '4th',  level: 'foundation', xp: 280, level_number: 3, streak: 3, progress: 45, attendance: 70, subjects: ['Math','English'], weakTopics: { Math: ['subtraction'], English: ['reading'] }, strongTopics: { Math: ['counting'] }, completedTopics: ['counting'] } },
    { name: 'Aarav Kumar',      subtitle: 'Student • Class 7th • Growth',     role: 'student',
      data: { id: 'demo-aarav',  name: 'Aarav Kumar',      email: 'aarav@demo.com',  role: 'student', onboarded: true, age: 12, class: '7th',  level: 'growth',     xp: 450, level_number: 5, streak: 7, progress: 65, attendance: 85, subjects: ['Math','Science','English'], weakTopics: { Math: ['fractions','decimals'], Science: ['photosynthesis'] }, strongTopics: { Math: ['addition'], English: ['grammar'] }, completedTopics: ['addition','grammar'] } },
    { name: 'Rohan Patel',      subtitle: 'Student • Class 11th • Mastery',   role: 'student',
      data: { id: 'demo-rohan',  name: 'Rohan Patel',      email: 'rohan@demo.com',  role: 'student', onboarded: true, age: 16, class: '11th', level: 'mastery',    xp: 890, level_number: 9, streak: 12, progress: 78, attendance: 92, subjects: ['Math','Science','English'], weakTopics: { Math: ['calculus'], Science: ['organic chemistry'] }, strongTopics: { Math: ['algebra'], English: ['essay writing'] }, completedTopics: ['algebra','essay writing','trigonometry'] } },
    { name: 'Dr. Anjali Verma', subtitle: 'Mentor • Math & Science',          role: 'mentor',
      data: { id: 'demo-anjali', name: 'Dr. Anjali Verma', email: 'anjali@demo.com', role: 'mentor',  onboarded: true, subjects: ['Math','Science'], sessionsCompleted: 45, avgImprovement: 25, assignedStudents: [1,3] } },
    { name: 'Rahul Mehta',      subtitle: 'Mentor • English & Math',          role: 'mentor',
      data: { id: 'demo-rahul',  name: 'Rahul Mehta',      email: 'rahul@demo.com',  role: 'mentor',  onboarded: true, subjects: ['English','Math'], sessionsCompleted: 28, avgImprovement: 18, assignedStudents: [2] } },
    { name: 'Admin User',       subtitle: 'NGO Administrator • Full Access',  role: 'admin',
      data: { id: 'admin',       name: 'Admin User',        email: 'admin@demo.com',  role: 'admin',   onboarded: true } },
  ];

  const handleDemo = (profile) => {
    sessionStorage.setItem('demoUser', JSON.stringify(profile.data));
    onLogin(profile.data, profile.role);
  };

  const handleGoogle = async () => {
    setError(''); setLoading(true);
    try {
      const res = await signInWithGoogle(role);
      if (res.success) onLogin(res.user, res.role);
      else setError(res.error);
    } catch { setError('An unexpected error occurred.'); }
    finally { setLoading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) { setError('Passwords do not match'); setLoading(false); return; }
        if (formData.password.length < 6) { setError('Password must be at least 6 characters'); setLoading(false); return; }
        const res = await signUp(formData.email, formData.password, { name: formData.name, role, onboarded: false });
        if (res.success) onLogin(res.user, role); else setError(res.error);
      } else {
        const res = await signIn(formData.email, formData.password);
        if (res.success) onLogin(res.user, res.role); else setError(res.error);
      }
    } catch { setError('An unexpected error occurred.'); }
    finally { setLoading(false); }
  };

  const resetForm = () => {
    setIsSignUp(v => !v);
    setError('');
    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col">

      {/* ── Content ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-[900px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {/* Headline */}
            <div>
              <h1 className="text-[2.6rem] font-black text-gray-900 leading-none tracking-tight">Experience</h1>
              <h1 className="text-[2.6rem] font-black text-[#b91c1c] leading-none tracking-tight">LearnSync</h1>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-[320px]">
                Select a demo profile to explore our AI-powered learning environment instantly.
              </p>
            </div>

            {/* Profile rows */}
            <div className="space-y-2">
              {demos.map((p, i) => (
                <ProfileRow
                  key={p.data.id}
                  name={p.name}
                  subtitle={p.subtitle}
                  role={p.role}
                  delay={0.04 * i}
                  disabled={loading}
                  onClick={() => handleDemo(p)}
                />
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Auth card ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="bg-white rounded-2xl shadow-md px-8 py-8 space-y-5"
          >
            {/* Logo */}
            <div className="text-center space-y-0.5">
              <p className="text-xl font-black text-[#b91c1c] tracking-tight">LearnSync</p>
              <p className="text-[9px] font-semibold text-gray-400 tracking-[0.2em] uppercase">
                AI-Powered Learning Platform
              </p>
            </div>

            <h2 className="text-lg font-bold text-gray-900 text-center">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>

            {/* Role picker (sign-up only) */}
            {isSignUp && (
              <div className="grid grid-cols-2 gap-2">
                {['student', 'mentor'].map(r => (
                  <button key={r} type="button" onClick={() => setRole(r)}
                    className={`py-2 rounded-xl border-2 text-xs font-bold capitalize transition-all ${
                      role === r
                        ? 'border-[#b91c1c] bg-red-50 text-[#b91c1c]'
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}>
                    {r}
                  </button>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="px-3 py-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">

              {isSignUp && (
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full pl-8 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c] focus:bg-white transition-all" />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="name@university.edu"
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c] focus:bg-white transition-all" />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Password</label>
                  {!isSignUp && (
                    <button type="button" className="text-[11px] text-[#b91c1c] font-bold hover:underline">
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                  <input type={showPw ? 'text' : 'password'} name="password"
                    value={formData.password} onChange={handleChange} placeholder="••••••••"
                    className="w-full pl-8 pr-9 py-2.5 bg-gray-100 border border-transparent rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c] focus:bg-white transition-all" />
                  <button type="button" onClick={() => setShowPw(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                    {showPw ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              {isSignUp && (
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                    <input type={showCPw ? 'text' : 'password'} name="confirmPassword"
                      value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••"
                      className="w-full pl-8 pr-9 py-2.5 bg-gray-100 border border-transparent rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b91c1c] focus:bg-white transition-all" />
                    <button type="button" onClick={() => setShowCPw(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                      {showCPw ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={loading}
                className="w-full py-2.5 rounded-xl bg-[#b91c1c] hover:bg-[#991b1b] disabled:opacity-60 text-white font-bold text-sm tracking-wide transition-colors">
                {loading ? 'Please wait…' : isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            {/* OR divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[11px] text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google */}
            <button onClick={handleGoogle} disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold text-gray-700 transition-colors disabled:opacity-60">
              <FaGoogle className="text-[#4285F4]" />
              {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </button>

            {/* Toggle sign-in / sign-up */}
            <p className="text-center text-xs text-gray-500">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button onClick={resetForm} className="text-[#b91c1c] font-bold hover:underline">
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>

            {/* Admin notice */}
            <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
              <MdAdminPanelSettings className="text-gray-400 text-lg flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Admin Access</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Platform administrators must use the designated institution portal for secure credentialing and oversight.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-white px-8 py-4">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-sm font-black text-gray-900">LearnSync</span>
          <div className="flex items-center gap-5 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            {['Privacy Policy', 'Terms of Service', 'Contact Support', 'Security'].map(l => (
              <span key={l} className="hover:text-gray-600 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">
            © 2024 LearnSync AI-Powered Learning Platform. All Rights Reserved.
          </span>
        </div>
      </footer>

    </div>
  );
};

export default LoginAuth;
