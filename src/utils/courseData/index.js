// Central export for all Springboard-style course data
import { physicsCourse } from './physicsCourse';
import { chemistryCourse } from './chemistryCourse';
import { mathCourse } from './mathCourse';
import { biologyCourse } from './biologyCourse';

export const allSpringboardCourses = {
  physics: physicsCourse,
  chemistry: chemistryCourse,
  math: mathCourse,
  biology: biologyCourse,
};

// Get courses by student level and subjects
export const getCoursesForStudent = (studentLevel, studentSubjects) => {
  const courses = [];
  const subjectsLower = studentSubjects.map(s => s.toLowerCase().trim());

  Object.values(allSpringboardCourses).forEach(course => {
    if (course.level !== studentLevel) return;
    
    const courseSubj = course.subject.toLowerCase().trim();
    const matches = subjectsLower.some(s => {
      if (courseSubj === s) return true;
      if (courseSubj.includes(`(${s})`)) return true;
      if (s.includes('physics') && courseSubj.includes('physics')) return true;
      if (s.includes('chemistry') && courseSubj.includes('chemistry')) return true;
      if (s.includes('biology') && courseSubj.includes('biology')) return true;
      if (s.includes('math') && courseSubj.includes('math')) return true;
      if (s === 'science' && (courseSubj.includes('physics') || courseSubj.includes('chemistry') || courseSubj.includes('biology'))) return true;
      return false;
    });

    if (matches) courses.push(course);
  });

  return courses;
};

export { physicsCourse, chemistryCourse, mathCourse, biologyCourse };
