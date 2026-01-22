let studenti = [
  "Giacomo",
  "Lamyaa",
  "Andrea",
  "Mohammadhossein",
  "Barbara",
  "Federico",
  "Fabio",
];

let docenti = new Array(); //anche così posso definire un array
docenti[0] = "Dario";
docenti[1] = "Oscar";
docenti[2] = "Davide";
docenti[3] = "Luca";

// Prendo l'elemento HTML ul#listaStuds e lo riempio dei nomi degli studenti
let listaStuds = document.getElementById("listaStuds");
let listaDoc = document.getElementById("listaDoc");

// listaStuds.innerHTML = `<li> ${studenti[0]} </li>`;
// listaStuds.innerHTML += `<li> ${studenti[1]} </li>`;
// listaStuds.innerHTML += `<li> ${studenti[2]} </li>`;
// listaStuds.innerHTML += `<li> ${studenti[3]} </li>`;
// listaStuds.innerHTML += `<li> ${studenti[4]} </li>`;

//Per stampare tutti gli studenti in un colpo solo posso utilizzare il ciclo for oppure il foreach

for(let i = 0; i < studenti.length; i++){
    listaStuds.innerHTML += `<li> ${studenti[i]} </li>`;
}


for(let i = 0; i < docenti.length; i++){
    listaDoc.innerHTML += `<li> ${docenti[i]} </li>`;
}

//stampo una lista corsi e relativo numero di iscritti. Quando gli iscritti sono iferiori a 12 scrivi anche un avviso "Att: ci sono ancora pochi iscritti"
let corsi = ["TSS", "TSIW", "SIST", "GRAF"];
let iscritti = [14, 12, 18, 10];

let listaCorsi = document.getElementById("listaCorsi");

for(let i = 0; i < corsi.length; i++){
    if(iscritti[i] < 12){
        listaCorsi.innerHTML += `<li> ${corsi[i]} - iscritti: ${iscritti[i]} - ATT: iscritti insuff. </li>`;
    }else{
        listaCorsi.innerHTML += `<li> ${corsi[i]} - iscritti: ${iscritti[i]} </li>`;
    }
}

// for(let i = 0; i < corsi.length; i++){
//     let avviso = "";
//     let riga = `${corsi[i]} - iscritti: ${iscritti[i]}`;

//     if(iscritti[i] < 12){
//         avviso = " - ATT: iscritti insuff.";
//     }

//     listaCorsi.innerHTML += `<li> ${riga}${avviso}</li>`;
    
// }