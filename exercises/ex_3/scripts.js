"use strict";

// Creare un oggetto che rappresenti un utente con le seguenti proprietà: nome, cognome, età.
// Creare una funzione che accetti un oggetto utente come argomento e restituisca una stringa che saluta l'utente con il suo nome e cognome.

// const persona = {
//   nome: "Mario",
//   cognome: "Rossi",
//   eta: "1850",

//   saluta() {
//     console.log(`Ciao ${this.nome} ${this.cognome}`);
//   },
// };
// persona.saluta();

//  Creare un oggetto che rappresenti una lista della spesa con le seguenti proprietà: nome, quantità, prezzo per unità.
// Creare una funzione che accetti un array di oggetti lista della spesa e restituisca il costo totale degli articoli nella lista.
// const spesa = {
//   nome: "Mela",
//   quantita: 500,
//   prezzo: 1,
//   totale: [
//     { nome: "Mela", prezzo: 10 },
//     { nome: "banana", prezzo: 10 },
//   ],
// };

// console.log(spesa.totale.reduce((a, b) => (a.prezzo += b.prezzo)));

// Crea una classe Persona con le proprietà nome e età.
// Crea una classe Studente che estenda la classe Persona e abbia una proprietà aggiuntiva corsoDiStudi
class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Studente extends Persona {
  constructor(name, age, corso) {
    ciao;
    super(name, age);
    this.corsoDiStudi = corso;
  }
}
const primaPersona = new Persona("Francesco", 30);
const secondaPersona = new Persona("Alessio", 150);
const corsoPrimo = new Studente("Francesco", 40, "ITC");
console.log(primaPersona, secondaPersona, corsoPrimo);

// Crea una classe `Libro` con le proprietà `titolo`, `autore` e `annoPubblicazione`.
class Libro {
  constructor(titolo, autore, annoPubblicazione) {
    this.titolo = titolo;
    this.autore = autore;
    this.annoPubblicazione = annoPubblicazione;
  }
}
const primoLibro = new Libro("titolo1", "hill", 1900);
console.log(primoLibro);
// Crea una classe `Cane` con le proprietà `nome`, `razza` e `età`
class Cane {
  constructor(nome, razza, eta) {
    this.nome = nome;
    this.razza = razza;
    this.eta = eta;
  }
}
const primoCane = new Cane("Lucky", "yorkie", 1);

// Crea una classe `Calcolatrice` con metodi per eseguire operazioni aritmetiche.
class Math {
  static add(num1, num2) {
    return num1 + num2;
  }
  static sub(num1, num2) {
    return num1 - num2;
  }
  static mult(num1, num2) {
    return num1 * num2;
  }
  static div(num1, num2) {
    return num1 / num2;
  }
  static rem(num1, num2) {
    return num1 % num2;
  }
}
