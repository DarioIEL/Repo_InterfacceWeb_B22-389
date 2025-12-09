//Oggetti con Notazione Letterale
let studente = {
    //Proprietà
    //Key: Value
    nome: "Dario",
    cognome: "Mennillo",
    corso: "Interfacce Web",
    eta: 36,
    iscritto: true,
    dataNascita: new Date("04/13/1989").getFullYear(),

    //Metodi
    studia: function(){
        //this fa riferimento all'oggetto nel quale sto lavorando, in questo caso studente
        return "Sto studiando per il corso di " + this.corso
    },

    presentati: function(){
        return "Ciao, mi chiamo " + this.nome + " " + this.cognome + ". Ho " + this.eta + " anni.";
    }
}

//Richiamo proprietà o metodi del mio oggetto studente utilizzando la notazione .
//ATT: le prop le recupero senza le parentesi tonde. I metodi li eseguo con le parentesi tonde
console.log( studente.nome + " " + studente.cognome);
console.log(studente.dataNascita);


console.log( studente.presentati() );
console.log( studente.studia() );

let docente = {
    nome: "Oscar",
    cognome: "Vecchione",
    materie: ["Html & Css", "Wordpress", "MySql", "Php"],

    //questa sotto è uguale a presentati: function(){}
    presentati() {
        let presentazione = "Docente: " + this.nome + " " + this.cognome + "\nMaterie insegnate:\n";
        
        for(let i = 0; i < this.materie.length; i++){
            presentazione += this.materie[i] + "\n";
        }

        return presentazione;
    },

    presentati2(){
        let saluti = "Ciao a tutti, mi presento.";
        saluti += this.presentati(); //posso, oltre alle semplici proprietà, richiamare anche i metodi utilizzando il this.
        return saluti;
    }
}

console.log(docente.presentati());

// console.log(docente.presentati2());