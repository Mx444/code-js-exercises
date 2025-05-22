"use strict";
class Contact {
  #contatti = [];
  #id = 0;

  validateName(name) {
    return (
      name.length >= 4 &&
      name.length <= 20 &&
      name.trim() !== "" &&
      !/\d/.test(name)
    );
  }
  validateNumber(number) {
    return /^\d{10}$/.test(number);
  }
  addContact(nome, cognome, numero) {
    if (
      !this.validateName(nome) ||
      !this.validateName(cognome) ||
      !this.validateNumber(numero)
    ) {
      console.log("Nome o Cognome non validi ❌");
      return;
    } else {
      this.#contatti = [
        ...this.#contatti,
        { nome: nome, cognome: cognome, numero: numero, id: this.#id },
      ];
      this.#id++;
      console.log(
        `Aggiunto alla lista Nome: ${nome}, Cognome: ${cognome}, Numero: ${numero}✅`
      );
    }
  }
  removeContact(id) {
    this.#contatti = this.#contatti.filter((con) => id !== con.id);
    console.log(`Rimosso dalla lista ID: ${id} ✅`);
  }

  get getContact() {
    return console.log(this.#contatti);
  }
  findContact(nome) {
    function validateInfo(con) {
      return (
        nome === con.nome ||
        nome === con.cognome ||
        nome === con.numero ||
        nome === con.id
      );
    }
    const contactFilter = this.#contatti.filter(validateInfo);
    if (contactFilter.length > 0) {
      console.log("Contatti Trovati ✅");
      contactFilter.forEach((con) =>
        console.log(
          `Nome :${con.nome} , Cognome: ${con.cognome}, Numero: ${con.numero}, ID: ${con.id} 🔎`
        )
      );
    } else {
      console.log("Contatto non Trovato ❌");
    }
  }
}
const con = new Contact();
con.getContact;
con.addContact("Mario", "Rossi", 1234567890);
con.addContact("Luca", "Rossi", 1234567890);
con.addContact("Alberto", "Scannato", 1234567890);
con.addContact("Giovanni", "Duca", 1234567890);
con.addContact("Lucia", "Bastarda", 1234567890);
con.getContact;
con.removeContact(3);
con.getContact;
con.findContact("Rossi");
