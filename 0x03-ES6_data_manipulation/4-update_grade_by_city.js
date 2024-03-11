// This function returns an array of students for a specific city with their new grade.

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newStudents = student;
    newStudents.grade = 'N/A';
    for (const grade of newGrades) {
      if (newStudents.id === grade.studentId) {
        newStudents.grade = grade.grade;
      }
    }
    return newStudents;
  });
}
