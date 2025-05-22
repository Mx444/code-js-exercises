"use strict";
class Libro {
  constructor(titolo, autore) {
    this._titolo = titolo;
    this._autore = autore;
    this._id = Math.random();
  }
  _infoLibro() {
    return `Titolo : ${this._titolo}, Autore : ${this._autore}, Id : ${this._id} 🔎`;
  }
  visualizzaInfo() {
    console.log(this._infoLibro());
  }
  get titolo() {
    return this._titolo;
  }
  set titolo(nuovoTitolo) {
    if (nuovoTitolo.trim() !== "") {
      this._titolo = nuovoTitolo;
    } else {
      console.log(`Inserisci nuovo Titolo`);
    }
  }
  get autore() {
    return this._autore;
  }
  set autore(nuovoAutore) {
    if (nuovoAutore.trim() !== "") {
      this._autore = nuovoAutore;
    } else {
      console.log(`Inserisci nuovo Autore`);
    }
  }
}
class LibroDigitale extends Libro {
  constructor(titolo, autore, formato) {
    super(titolo, autore);
    this._formato = formato;
  }

  #infoLibroDigitale() {
    return `${super._infoLibro()},${this._formato}`;
  }
  visualizzaInfoDigitale() {
    console.log(this.#infoLibroDigitale());
  }
  get formato() {
    return this._formato;
  }
  set formato(nuovoFormato) {
    if (nuovoFormato.trim() !== "") {
      this._formato = nuovoFormato;
    } else {
      console.log("Inserisci nuovo Formato");
    }
  }
}

class Libreria {
  constructor() {
    this._libri = [];
  }
  aggiungiLibro(libro) {
    console.log("");
    this._libri.push(libro);
  }
  rimuoviLibro(id) {
    this._libri = this._libri.filter((a) => id !== a._id);
  }
  visualizzaLibreria() {
    console.log("Libri trovati :");
    this._libri.forEach((a) => a.visualizzaInfo());
  }
  get getlibri() {
    return this._libri;
  }
}

const libreria = new Libreria();
const libreriaDigitale = new LibroDigitale();
libreria.aggiungiLibro(new Libro("L'arte della guerra", "Sun Tzu"));
libreria.aggiungiLibro(new Libro("Il libro dei cinque anelli", "Musashi"));
libreria.aggiungiLibro(new Libro("Bushido", "M.Panatero"));
libreria.aggiungiLibro(new LibroDigitale("Shonin-ki", "Masazumi", "PDF"));
libreria.getlibri;
libreria.visualizzaLibreria();
const primoLibro = libreria._libri[0];
primoLibro.titolo = "";
libreria.visualizzaLibreria();
const secondoLibro = libreria._libri[1];
secondoLibro.autore = "";
libreria.visualizzaLibreria();
const terzoLibro = libreria._libri[2];
terzoLibro.formato = "MD";
