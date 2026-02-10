//Oggetti servono a descrivere delle entità presenti nel mondo reale

//oggetti con notazione letterale

let studente = {
    //PROPRIETÀ descrivono come è fatto l'oggetto
    nome: "Paolo",
    cognome: "Verdi",
    corso: "Informatica",
    eta: 20,
    presente: true,

    //METODI descrivono come si comporta 
    studia: function(){
        return `Ciao mi chiamo ${this.nome} ${this.cognome} ho ${this.eta} e frequento il corso di ${this.corso}`;
    },
    
    creaUsername: function(){
        let username = this.nome.substring(0,2) + this.cognome.substring(0,2) + this.eta;
        let assegnazione = `Caro ${this.nome} ti abbiamo assegnato il seguente username: ${username}`;
        return assegnazione
    }
}

console.log(studente.studia());
console.log(studente.creaUsername());

