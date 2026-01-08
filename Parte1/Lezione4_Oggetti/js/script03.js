//NOTAZIONE CON FUNZIONE COSTRUTTORE, ATT: la funzione comincia con una lettera in Uppercase, MAIUS
function Studente(nome, cognome, matricola, corso) {
  this.nome = nome;
  this.cognome = cognome;
  this.matricola = matricola;
  this.corso = corso;

  this.presentati = function () {
    return `Ciao, mi chiamo ${this.nome} ${this.cognome}, matricola ${this.matricola}. Sono iscritto al corso di ${this.corso}`;
  };
}

let studente1 = new Studente("Anna", "Rossi", 123, "Frontend");
let studente2 = new Studente("Mario", "Verdi", 234, "Backend");
let studente3 = new Studente("Laura", "Gialli", 345, "Db Management");

console.log(studente1.presentati());
console.log(studente2.presentati());
console.log(studente3.presentati());

//------CLASS------
//A partire da ES2015 sono state introdotte le classi.
class Docente {
  constructor(nome, cognome, corsoAssegnato) {
    //Le proprietà definiscono lo STATO della classe
    this.nome = nome;
    this.cognome = cognome;
    this.corsoAssegnato = corsoAssegnato;
  }

  // I metodi definiscono il comportamento
  insegna() {
    let info = `Docente: ${this.nome} ${this.cognome}`;
    if (
      this.corsoAssegnato != undefined &&
      this.corsoAssegnato != "" &&
      this.corsoAssegnato
    ) {
      info += `. Corso Assegnato: ${this.corsoAssegnato}`;
    } else {
      info += ". Nessun corso assengnato";
    }
    return info;
  }
}

//Questi oggetti sono ISTANZE DELLA CLASSE DOCENTE
let docente1 = new Docente("Dario", "Mennillo", "Web");
let docente2 = new Docente("Oscar", "Vecchione", "Frontend");

console.log(docente1.insegna());
console.log(docente2.insegna());

let corpoDocenti = [
  new Docente("Pippo", "Verdi", "Java"),
  new Docente("Marco", "Neri"),
  new Docente("Luca", "Gialli", "Backend"),
];

corpoDocenti.forEach((doc) => {
  console.log(doc.insegna());
});
