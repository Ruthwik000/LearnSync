import { useApp } from '../../context/AppContext';
import Card from '../../components/Card';
import { Users, UserCheck, TrendingUp, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const { appData } = useApp();
  const { analytics } = appData;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">NGO Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Monitor and manage your learning programs</p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.totalStudents}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-50 rounded-xl">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Mentors</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.activeMentors}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Avg Progress</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.avgProgress}%</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-50 rounded-xl">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Attendance</p>
              <p className="text-2xl font-semibold text-gray-900">{analytics.attendanceRate}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Progress Chart */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Progress Trend</h2>
        <div className="flex items-end gap-4 h-64">
          {analytics.weeklyProgress.map((week, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-blue-600 rounded-t-xl" style={{ height: `${week.progress}%` }}></div>
              <p className="text-gray-600 text-sm mt-2">{week.week}</p>
              <p className="text-gray-900 font-semibold">{week.progress}%</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Weak Subjects */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Subjects Needing Attention</h2>
        <div className="space-y-3">
          {analytics.weakSubjects.map((item) => (
            <div key={item.subject} className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
              <span className="text-gray-900 font-medium">{item.subject}</span>
              <span className="text-red-600">{item.percentage}% students struggling</span>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Insights */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Recommendations</h2>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-blue-900 font-medium">📊 Increase Math session frequency</p>
            <p className="text-blue-700 text-sm mt-1">70% of students are weak in Math. Consider adding more mentors.</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-green-900 font-medium">✅ English program performing well</p>
            <p className="text-green-700 text-sm mt-1">Students show strong engagement. Continue current approach.</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-yellow-900 font-medium">⚠️ Attendance declining</p>
            <p className="text-yellow-700 text-sm mt-1">Send reminders and check student availability.</p>
          </div>
        </div>
      </Card>

      {/* Student Overview */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Student Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-700 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-gray-700 font-medium">Mentor</th>
                <th className="text-left py-3 px-4 text-gray-700 font-medium">Progress</th>
                <th className="text-left py-3 px-4 text-gray-700 font-medium">Attendance</th>
                <th className="text-left py-3 px-4 text-gray-700 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {appData.students.map((student) => {
                const mentor = appData.mentors.find(m => m.id === student.mentorId);
                return (
                  <tr key={student.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{student.name}</td>
                    <td className="py-3 px-4 text-gray-600">{mentor?.name || 'Unassigned'}</td>
                    <td className="py-3 px-4 text-gray-600">{student.progress}%</td>
                    <td className="py-3 px-4 text-gray-600">{student.attendance}%</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        student.attendance >= 80 && student.progress >= 60
                          ? 'bg-green-100 text-green-600'
                          : student.attendance >= 60 || student.progress >= 40
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {student.attendance >= 80 && student.progress >= 60
                          ? 'Active'
                          : student.attendance >= 60 || student.progress >= 40
                          ? 'Needs Support'
                          : 'At Risk'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
