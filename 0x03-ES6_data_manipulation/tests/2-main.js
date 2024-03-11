import getListStudents from '../0-get_list_students';
import getStduentByLocation from '../2-get_students_by_loc';

const students = getListStudents();
console.log(getStduentByLocation(students, 'San Francisco'));
