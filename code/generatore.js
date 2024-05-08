"use strict";

const students = ["Davide", "Luca", "Lucia", "Alberto", "Sandro", "Giovanni"];
const groupBy = 3;
let copyStudents = [];

function randomizer() {
  students.sort(() => Math.random() - 0.5);
}

function generateGroup() {
  randomizer();
  for (let i = 0; i < students.length; i += groupBy) {
    copyStudents.push(students.slice(i, i + groupBy));
  }
}
generateGroup();

console.log(students, copyStudents);
