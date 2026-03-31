import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import ChatbotPanel from '../../components/ChatbotPanel';

const AITutor = () => {
  const { currentUser } = useApp();
  
  // Initialize context from sessionStorage on mount
  const [context] = useState(() => {
    const storedContext = sessionStorage.getItem('aiTutorContext');
    if (storedContext) {
      try {
        const parsed = JSON.parse(storedContext);
        sessionStorage.removeItem('aiTutorContext');
        return parsed;
      } catch (e) {
        console.error('Error parsing AI Tutor context:', e);
      }
    }
    return null;
  });

  return (
    <div className="h-[calc(100vh-140px)] max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm h-full overflow-hidden">
        <ChatbotPanel
          isOpen={true}
          context={context}
          onQuizGenerated={null}
          studentId={currentUser?.id}
        />
      </div>
    </div>
  );
};

export default AITutor;
