interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Sydney"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 24,
  location: "Melbourne"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First name";
const header2 = document.createElement("th");
header2.textContent = "location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstname;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);