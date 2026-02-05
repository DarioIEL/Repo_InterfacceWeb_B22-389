//FUNZIONI: raccolgono una serie di istruzioni sotto un unico nome. Riutilizzabile, manutenibile

//SINTASSI di BASE
function nomeFunzione(){
    //...corpo
}

//per eseguire la funzione mi basta richiamarla per nome
nomeFunzione();

//ATT: c'è una totale indipendenza tra la dichiarazione della funzione e il richiamo della stessa. Esiste però una buona norma: in alto dichiaro, in basso richiamo
saluta();
function saluta(){
    console.log("Ciao Dario");
}

//Questa è una variabile GLOBALE, ha una visibilità estesa a tutto lo script
let cognomeUser = "Mennillo";

function stampaSaluto(){
    //Queste sono variabili LOCALI: esistono solo all'interno della funzione
    let demo = document.getElementById("demo");
    let nomeUser = "Dario"
    demo.innerHTML = `<h2> Ciao ${nomeUser} ${cognomeUser} </h2>`;
}
// stampaSaluto();
// console.log(nomeUser); //Error: nomeUser is not defined

//Richiamo una funzione dallo HTML, da un pulsante
let btn = document.getElementById("btn");

function stampaCorso(){
    console.log("Sto seguendo il corso di Interfacce Web n°389");
    stampaSaluto();
    saluta()
}

//ATT: nel metodo addEventListener non ci sono le () legate alla funzione
btn.addEventListener("click", stampaCorso);