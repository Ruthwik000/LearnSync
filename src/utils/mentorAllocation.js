// AI-based mentor allocation system

export const allocateMentor = (student, mentors) => {
  if (!student || !mentors || mentors.length === 0) {
    return null;
  }

  // Filter mentors by subject match
  const matchingMentors = mentors.filter(mentor =>
    student.subjects.some(subject => mentor.subjects.includes(subject))
  );

  if (matchingMentors.length === 0) {
    return mentors[0]; // Fallback to first mentor
  }

  // Allocation rules based on student profile
  let scoredMentors = matchingMentors.map(mentor => {
    let score = 0;

    // Rule 1: Beginner students → More experienced mentors
    if (student.detectedLevel === 'beginner' && mentor.experience >= 3) {
      score += 30;
    }

    // Rule 2: Younger students (Foundation mode) → Patient mentors
    if (student.age <= 10 && mentor.teachingExperience) {
      score += 25;
    }

    // Rule 3: Advanced students → Subject-specialized mentors
    if (student.detectedLevel === 'advanced' && mentor.skillLevel === 'advanced') {
      score += 35;
    }

    // Rule 4: Subject expertise match
    const subjectMatch = student.subjects.filter(s => mentor.subjects.includes(s)).length;
    score += subjectMatch * 10;

    // Rule 5: Prefer mentors with fewer assigned students (load balancing)
    if (mentor.assignedStudents && mentor.assignedStudents.length < 3) {
      score += 15;
    }

    // Rule 6: Consider mentor ratings
    if (mentor.ratings && Object.keys(mentor.ratings).length > 0) {
      const avgRating = Object.values(mentor.ratings).reduce((a, b) => a + b, 0) / Object.values(mentor.ratings).length;
      score += avgRating * 5;
    }

    return { mentor, score };
  });

  // Sort by score and return best match
  scoredMentors.sort((a, b) => b.score - a.score);
  return scoredMentors[0].mentor;
};

// Auto-allocate students to a new mentor
export const allocateStudentsToMentor = (mentor, students) => {
  if (!mentor || !students || students.length === 0) {
    return [];
  }

  // Filter students who don't have mentors and match subjects
  const eligibleStudents = students.filter(student => 
    !student.mentorId && 
    student.subjects.some(subject => mentor.subjects.includes(subject))
  );

  if (eligibleStudents.length === 0) {
    return [];
  }

  // Score students based on match quality
  const scoredStudents = eligibleStudents.map(student => {
    let score = 0;

    // Subject match
    const subjectMatch = student.subjects.filter(s => mentor.subjects.includes(s)).length;
    score += subjectMatch * 10;

    // Level match
    if (student.detectedLevel === 'beginner' && mentor.experience >= 3) {
      score += 20;
    }
    if (student.detectedLevel === 'advanced' && mentor.skillLevel === 'advanced') {
      score += 25;
    }

    // Age match
    if (student.age <= 10 && mentor.teachingExperience) {
      score += 15;
    }

    return { student, score };
  });

  // Sort by score and return top students up to teaching capacity
  scoredStudents.sort((a, b) => b.score - a.score);
  const capacity = mentor.teachingCapacity || 5;
  return scoredStudents.slice(0, capacity).map(s => s.student);
};

// Get class-based subjects
export const getSubjectsByClass = (classLevel) => {
  const classNum = parseInt(classLevel);

  if (classNum <= 5) {
    // Lower classes
    return ['Math', 'English', 'EVS'];
  } else if (classNum <= 10) {
    // Middle classes
    return ['Math', 'Science', 'English', 'Social Studies'];
  } else {
    // Higher classes
    return ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English'];
  }
};
