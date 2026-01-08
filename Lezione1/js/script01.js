//come recuperare un pezzo di html per poterlo modificare
let titolo = document.getElementById("titolo"); //<h1></h1>
console.log(titolo);

let nomePagina = "Corso Tecnico Sviluppo Pagine Web";
titolo.innerHTML = nomePagina;



let parag = document.getElementById("parag");
parag.innerHTML = "Ciao, questo è un paragrafo";

//#####################
let speseCasa = document.getElementById("speseCasa");
let speseAuto = document.getElementById("speseAuto");
let speseVarie = document.getElementById("speseVarie");
let totale = document.getElementById("totale");
let mediaAnno = document.getElementById("mediaAnno");

let casa = 7500;
let auto = 750;
let varie = 6852;

let totaleSpese = casa + auto + varie;
let mediaSpese = totaleSpese / 3;

speseCasa.innerHTML = `Spese casa: ${casa} €`; 
speseAuto.innerHTML = `Spese auto: ${auto} €`;
speseVarie.innerHTML = `Spese varie: ${varie} €`;

totale.innerHTML = `Quest'anno hai speso ${totaleSpese} €`;
mediaAnno.innerHTML = `In media per ogni voce hai speso ${mediaSpese} €`;