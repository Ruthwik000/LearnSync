import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Mic } from 'lucide-react';

const StudentOnboarding = ({ onComplete }) => {
  const { addStudent } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    class: '',
    subjects: [],
    availability: [],
    skillAssessment: {}
  });

  const subjects = ['Math', 'Science', 'English', 'History', 'Geography'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['4PM', '5PM', '6PM', '7PM'];

  const topics = {
    Math: ['Addition', 'Subtraction', 'Fractions', 'Division', 'Algebra'],
    Science: ['Photosynthesis', 'Human Body', 'Physics', 'Chemistry'],
    English: ['Grammar', 'Reading', 'Writing', 'Vocabulary']
  };

  const handleSubjectToggle = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleAvailabilityToggle = (day, time) => {
    const slot = `${day} ${time}`;
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(slot)
        ? prev.availability.filter(s => s !== slot)
        : [...prev.availability, slot]
    }));
  };

  const handleSkillAssessment = (subject, topic, level) => {
    setFormData(prev => ({
      ...prev,
      skillAssessment: {
        ...prev.skillAssessment,
        [subject]: {
          ...prev.skillAssessment[subject],
          [topic]: level
        }
      }
    }));
  };

  const handleSubmit = () => {
    const weakTopics = {};
    const strongTopics = {};

    Object.entries(formData.skillAssessment).forEach(([subject, topics]) => {
      weakTopics[subject] = [];
      strongTopics[subject] = [];
      
      Object.entries(topics).forEach(([topic, level]) => {
        if (level === 'weak') weakTopics[subject].push(topic.toLowerCase());
        if (level === 'strong') strongTopics[subject].push(topic.toLowerCase());
      });
    });

    const level = formData.age <= 10 ? 'foundation' : formData.age <= 14 ? 'growth' : 'mastery';

    const newStudent = {
      ...formData,
      level,
      weakTopics,
      strongTopics,
      progress: 0,
      xp: 0,
      level_number: 1,
      streak: 0,
      attendance: 100,
      completedTopics: [],
      onboarded: true
    };

    addStudent(newStudent);
    onComplete(newStudent);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome to LearnSync!</h2>
            <span className="text-gray-500">Step {step} of 4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>


        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Tell us about yourself</h3>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your age"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Class</label>
                <input
                  type="text"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 7th"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Subjects */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Select your subjects</h3>
            <div className="grid grid-cols-2 gap-3">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleSubjectToggle(subject)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.subjects.includes(subject)
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Availability */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">When can you study?</h3>
            <div className="space-y-3">
              {days.map((day) => (
                <div key={day}>
                  <p className="text-gray-700 font-medium mb-2">{day}</p>
                  <div className="flex gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleAvailabilityToggle(day, time)}
                        className={`px-4 py-2 rounded-xl border transition-all ${
                          formData.availability.includes(`${day} ${time}`)
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Skill Assessment */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Tell us where you need help</h3>
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100">
                <Mic className="w-4 h-4" />
                <span className="text-sm">Voice Input</span>
              </button>
            </div>
            {formData.subjects.map((subject) => (
              <div key={subject} className="space-y-2">
                <p className="font-semibold text-gray-900">{subject}</p>
                {topics[subject]?.map((topic) => (
                  <div key={topic} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">{topic}</span>
                    <div className="flex gap-2">
                      {['weak', 'okay', 'strong'].map((level) => (
                        <button
                          key={level}
                          onClick={() => handleSkillAssessment(subject, topic, level)}
                          className={`px-3 py-1 rounded-lg text-sm transition-all ${
                            formData.skillAssessment[subject]?.[topic] === level
                              ? level === 'weak'
                                ? 'bg-red-500 text-white'
                                : level === 'okay'
                                ? 'bg-yellow-500 text-white'
                                : 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                          }`}
                        >
                          {level === 'weak' ? '😕' : level === 'okay' ? '😐' : '😊'}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button variant="secondary" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={() => setStep(step + 1)} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="ml-auto">
              Complete
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default StudentOnboarding;
