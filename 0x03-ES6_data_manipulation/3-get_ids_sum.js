// This function returns the sum of all students ids.

export default function getStudentIdsSum(students) {
  return students.reduce((studentId, student) => studentId + student.id, 0);
}
