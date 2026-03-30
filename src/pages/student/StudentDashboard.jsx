import { useApp } from '../../context/AppContext';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import { BookOpen, Target, TrendingUp, Zap } from 'lucide-react';

const StudentDashboard = () => {
  const { appData, currentUser } = useApp();
  
  const student = appData.students.find(s => s.id === currentUser?.id) || appData.students[0];
  const studyPlan = appData.studyPlans.find(p => p.studentId === student.id);
  const courses = appData.courses.filter(c => student.subjects.includes(c.subject));

  const getAgeMode = (age) => {
    if (age <= 10) return { mode: 'Foundation', emoji: '⭐', color: 'text-yellow-600' };
    if (age <= 14) return { mode: 'Growth', emoji: '🚀', color: 'text-blue-600' };
    return { mode: 'Mastery', emoji: '🎯', color: 'text-purple-600' };
  };

  const ageMode = getAgeMode(student.age);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Welcome back, {student.name}! {ageMode.emoji}
        </h1>
        <p className="text-gray-500 mt-1">{ageMode.mode} Mode • Level {student.level_number}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">XP Points</p>
              <p className="text-2xl font-semibold text-gray-900">{student.xp}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-50 rounded-xl">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Streak</p>
              <p className="text-2xl font-semibold text-gray-900">{student.streak} days</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Progress</p>
              <p className="text-2xl font-semibold text-gray-900">{student.progress}%</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-50 rounded-xl">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Attendance</p>
              <p className="text-2xl font-semibold text-gray-900">{student.attendance}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Today's Study Plan */}
      {studyPlan && (
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Study Plan</h2>
          <div className="space-y-3">
            {studyPlan.tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <input
                  type="checkbox"
                  checked={task.completed}
                  className="w-5 h-5 text-blue-600 rounded"
                  readOnly
                />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{task.task}</p>
                  <p className="text-gray-500 text-sm">{task.topic} • {task.xp} XP</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-4 w-full">Start Learning</Button>
        </Card>
      )}

      {/* Courses */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Card key={course.id}>
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">{course.name}</h3>
              </div>
              <ProgressBar progress={Math.random() * 100} className="mb-2" />
              <p className="text-gray-500 text-sm mb-3">{course.chapters.length} chapters</p>
              <Button variant="secondary" className="w-full">Continue</Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Weak Areas */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Areas to Improve</h2>
        <div className="space-y-2">
          {Object.entries(student.weakTopics).map(([subject, topics]) => (
            <div key={subject}>
              {topics.map((topic) => (
                <div key={topic} className="flex items-center justify-between p-3 bg-red-50 rounded-xl mb-2">
                  <span className="text-red-600 font-medium capitalize">{topic}</span>
                  <span className="text-red-500 text-sm">{subject}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default StudentDashboard;
