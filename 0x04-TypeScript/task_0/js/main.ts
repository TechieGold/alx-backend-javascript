// 
interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Gold",
    lastName: "Israel",
    age: 20,
    location: "Nigeria",
}

const student2: Student = {
    firstName: "Bennet",
    lastName: "Aboagye-Asare",
    age: 18,
    location: "Ghana",
}

const studentsList: Student[] = [student1, student2];

const studentTable = document.createElement('table');
const studentBody = document.createElement('body');

studentsList.forEach((objList) => {
    const tableName = document.createElement('tableName');
    const tableRow = document.createElement('tableRow');
    const tableLocation = document.createElement('tableLocation');

    tableName.textContent = objList.firstName;
    tableLocation.textContent = objList.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    studentBody.appendChild(tableRow);
})

studentTable.appendChild(studentBody);
document.body.appendChild(studentTable);