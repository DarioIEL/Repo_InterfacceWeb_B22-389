let studente = {
    nome: "",
    cognome: "", 
    eta: "",
    corso: "",

    creaStudente(nome, cognome, eta, corso){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corso = corso;
    },

    presentaStudente(){
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome}, ho ${this.eta} e sono iscritto al corso ${this.corso}`;

        return presentazione;
    }
}

function iscriviStudente(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    let corso = document.getElementById("corso").value;

    let demo = document.getElementById("demo");

    if(nome != "" && cognome != "" && eta != "" && corso != ""){
        studente.creaStudente(nome, cognome, eta, corso);

        demo.innerHTML = " <p> " + studente.presentaStudente() + " </p>";
    }else{
        demo.innerHTML = "<p> Mi spiace, stai dimenticando qualcosa </p>";
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", iscriviStudente);