console.log("Hello, world !!!");

// Questo è un commento a riga singola in JS
/**
 * Commento multiriga
 * Gli * vengono generati in automatico
 */

let mioNome = "Dario";

console.log("Ciao " + mioNome + " sono lo script esterno!!");


//VARIABILI
//Contenitori di un'informazione singola che Varia nel corso del codice

//Dichiaro una variabile
let cognome;

//ASsegno un valore alla mia variabile
cognome = "Mennillo";


//posso anche dichiarare una variabile in una riga sola
let miaEta = 36;

//Richiamo le variabili stampandole in console
console.log("Mi chiamo " + mioNome + " " + cognome + " e ho " + miaEta + " anni");

//REGOLE per denominare una variabile
//2nome NON VA BENE
//nome2 VA BENISSIMO
//creare delle variabili che siano "parlanti", cioè descrittive del loro contenuto

//camelCase va bene per le variabili
//PascalCase va bene per le classi o i metodi
//UPPERCASE va bene per le costanti
//snake_case anche va bene per le var ma si prefisce il camelCase
//kebab-case non si può usare


//TIPI DI DATO
//Javascript è un linguaggio debolmente tipizzato, quindi sarà l'interprete(browser) a stabilire il tipo. JS è tipizzato, quindi i tipi esistono semplicemente non li devo dichiarare

let parola = "Questa è una string"; //String
let numero = 20; //Number
let stato = false; //Boolean

console.log(typeof parola);
console.log(typeof numero);
console.log(typeof stato);

//RIASSEGNO IL VALORE DI UNA VARIABILE, sto cambiando il suo valore 
parola = "Questa è una frase";
console.log(parola);

//Nei linguaggi debolmente tipizzati posso, nel cambiare valore, anche cambiare il tipo. SCONSIGLIATISSIMO
parola = 100;
console.log(parola);

//Proviamo con i numeri
let altroNumero = "30";

//let somma = altroNumero + 1; //301. Il problema è che il simbolo + è sia operatoratore matematico, sia operatore di concatenazione tra stringhe

//Per poter "risolvere" il problema uso il cast del dato, forzando la variabile altroNumero ad essere di tipo Number
let somma = Number(altroNumero) + 1;
console.log(somma);

let prodotto = altroNumero * 2; //60
console.log(prodotto);

let differenza = altroNumero - 5;
console.log(differenza);

let quoziente = altroNumero / 2;
console.log(quoziente);


//In Java per esempio la tipizzazione è forte
// String parola = "Parole ";
// int numero = 20;


//Esempio pratico di CAST del dato
let annoNascita = prompt("In che anno sei nato ?"); //tutto quello che viene recuperato come input utente è una string quindi se devo fare della matematica mi conviene sempre castare il dato

console.log("Sei nato nel " + annoNascita);
console.log(typeof annoNascita);


let etaUser = 2025 - Number(annoNascita);
console.log("Oggi hai " + etaUser + " anni");
console.log(typeof etaUser);



//Imposta da capo un progetto web, la cartella si chiamerà "prj0_esempio". All'interno struttura i file e le cartelle come abbiamo visto a lezione. Nello script crea le seguenti variabili: nomeUser, cognomeUser, emailUser, corsoUser, etaUser. Stampa in console il valore che hai assegnato ad ogni singola variabile, stampa il tipo per ogni variabile, stampa una frase di presentazione contenente tutte le variabili. Chiedi all'utente attraverso il prompt il suo anno di nascita e stampa il valore in console.