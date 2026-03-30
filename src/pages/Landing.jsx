import { useNavigate } from 'react-router-dom';
import { SmokeBackground } from '../components/ui/SmokeBackground';
import { BookOpen, Users, Brain, Sparkles, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized study plans and intelligent tutoring that adapts to your learning style',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Connect with qualified mentors who guide you through your educational journey',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed analytics and achievement tracking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Interactive Content',
      description: 'Engage with dynamic courses, quizzes, and hands-on learning materials',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Gamified Learning',
      description: 'Earn XP, unlock achievements, and compete with peers to stay motivated',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Access subjects aligned with Indian education standards',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Students' },
    { value: '500+', label: 'Expert Mentors' },
    { value: '50+', label: 'Courses' },
    { value: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 opacity-60">
        <SmokeBackground smokeColor="#1a1a1a" />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="px-6 py-6 backdrop-blur-sm bg-black bg-opacity-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">LearnSync</span>
            </div>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-4">
                AI-Powered Education Platform
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                Empowering
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Education
                </span>
                <br />
                Through AI
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A comprehensive learning platform connecting students, mentors, and NGOs
                with AI-powered personalized education
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg border-0 shadow-2xl shadow-blue-500/50"
                >
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="secondary" 
                  className="bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-20 text-white hover:bg-opacity-20 px-8 py-4 text-lg"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 via-opacity-5 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-400">
                Powerful features designed for modern learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose LearnSync?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
                {[
                  'Personalized AI-driven learning paths',
                  'Real-time progress tracking',
                  'Expert mentor support 24/7',
                  'Interactive quizzes and assessments',
                  'Gamified learning experience',
                  'Aligned with Indian curriculum'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              Your Learning?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join thousands of students already learning smarter with LearnSync
            </p>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 text-xl border-0 shadow-2xl shadow-blue-500/50"
            >
              Get Started Free
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white border-opacity-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">LearnSync</span>
              </div>
              <p className="text-gray-400">
                &copy; 2024 LearnSync. Empowering education through technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
