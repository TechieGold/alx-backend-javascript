// Represents a course at Holberton School.
export default class HolbertonCourse {
  /**
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course.
     * @param {Array<string>} students - The list of students enrolled in the course.
     */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Gets the name of this course.
  get name() {
    return this._name;
  }

  // Sets the name of this course.
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new Error('Name must be a string.');
    }
    this._name = value;
  }

  // Gets the length of the course in a week.
  get length() {
    return this._length;
  }

  // Sets the length of this course .
  set length(value) {
    if (typeof (value) !== 'number') {
      throw new Error('Length must be a number.');
    }
    this._length = value;
  }

  // Gets the list of stduents in this course.
  get students() {
    return this._students;
  }

  // Sets the list of stduents in this course.
  set students(value) {
    if (!(value instanceof Array)) {
      throw new Error('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
