//JSON (JavaScript Object Notation)
//SOno una notazione per oggetti basata sulle stringhe

let utente = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 36,
    ruolo: "Docente",
    presenza: true,

    presentati(){
        return `Ciao, mi chiamo ${this.nome} e sono un ${this.ruolo}`
    }
}

console.log(utente);
console.log(typeof utente);
console.log(utente.presentati());

//Per poter inviare, trasferire questo oggetto presso un'altra tecnologia mi serve farlo attraverso i JSON

let utenteJSON = JSON.stringify(utente);
console.log(utenteJSON);
console.log(typeof utenteJSON);


let docenteJSON = '{"nome": "Oscar", "cognome":"Vecchione", "eta": 45, "ruolo": "Docente"}';

//Trasformo la string in un Object
let docente = JSON.parse(docenteJSON);

console.log(docente);
console.log(docente.nome);

//Proviamo a "mappare" l'ggetto che ci arriva in formato JSON
//Questa classe sotto si chiama Factory method
class Studente{
    constructor(nome, cognome, eta, ruolo){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.ruolo = ruolo;
    }
    
    static fromJSON(jsonString) {
        let data = JSON.parse(jsonString);
        return new Studente(data.nome, data.cognome, data.eta, data.ruolo);
    }
}
 
let studenteJSON = '{"nome": "Paolo", "cognome":"Rossi", "eta": 25, "ruolo": "Studente"}'

let studente = Studente.fromJSON(studenteJSON);

console.log(studente);
console.log(studente.ruolo);
