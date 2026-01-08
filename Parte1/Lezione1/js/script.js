let nomeUser = "Dario";
let cognomeUser = "Mennillo";
let etaUser = 36;
let presenza = true;
let genere = 'M';

//cambio il valore di alcune variabili
etaUser = 37;
nomeUser = "Anna";
nomeUser = "Laura";

nomeUser = prompt("Come ti chiami caro/a user ?");
cognomeUser = prompt("Inserisci il tuo cognome");

//Stampo una miscela di variabili, ho concatenato delle stringhe
let presentazione = "Ciao, mi chiamo " + nomeUser + " " + cognomeUser + " e ho " + etaUser + " anni";

console.log(presentazione);
console.log(typeof presentazione);

//Scrivo la presentazione nella pagina con il metodo document.write()
document.write("<h2>" + presentazione + "</h2>");


//Facciamo un poco di matematica
let incassi = Number( prompt("Quanto hai incassato quest'anno") );

const IVA = 0.22;
//ATT: le costanti non possono essere assolutamente riassegnate
//IVA = 0.23;

let costoIva = incassi * IVA;
let guadagno = incassi - (costoIva);

let resoconto = "<p> Quest'anno hai incassato " + incassi + "</p> <p>Il tuo guadagno finale è stato di: " + guadagno + "</p><p>Il costo totale dell'IVA è : " + costoIva + "</p>";

document.write(resoconto);

