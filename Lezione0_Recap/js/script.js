// Commento singola riga
/**
 * COmmento 
 * Multiriga
 */

// Commento veloce: ctrl + ù

console.log("Ciao ragazzi, benvenuti al corso !!");

//Istanzio delle variabili
//JAVASCRIPT è un linguaggio DEBOLMENTE TIPIZZATO, cioè nel dichiarare una variabile non specifico il tipo di dato utilizzato per quanto JS sa esattamente la differenza tra un tipo e l'altro 


let mioNome = "Dario"; //questa è una string
let mioCognome = "Mennillo"; //questa è una string
let miaEta = 36; //questo è un number
let presenza = true; //questo è un boolean
let numeroCasuale = 45.3;


//posso dichiare e valorizzare una variabile in due tempi diversi
//dichiaro
let nomeCorso;
//assegno un valore
nomeCorso = "tecnico svil pag web";

//utilizzo + per concatenare le string
// let presentazione = "Ciao, mi chiamo " + mioNome + " " + mioCognome + " insegno sul corso di: " + nomeCorso;

//Posso concatenare delle stringhe utilizzando ${}
let presentazione = `Ciao, mi chiamo ${mioNome} ${mioCognome} e ho ${miaEta} anni. Insegno sul corso di: ${nomeCorso}`;

console.log(presentazione);

//Duplice natura del simbolo +
let num1 = "22";
let num2 = "15";

//Pur avendo 2 numeri formato stringa posso comunque fargli svoglere l'operazione di somma andando a fare il Cast del dato (forzare quel dato ad essere di un determinato tipo).
let somma = Number(num1) + Number(num2);
let prod = num1 * num2;
let quoz = num1 / num2;
let diff = num1 - num2;

console.log(`la somma vale ${somma}`);
console.log(`il prod vale ${prod}`);
console.log(`il quoz vale ${quoz}`);
console.log(`la diff vale ${diff}`);


