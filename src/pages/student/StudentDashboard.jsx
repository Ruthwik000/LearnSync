import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  FaStar, FaRocket, FaFlagCheckered, FaTrophy, FaFire, 
  FaBookOpen, FaGamepad, FaArrowRight, FaChartLine, FaClipboardList,
  FaLightbulb, FaUserAstronaut, FaDice, FaChevronRight, FaBolt, FaMagic, FaGraduationCap
} from 'react-icons/fa';

// Foundation Mode (Age 5–10): "Tactile Playground" interface
const FoundationDashboard = ({ student, courses }) => {
  const { currentUser } = useApp();
  const mascotUrl = "file:///C:/Users/Siddharth/.gemini/antigravity/brain/390ba4a9-35c2-4534-9a06-b69c6a5ab22c/learnsync_mascot_1774913410131.png";

  return (
    <div className="space-y-10 animate-in fade-in duration-700 font-plus-jakarta pb-20">
      {/* Mascot Hero */}
      <div className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-juicy border-4 border-white flex flex-col md:flex-row items-center gap-10 overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full -mr-20 -mt-20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
        <div className="relative shrink-0 w-56 h-56 animate-bounce-slow">
            <img 
               src={mascotUrl} 
               alt="Mascot"
               className="w-full h-full object-contain filter drop-shadow-2xl"
               onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://cdn-icons-png.flaticon.com/512/3588/3588636.png"; 
               }}
            />
        </div>
        <div className="relative flex-1 text-center md:text-left">
          <span className="inline-block px-6 py-2 bg-[#6200ea] text-white rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-lg shadow-purple-200">
             Mission Control
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
             Welcome back, <br />
             <span className="text-[#6200ea] decoration-wavy underline decoration-yellow-400">{currentUser?.name || student.name}!</span>
          </h1>
          <p className="text-lg text-gray-500 font-bold mb-8 max-w-lg">
             You have <span className="text-yellow-500">3 new missions</span> waiting for you today. Let's start the adventure!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <Link 
               to="/courses"
               className="px-10 py-5 bg-[#ffca18] text-gray-900 rounded-[2rem] font-black text-lg shadow-[0_12px_0_#d4a017] hover:translate-y-1 hover:shadow-[0_8px_0_#d4a017] active:translate-y-2 active:shadow-none transition-all flex items-center gap-3"
             >
               <FaGamepad /> START MISSION
             </Link>
             <div className="px-8 py-5 bg-white border-4 border-gray-100 rounded-[2rem] flex items-center gap-4 group-hover:scale-105 transition-transform">
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => (
                   <FaStar key={i} className={i <= 4 ? "text-yellow-400" : "text-gray-200"} size={22} />
                 ))}
               </div>
               <span className="font-black text-gray-400 text-sm">4/5 STARS</span>
             </div>
          </div>
        </div>
      </div>

      {/* Daily Missions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
           { title: 'Math Adventure', color: '#ffca18', icon: FaRocket, sub: 'Level 3 • Counting Stars' },
           { title: 'Word Explorer', color: '#12b3eb', icon: FaBookOpen, sub: 'Level 2 • Spell Power' },
           { title: 'Nature Quiz', color: '#81c784', icon: FaGraduationCap, sub: 'Level 5 • Green Magic' }
         ].map((card, idx) => (
           <div key={idx} className="group bg-white rounded-[2.5rem] p-4 shadow-lg border-4 border-transparent hover:border-gray-50 transition-all">
              <div 
                 className="rounded-[2.2rem] p-8 flex flex-col items-center text-center gap-6 h-full transition-transform group-hover:scale-[1.02]"
                 style={{ backgroundColor: card.color + '15' }}
              >
                 <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-4xl shadow-xl transition-transform group-hover:rotate-12" style={{ backgroundColor: card.color }}>
                   <card.icon />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{card.sub}</p>
                 </div>
                 <Link 
                    to="/courses"
                    className="mt-auto w-full py-4 rounded-2xl font-black text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                    style={{ backgroundColor: card.color }}
                 >
                   PLAY NOW
                 </Link>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

// Growth Mode (Age 11–15): "Academic Dashboard" interface
const GrowthDashboard = ({ student, courses }) => {
  const navigate = useNavigate();
  const BRAND_RED = '#af101a';

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700 font-plus-jakarta">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
           <p style={{ color: BRAND_RED }} className="font-black uppercase tracking-[0.3em] text-[10px] mb-2">Student Dashboard • Level {student.level_number || 1}</p>
           <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none">
             Welcome back, {student.name.split(' ')[0]}!
           </h1>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-4 rounded-2xl border-2 border-gray-50 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shadow-sm">
                 <FaBolt />
              </div>
              <div>
                 <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Streak</p>
                 <p className="font-black text-gray-900 leading-tight">{student.streak || 1} Days</p>
              </div>
           </div>
           <div style={{ backgroundColor: BRAND_RED }} className="px-6 py-4 rounded-2xl shadow-lg shadow-red-200 flex items-center gap-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-inner">
                 <FaMagic />
              </div>
              <div>
                 <p className="text-[9px] font-black text-white/50 uppercase tracking-widest">Global XP</p>
                 <p className="font-black leading-tight">{student.xp || 0}</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-gray-200 transition-all">
             <div className="absolute top-0 right-0 p-8 h-full flex flex-col justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                <FaGraduationCap size={200} />
             </div>
             <div className="relative">
                <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3 decoration-2 underline decoration-red-100">
                   Current Focus <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {courses.slice(0, 2).map((course, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="flex justify-between items-end">
                           <span className="font-black text-gray-900 uppercase tracking-widest text-[10px] opacity-60">{course.name}</span>
                           <span style={{ color: BRAND_RED }} className="font-black italic">{(idx + 4) * 15}%</span>
                        </div>
                        <div className="h-3 bg-gray-50 rounded-full overflow-hidden border border-gray-100 shadow-inner p-[2px]">
                           <div 
                              style={{ width: `${(idx + 4) * 15}%`, backgroundColor: BRAND_RED }} 
                              className="h-full rounded-full transition-all duration-1000 shadow-lg"
                           ></div>
                        </div>
                      </div>
                   ))}
                </div>
                <button 
                  onClick={() => navigate('/courses')}
                  className="mt-12 px-10 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-[#af101a] transition-all hover:shadow-xl active:scale-95 flex items-center gap-3"
                >
                  Jump Back In <FaArrowRight />
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {courses.slice(2, 4).map((course, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/courses')}>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                         <FaBookOpen className="text-gray-300 group-hover:text-red-500" />
                      </div>
                      <div>
                         <h4 className="font-black text-gray-900 text-sm truncate max-w-[150px]">{course.name}</h4>
                         <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-0.5">{course.subject}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 space-y-8">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                 <FaChartLine style={{ color: BRAND_RED }} /> Growth
              </h3>
              <div className="space-y-6">
                 {[
                   { label: 'Logical', val: 78 },
                   { label: 'Creative', val: 92 },
                   { label: 'Technical', val: 65 }
                 ].map((skill, i) => (
                   <div key={i} className="space-y-2">
                     <div className="flex justify-between font-black text-[10px] uppercase tracking-widest text-gray-400">
                        <span>{skill.label}</span>
                        <span className="text-gray-900">{skill.val}%</span>
                     </div>
                     <div className="h-2 bg-white rounded-full border border-gray-100 overflow-hidden">
                        <div style={{ width: `${skill.val}%`, backgroundColor: BRAND_RED }} className="h-full rounded-full opacity-80"></div>
                     </div>
                   </div>
                 ))}
              </div>
              <div className="p-5 bg-white rounded-2xl border border-gray-100 group cursor-pointer hover:border-red-100 transition-all">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-[#af101a] shrink-0 group-hover:rotate-12 transition-transform">
                       <FaLightbulb />
                    </div>
                    <p className="text-[11px] font-bold text-gray-500 leading-relaxed">
                       Your efficiency in <span className="text-gray-900 font-black">Math</span> is 15% higher in morning sessions.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
};

// Mastery Mode (Age 16–20): "Executive Terminal" interface
const MasteryDashboard = ({ student, courses }) => {
  const navigate = useNavigate();
  const BRAND_RED = '#af101a';

  return (
    <div className="space-y-10 animate-in zoom-in duration-700 font-plus-jakarta pb-20">
      <div className="backdrop-blur-xl bg-gray-900 text-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden border border-white/5">
        <div style={{ backgroundColor: BRAND_RED }} className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -mr-[250px] -mt-[250px] blur-[120px] opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
             <div style={{ backgroundColor: BRAND_RED }} className="h-[2px] w-12"></div>
             <span style={{ color: BRAND_RED }} className="text-[10px] font-black tracking-[0.4em] uppercase">Status: Operational</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-[1000] tracking-tighter mb-8 leading-none">
             Executive <br /> Dashboard.
          </h1>
          <p className="text-gray-400 font-bold max-w-xl text-lg mb-12 leading-relaxed uppercase tracking-tighter">
             Welcome, {student.name}. Your learning velocity is currently at <span className="text-white italic underline decoration-[#af101a]">1.4x the target pace</span>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
               { label: 'Uptime', val: '98%' },
               { label: 'Modules', val: '14/18' },
               { label: 'Velocity', val: '94.8' },
               { label: 'Network', val: 'A+' }
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 group-hover:text-red-400 transition-colors">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.val}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
         <div className="lg:col-span-3 space-y-10">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
               <h3 className="text-3xl font-black text-gray-900 tracking-tight">Curriculum Tracking</h3>
               <button onClick={() => navigate('/courses')} className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-black transition-colors px-6 py-2 rounded-full border border-gray-100">Full Registry</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {courses.slice(0, 4).map((course, idx) => (
                  <div key={idx} className="group bg-white border-b-2 border-gray-100 hover:border-red-500 p-8 transition-all">
                     <div className="flex justify-between items-center mb-6">
                        <span style={{ color: BRAND_RED }} className="text-[10px] font-black uppercase tracking-widest">Registry ID #00{idx+1}</span>
                        <FaRocket className="text-gray-100 group-hover:text-red-100 transition-colors" />
                     </div>
                     <h4 className="text-2xl font-black text-gray-900 mb-8 group-hover:translate-x-2 transition-transform">{course.name}</h4>
                     <div className="flex items-end justify-between gap-6">
                        <div className="flex-1 space-y-3">
                           <div className="flex justify-between text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">
                              <span>Synchronization</span>
                              <span>{(idx + 2) * 18}%</span>
                           </div>
                           <div className="h-[2px] bg-gray-50 w-full overflow-hidden">
                              <div style={{ width: `${(idx + 2) * 18}%`, backgroundColor: BRAND_RED }} className="h-full"></div>
                           </div>
                        </div>
                        <button onClick={() => navigate('/courses')} className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all">
                           <FaChevronRight />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="space-y-10">
            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-4">Operations</h4>
               {[
                 { label: 'Initialize Course', icon: FaBolt },
                 { label: 'Strategic Review', icon: FaTrophy },
                 { label: 'Data Export', icon: FaClipboardList }
               ].map((op, i) => (
                 <button key={i} className="w-full flex items-center justify-between p-5 rounded-2xl border border-gray-100 font-black text-xs uppercase tracking-widest text-gray-600 hover:bg-gray-50 group transition-all">
                    <span className="flex items-center gap-4"><op.icon style={{ color: BRAND_RED }} /> {op.label}</span>
                    <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
               ))}
            </div>
            <div className="p-8 bg-gray-900 rounded-[2.5rem] shadow-2xl space-y-6">
                <div className="w-12 h-12 bg-[#af101a] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-red-900">
                   <FaMagic />
                </div>
                <h5 className="text-white font-black uppercase text-[10px] tracking-widest">AI Strategy Advisor</h5>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">
                   Based on your recent calculus modules, we've adjusted your strategy to prioritize <span className="text-white">Multivariable Integration</span> for the next 72 hours.
                </p>
            </div>
         </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const StudentDashboard = () => {
  const { appData, currentUser } = useApp();
  
  const student = appData.students.find(s => s.id === currentUser?.id);
  
  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="w-16 h-16 border-4 border-t-[#af101a] border-gray-100 rounded-full animate-spin"></div>
        <p className="text-gray-500 font-black uppercase tracking-widest text-xs">Syncing Data...</p>
      </div>
    );
  }
  
  const courses = appData.courses.filter(c => student.subjects && student.subjects.includes(c.subject));

  if (student.age <= 10) {
    return <FoundationDashboard student={student} courses={courses} />;
  } else if (student.age <= 15) {
    return <GrowthDashboard student={student} courses={courses} />;
  } else {
    return <MasteryDashboard student={student} courses={courses} />;
  }
};

export default StudentDashboard;
