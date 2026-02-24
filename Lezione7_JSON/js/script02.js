let responsabile = {
    nome: "Egle",
    cognome: "Risola",
    ruolo: "Respo Corsi",
    sede: "I&L",
    attivaCorsi: function(){
        console.log("Oggi abbiamo attivato un corso JAVA");
    }
}
const demo = document.querySelector("#demo");

//Per salvare qualcosa in local o session Storage devo trasformare tutto in un JSON

let respoJSON = JSON.stringify(responsabile);
localStorage.setItem("respo", respoJSON);

//ATT: quando recupero qualcosa dalla local storage sto recuperando una stringa NON un oggetto
let respoOBJ = JSON.parse(localStorage.getItem("respo"));

demo.innerHTML = `${respoOBJ.nome} ${respoOBJ.cognome} - ruolo: ${respoOBJ.ruolo}`