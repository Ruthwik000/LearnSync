import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Calendar, CheckCircle, Circle, Sparkles } from 'lucide-react';
import { callGemini } from '../../utils/gemini';

const StudyPlan = () => {
  const { appData, currentUser, updateStudyPlan } = useApp();
  const [loading, setLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState(null);

  const student = appData.students.find(s => s.id === currentUser?.id) || appData.students[0];
  const studyPlan = appData.studyPlans.find(p => p.studentId === student.id);

  const handleTaskToggle = (taskId) => {
    if (studyPlan) {
      const updatedTasks = studyPlan.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      updateStudyPlan(studyPlan.id, { tasks: updatedTasks });
    }
  };

  const handleGeneratePlan = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a study plan for a ${student.level} level student who is weak in ${Object.values(student.weakTopics).flat().join(', ')}. Available time: ${student.availability.join(', ')}`;
      const response = await callGemini(prompt);
      setAiSuggestion(response.data);
    } catch (error) {
      console.error('Error generating plan:', error);
    } finally {
      setLoading(false);
    }
  };

  const completedTasks = studyPlan?.tasks.filter(t => t.completed).length || 0;
  const totalTasks = studyPlan?.tasks.length || 0;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Study Planner</h1>
          <p className="text-gray-500 mt-1">Your personalized learning schedule</p>
        </div>
        <Button onClick={handleGeneratePlan} disabled={loading}>
          <Sparkles className="w-4 h-4 mr-2 inline" />
          {loading ? 'Generating...' : 'AI Study Plan'}
        </Button>
      </div>

      {/* Progress Overview */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Today's Progress</h2>
          <span className="text-gray-600">{completedTasks} / {totalTasks} tasks</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Card>

      {/* Today's Tasks */}
      {studyPlan && (
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Today's Tasks</h2>
          </div>
          <div className="space-y-3">
            {studyPlan.tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskToggle(task.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  task.completed
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {task.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`font-medium ${task.completed ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                    {task.task}
                  </p>
                  <p className="text-gray-500 text-sm">{task.topic} • {task.xp} XP</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* AI Suggestion */}
      {aiSuggestion && (
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">AI Recommendations</h2>
          </div>
          <div className="space-y-4">
            {aiSuggestion.daily && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Daily Plan</h3>
                <ul className="space-y-2">
                  {aiSuggestion.daily.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {aiSuggestion.weekly && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Weekly Schedule</h3>
                <ul className="space-y-2">
                  {aiSuggestion.weekly.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Weekly Overview */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">This Week</h2>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center">
              <p className="text-gray-600 text-sm mb-2">{day}</p>
              <div className={`h-20 rounded-xl flex items-center justify-center ${
                index < 3 ? 'bg-green-100 text-green-600' :
                index < 5 ? 'bg-blue-100 text-blue-600' :
                'bg-gray-100 text-gray-400'
              }`}>
                {index < 3 ? '✓' : index < 5 ? '○' : '-'}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default StudyPlan;
