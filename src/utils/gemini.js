// Mock Gemini AI integration
// In production, replace with actual Gemini API calls

export const callGemini = async (prompt) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock responses based on prompt keywords
  if (prompt.includes('explain') || prompt.includes('Explain')) {
    return {
      success: true,
      data: `Here's a simple explanation:\n\nThis topic is about understanding the basic concepts. Let me break it down:\n\n1. Start with the fundamentals\n2. Practice with examples\n3. Apply what you learned\n\nRemember: Practice makes perfect!`
    };
  }

  if (prompt.includes('quiz') || prompt.includes('questions')) {
    return {
      success: true,
      data: [
        { id: 1, question: 'What is the main concept?', options: ['A', 'B', 'C', 'D'], correct: 0 },
        { id: 2, question: 'How do you apply this?', options: ['Method 1', 'Method 2', 'Method 3', 'Method 4'], correct: 1 },
        { id: 3, question: 'Which example is correct?', options: ['Example A', 'Example B', 'Example C', 'Example D'], correct: 2 }
      ]
    };
  }

  if (prompt.includes('study plan') || prompt.includes('Study Plan')) {
    return {
      success: true,
      data: {
        daily: [
          'Review weak topics for 20 minutes',
          'Complete 5 practice questions',
          'Read new topic introduction'
        ],
        weekly: [
          'Monday: Focus on Math',
          'Wednesday: Practice Science',
          'Friday: Review all topics',
          'Saturday: Take quiz'
        ]
      }
    };
  }

  if (prompt.includes('feedback') || prompt.includes('scored')) {
    return {
      success: true,
      data: {
        feedback: 'Good effort! You understand the basics well.',
        suggestions: [
          'Practice more on weak areas',
          'Review the examples again',
          'Try solving similar problems'
        ],
        nextTopic: 'Move to the next chapter after mastering this'
      }
    };
  }

  if (prompt.includes('recommendation') || prompt.includes('insight')) {
    return {
      success: true,
      data: {
        insights: [
          'Math performance is below average - increase session frequency',
          'Students show strong engagement in English',
          'Attendance has dropped by 10% this week'
        ],
        actions: [
          'Assign additional mentors to Math',
          'Focus on interactive learning methods',
          'Send attendance reminders to students'
        ]
      }
    };
  }

  if (prompt.includes('module') || prompt.includes('structured learning')) {
    return {
      success: true,
      data: {
        explanation: 'This is a comprehensive explanation of the topic with clear examples and step-by-step guidance.',
        keyPoints: [
          'Understanding the core concept',
          'Practical applications',
          'Common mistakes to avoid'
        ],
        examples: [
          'Example 1: Basic application',
          'Example 2: Intermediate level',
          'Example 3: Advanced usage'
        ],
        summary: 'In summary, this topic covers essential concepts that build foundation for advanced learning.'
      }
    };
  }

  // Default response
  return {
    success: true,
    data: 'AI response generated successfully. This is a mock response for demonstration purposes.'
  };
};
