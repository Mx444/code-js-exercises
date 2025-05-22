"use strict";

class Volo {
  static id = 0;
  constructor(
    aeroportoPartenza,
    aeroportoArrivo,
    data,
    oraPartenza,
    oraArrivo,
    numeroPostiDisponibili
  ) {
    this.aeroportoPartenza = aeroportoPartenza;
    this.aeroportoArrivo = aeroportoArrivo;
    this.data = data;
    this.oraPartenza = oraPartenza;
    this.oraArrivo = oraArrivo;
    this.numeroPostiDisponibili = numeroPostiDisponibili;
    this.id = Volo.id++;
  }
}
class Prenotazione {
  constructor(utente, volo, numeroPostiPrenotati) {
    this.utente = utente;
    this.volo = volo;
    this.numeroPostiPrenotati = numeroPostiPrenotati;
  }
}
class CompagniaAerea {
  constructor() {
    this.listaVoli = [];
    this.listaPrenotazioni = [];
  }
  aggiungiVolo(dati) {
    this.listaVoli.push(dati);
  }
  //! da fare
  prenotaVolo(utente, volo, posti) {
    this.listaPrenotazioni.push({ utente, volo, posti });
  }
  visualizzaVoliDisponibili(partenza, arrivo, data) {
    const ricercaVolo = compagnia.listaVoli.filter((a) => {
      return (
        partenza === a.aeroportoPartenza &&
        arrivo === a.aeroportoArrivo &&
        data === a.data
      );
    });
    if (ricercaVolo.length > 0) {
      console.log("✈️ Voli Trovati 🔎");
      ricercaVolo.forEach((a) =>
        console.log(
          `Partenza: ${a.aeroportoPartenza} - Arrivo: ${a.aeroportoArrivo} - Data: ${a.data} - Partenza: ${a.oraPartenza} - Arrivo: ${a.oraArrivo} - Posti: ${a.numeroPostiDisponibili} - ID: ${a.id}`
        )
      );
    } else {
      console.log("Volo non Trovato ❌");
    }
  }
  visualizzaVoliByID(volo) {
    const voloID = (a) => volo === a.id;
    if (voloID.length > 0) {
      console.log("✈️ Voli Trovati by ID 🔎");
      voloID.forEach((a) =>
        console.log(
          `Partenza: ${a.aeroportoPartenza} - Arrivo: ${a.aeroportoArrivo} - Data: ${a.data} - Partenza: ${a.oraPartenza} - Arrivo: ${a.oraArrivo} - Posti: ${a.numeroPostiDisponibili} - ID: ${a.id}`
        )
      );
    } else {
      console.log("Volo non Trovato ❌");
    }
  }
  visualizzaPrenotazioni() {} //! da fare
}
class Utente {
  constructor(nome, cognome, email) {
    this._nome = nome;
    this._cognome = cognome;
    this._email = email;
    this._utente = [];
  }

  aggiungiUtente(dati) {
    console.log(
      `👤 Utente Aggiunto: Nome: ${dati._nome} - Cognome: ${dati._cognome} - Email: ${dati._email} ✅`
    );
    this._utente.push(dati);
  }

  get listaUtente() {
    return console.log(this._utente);
  }

  cercaUtente(name) {
    const ricercaUtente = this._utente.filter((a) => {
      return name === a._nome || name === a._cognome || name === a._email;
    });
    if (ricercaUtente.length > 0) {
      console.log("👤 Utente Trovato 🔎");
      ricercaUtente.forEach((a) =>
        console.log(
          `Nome: ${a._nome} - Cognome: ${a._cognome} - Email: ${a._email}`
        )
      );
    } else {
      console.log("Utente non Trovato ❌");
    }
  }
}

const compagnia = new CompagniaAerea();
const primoVolo = compagnia.aggiungiVolo(
  new Volo("Palermo", "Roma", "13/05/2024", "8:00", "9:00", 200)
);
const secondoVolo = compagnia.aggiungiVolo(
  new Volo("Firenze", "Catania", "10/01/2024", "9:00", "10:00", 300)
);

compagnia.visualizzaVoliByID(0);
compagnia.visualizzaVoliByID(1);
compagnia.visualizzaVoliDisponibili("Palermo", "Roma", "13/05/2024");
const user = new Utente();
const primoUtente = user.aggiungiUtente(
  new Utente("Mario", "Rossi", "mariorossi@gmail.com")
);
const secondoUtente = user.aggiungiUtente(
  new Utente("Luca", "Rossi", "lucarossi@gmail.com")
);
const terzoUtente = user.aggiungiUtente(
  new Utente("Lucia", "Bastarda", "luciabastarda@gmail.com")
);
user.cercaUtente("Mario");
user.cercaUtente("Rossi");
user.cercaUtente("luciabastarda@gmail.com");

const quartoUtente = user.aggiungiUtente(
  new Utente("Lu", "Bastarda", "luciabastarda@gmail.com")
);
