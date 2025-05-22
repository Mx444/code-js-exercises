"use strict";
// Scrivi una funzione che prenda in input due numeri e restituisca la loro somma.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 2));

// Crea una funzione che prenda in input un numero e restituisca true se è pari, altrimenti restituisca false.
// function inputNumber(a) {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(inputNumber(3));

// Scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3, stampa "Fizz" al posto del numero. Per i multipli di 5, stampa "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5, stampa "FizzBuzz".
// function fizzBuzz() {
//   for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i + "FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log(i + "Fizz");
//     } else if (i % 5 === 0) {
//       console.log(i + "Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

// Crea una funzione che prenda in input un array di numeri e restituisca il numero più grande.
// const numeriVari = [5, 18, 73, 42, 11, 90, 25, 67, 33, 55];

// function numberMax() {
//   return Math.max(...numeriVari);
// }

// console.log(numberMax());

// Scrivi una funzione che prenda in input una stringa e restituisca la stessa stringa ma con le parole invertite.

// const str = "Hello World!";

// function reverse() {
//   return str.split("").reverse().join("");
// }

// console.log(reverse());

// Crea una funzione che prenda in input un array di numeri e restituisca la somma di tutti gli elementi.
// let numeriVari = [5, 18, 73, 42, 11, 90, 25, 67, 33, 55];
// let sum = 0;
// function sommaNumeri() {
//   for (let i = 0; i < numeriVari.length; i++) {
//     sum += numeriVari[i];
//   }
//   return sum;
// }

// console.log(sommaNumeri());
// let somma = numeriVari.reduce((acc, curr) => acc + curr, 1);
// Scrivi un programma che verifichi se una parola è un palindromo
// (si legge allo stesso modo sia da sinistra a destra che da destra a sinistra).

// const parole = [
//   "ciao",
//   "pizza",
//   "mare",
//   "sole",
//   "cane",
//   "gatto",
//   "cielo",
//   "auto",
//   "computer",
//   "libro",
//   "anna",
//   "radar",
//   "osso",
//   "occhio",
//   "aiuto",
//   "oro",
//   "neven",
// ];

// function checkWords() {
//   for (let i = 0; i < parole.length; i++) {
//     if (parole[i] === parole[i].split("").reverse().join("")) {
//       console.log(parole[i], " - Parola Palindroma");
//     } else {
//       console.log(parole[i], " - Parola Casuale");
//     }
//   }
// }
// checkWords();
// let checkWords = parole.filter((x) => x === x.split("").reverse().join(""));
// Crea una funzione che prenda in input un array di stringhe e
// restituisca una nuova array contenente solo le stringhe con più di tre caratteri.
// var array = [
//   "a",
//   "b",
//   "c",
//   "abc",
//   "cda",
//   "mare",
//   "sole",
//   "vento",
//   "ci",
//   "onda",
//   "nuvola",
// ];
// var arrayThree = [];
// function threeChar() {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 3) {
//       arrayThree.push(array[i]),
//         console.log(array[i], " - Superiore a 3 Caratteri");
//     } else {
//       console.log(array[i], " - Inferiore a 3 Caratteri");
//     }
//   }
// }
// threeChar();
// let arrayThree = array.filter((x) => x.length > 3);

// Scrivi un programma che prenda in input un numero e restituisca la sua rappresentazione binaria.

// let numeriBinari = [10];
// let binary = [];
// function binaryNumber() {
//   let num = numeriBinari;
//   while (num > 0) {
//     let divisione = Math.trunc(num / 2);
//     let resto = Math.trunc(num % 2);
//     binary.push(resto);
//     num = divisione;
//   }
// }

// binaryNumber();
// console.log(binary.reverse());

// Crea una funzione che prenda in input un array di numeri e restituisca un nuovo array con solo i numeri pari.
// let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numPari = [];
// function numeriPari() {
//   for (let i = 0; i < numeri.length; i++) {
//     if (numeri[i] % 2 === 0) {
//       numPari.push(numeri[i]);
//       console.log(numeri[i], "Numero pari");
//     } else {
//       console.log(numeri[i], "Numero dispari");
//     }
//   }
// }
// numeriPari();
// numeri.filter();

// let numeriPari = numeri.filter((x) => x % 2 === 0);
// let numeriDispari = numeri.filter((x) => x % 2 !== 0);

// Calcolo della somma degli elementi di un array:
// Scrivi una funzione che prenda in input un array di numeri e restituisca la somma di tutti gli elementi utilizzando il metodo reduce().

// let numeri = [1, 1, 1, 1, 1];

// let somma = numeri.reduce((acc, curr) => acc + curr, 0);

// Scrivi una funzione che prenda in input un array di numeri e restituisca il valore massimo utilizzando il metodo reduce().

// let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let valoreMassimo = numeri.reduce(function () {
//   return Math.max(...numeri);
// });

// let valMax = numeri.reduce((acc, curr) => (acc > curr ? acc : curr));

// let parole = ["Hello", "World"];

// let concatWord = parole.reduce((acc, curr) => acc.concat(curr));

// Calcolo della media degli elementi di un array:
// Scrivi una funzione che prenda in input un array di numeri e restituisca la media di tutti gli elementi utilizzando il metodo reduce().
// const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// const sommaNumeri = numeri.reduce((a, b) => a + b);
// const mediaNumeri = sommaNumeri / 10;
// console.log(sommaNumeri, mediaNumeri);
// Somma degli elementi: Data un'array di numeri, utilizza forEach() per calcolare la somma di tutti gli elementi.
// let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let somma = numeri.forEach(function (number) {
//   sum += number;
// });
// console.log(sum);
// Stampa in maiuscolo: Data un'array di stringhe, utilizza forEach() per stampare ciascuna stringa in maiuscolo sulla console.

// Conteggio delle vocali: Data un'array di stringhe, utilizza forEach() per contare quante vocali ci sono in ciascuna stringa.

// Calcolo della media: Data un'array di numeri, utilizza forEach() per calcolare la media di tutti gli elementi.

// Filtraggio dei numeri pari: Data un'array di numeri, utilizza forEach() per filtrare solo i numeri pari e memorizzarli in un nuovo array.
