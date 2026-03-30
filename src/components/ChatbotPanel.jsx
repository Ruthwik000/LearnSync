import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Brain, CheckCircle, XCircle } from 'lucide-react';
import { callGemini } from '../utils/gemini';
import Button from './Button';

const ChatbotPanel = ({ isOpen, context = null, onQuizGenerated = null, studentId = null }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationCount, setConversationCount] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (context) {
      setMessages([{
        role: 'assistant',
        content: `I'm here to help you understand "${context.title}". Ask me anything about this topic.`
      }]);
    } else {
      setMessages([{
        role: 'assistant',
        content: "Hi! I'm your AI learning assistant. How can I help you today?"
      }]);
    }
    setConversationCount(0);
    setShowQuiz(false);
    setGeneratedQuiz(null);
    setQuizAnswers({});
    setQuizSubmitted(false);
  }, [context, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleGenerateQuiz = async () => {
    setLoading(true);
    setShowQuiz(true);
    
    try {
      const topicContext = context ? `Topic: ${context.title}\nContent: ${context.content}` : 
        `Based on our conversation about the topics discussed`;
      
      const prompt = `${topicContext}

Generate a quiz with 3 multiple-choice questions to test understanding. 
Respond ONLY with valid JSON in this exact format, no additional text:
{
  "questions": [
    {
      "question": "Question text here",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0
    }
  ]
}`;

      const response = await callGemini(prompt);
      
      let quizData;
      try {
        const jsonMatch = response.data.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          quizData = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('No JSON found');
        }
      } catch {
        quizData = {
          questions: [
            {
              question: `What is the main concept we discussed about ${context?.title || 'this topic'}?`,
              options: ['Concept A', 'Concept B', 'Concept C', 'Concept D'],
              correct: 0
            },
            {
              question: 'Which statement best describes what we learned?',
              options: ['Statement A', 'Statement B', 'Statement C', 'Statement D'],
              correct: 1
            },
            {
              question: 'How would you apply this knowledge?',
              options: ['Application A', 'Application B', 'Application C', 'Application D'],
              correct: 2
            }
          ]
        };
      }
      
      setGeneratedQuiz(quizData);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I've created a quiz to test your understanding. Please answer the questions below.`
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I had trouble creating the quiz. Please try again.'
      }]);
      setShowQuiz(false);
    } finally {
      setLoading(false);
    }
  };

  const handleQuizSubmit = () => {
    if (!generatedQuiz) return;
    
    const correctCount = generatedQuiz.questions.filter((q, idx) => 
      quizAnswers[idx] === q.correct
    ).length;
    
    const score = (correctCount / generatedQuiz.questions.length) * 100;
    
    setQuizSubmitted(true);
    
    const message = score >= 80 ? 'Excellent work!' : score >= 60 ? 'Good job!' : 'Keep practicing!';
    
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: `${message} You scored ${correctCount}/${generatedQuiz.questions.length} (${score.toFixed(0)}%)`
    }]);
    
    if (onQuizGenerated) {
      onQuizGenerated({
        topic: context?.title || 'General',
        score,
        correctCount,
        totalQuestions: generatedQuiz.questions.length,
        studentId
      });
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);
    setConversationCount(prev => prev + 1);

    try {
      let prompt = userMessage;
      
      if (context) {
        prompt = `Topic: ${context.title}\nContent: ${context.content}\n\nStudent question: ${userMessage}\n\nProvide a clear, concise explanation in plain text. Do not use asterisks, markdown formatting, or special characters. Write in simple paragraphs.`;
      } else {
        prompt = `Student asks: ${userMessage}\n\nProvide a helpful, educational response in plain text. Do not use asterisks, markdown formatting, bullet points, or special characters. Write in simple, clear paragraphs suitable for a student.`;
      }

      const response = await callGemini(prompt);
      
      // Clean up response - remove asterisks and extra formatting
      let cleanedResponse = typeof response.data === 'string' ? response.data : 'Let me help you with that.';
      cleanedResponse = cleanedResponse
        .replace(/\*\*/g, '')  // Remove bold markers
        .replace(/\*/g, '')    // Remove italic markers
        .replace(/#{1,6}\s/g, '') // Remove markdown headers
        .replace(/`{1,3}/g, '') // Remove code markers
        .trim();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: cleanedResponse
      }]);
      
      // Show quiz suggestion after 2 exchanges
      if (conversationCount + 1 >= 2 && !showQuiz && !quizSubmitted) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: "Would you like to take a quick quiz to test your understanding of what we discussed?"
          }]);
        }, 1000);
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">AI Tutor</h1>
        <p className="text-gray-500 mt-1">
          {context ? `Learning about: ${context.title}` : 'Ask me anything about your studies'}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col" style={{ height: 'calc(100vh - 250px)' }}>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
              )}
              <div
                className={`max-w-[75%] p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-800 border border-gray-200'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

      {/* Input */}
      <div className="border-t border-gray-200 bg-white p-4">
        {/* Quiz Section */}
        {showQuiz && generatedQuiz && !quizSubmitted && (
          <div className="mb-4 space-y-3 max-h-64 overflow-y-auto">
            {generatedQuiz.questions.map((q, qIdx) => (
              <div key={qIdx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-3 text-sm">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((option, optIdx) => (
                    <label
                      key={optIdx}
                      className={`flex items-center gap-3 p-2 rounded-lg border-2 cursor-pointer transition-all ${
                        quizAnswers[qIdx] === optIdx
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`quiz-${qIdx}`}
                        checked={quizAnswers[qIdx] === optIdx}
                        onChange={() => setQuizAnswers({ ...quizAnswers, [qIdx]: optIdx })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <Button
              onClick={handleQuizSubmit}
              disabled={Object.keys(quizAnswers).length !== generatedQuiz.questions.length}
              className="w-full"
            >
              Submit Quiz
            </Button>
          </div>
        )}
        
        {/* Generate Quiz Button */}
        {!showQuiz && !quizSubmitted && conversationCount >= 2 && (
          <div className="mb-3">
            <Button
              onClick={handleGenerateQuiz}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <Brain className="w-4 h-4" />
              Generate Quiz
            </Button>
          </div>
        )}
        
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <Button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="px-6"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatbotPanel;
