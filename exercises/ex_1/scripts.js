"use strict";
// 1. Raddoppiare i numeri:
// Creare un array di numeri interi e restituire un nuovo array con il doppio di ogni elemento.

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function numberDouble(number) {
//   return number * 2;
// }

// console.log(number.map(numberDouble));

// 2. Elevare al quadrato i numeri:
// Creare un array di numeri e restituire un nuovo array con il quadrato di ogni elemento.
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function numberSquared(number) {
//   return number * number;
// }
// console.log(number.map(numberSquared));

// 3. Convertire in maiuscolo:
// Creare un array di stringhe e restituire un nuovo array con tutte le stringhe in maiuscolo.
// const names = ["davide", "luca", "alessio", "roberto", "lucia", "riccardo"];
// function upperCase(string) {
//   return string.toUpperCase();
// }

// console.log(names.map(upperCase));

// 4. Convertire in minuscolo:
// Creare un array di stringhe e restituire un nuovo array con tutte le stringhe in minuscolo.

// const names = ["LUCA", "GIOVANNI", "DAVIDE"];

// function lowCase(string) {
//   return string.toLowerCase();
// }
// console.log(names.map(lowCase));

// 5. Rimuovere i doppioni:
// Creare un array di elementi e restituire un nuovo array senza duplicati.

// const doubleNumber = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

// function removeDouble(array) {
//   const setSenzaDuplicati = new Set(array);
//   const arraySenzaDuplicati = [...setSenzaDuplicati];
//   return arraySenzaDuplicati;
// }
// console.log(removeDouble(doubleNumber));

// 6. Filtrare numeri pari:
// Creare un array di numeri e restituire un nuovo array che contiene solo i numeri pari.

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function evenNumber(array) {
//   return array % 2 === 0;
// }

// console.log(number.filter(evenNumber));

// 7. Filtrare numeri dispari:
// Creare un array di numeri e restituire un nuovo array che contiene solo i numeri dispari.
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function oddNumber(array) {
//   return array % 2 !== 0;
// }

// console.log(number.filter(oddNumber));

// 8. Calcolare la media:
// Creare un array di numeri e restituire la loro media.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// function average() {
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(average());

// 9. Concatenare array:
// Creare due array e restituire un nuovo array che li concatena.
// const fisrtNumbers = [1, 2, 3, 4, 5];
// const secondNumbers = [6, 7, 8, 9, 10];
// const thirdNumber = [];
// const concatNumbers = fisrtNumbers.concat(secondNumbers);
// thirdNumber.push(concatNumbers);
// console.log(concatNumbers, thirdNumber);

// 10. Unire oggetti:
// Creare due array di oggetti con la stessa struttura e restituire un nuovo array di oggetti che unisce le proprietà corrispondenti.

// Supponiamo di avere un array di stringhe che rappresentano nomi di città. L'obiettivo è scrivere una funzione che prenda questo array e restituisca un nuovo array contenente solo le città il cui nome inizia con la lettera "B" o "b", ordinate in ordine alfabetico crescente.
const citta = ["Palermo", "Roma", "Romagna", "Lucca", "Arezzo"];

const nomiCittaConR = citta.filter(function nomiConR(array) {
  return array.charAt(0).toLowerCase() === "r";
});
console.log(nomiCittaConR);
