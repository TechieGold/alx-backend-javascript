// This function returns an array objects who are located in a specific city.

export default function getStduentByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
