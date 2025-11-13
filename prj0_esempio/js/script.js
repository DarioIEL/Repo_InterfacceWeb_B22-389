//Imposta da capo un progetto web, la cartella si chiamerà "prj0_esempio". All'interno struttura i file e le cartelle come abbiamo visto a lezione. Nello script crea le seguenti variabili: nomeUser, cognomeUser, emailUser, corsoUser, etaUser. Stampa in console il valore che hai assegnato ad ogni singola variabile, stampa il tipo per ogni variabile, stampa una frase di presentazione contenente tutte le variabili. Chiedi all'utente attraverso il prompt il suo anno di nascita e stampa il valore in console.

let annoNascita = prompt("In che anno sei nato/a ? ");

let nomeUser = "Anna";
let cognomeUser = "Rossi";
let emailUser = "anna.rossi@mail.com";
let corsoUser = "Interfacce WEB";

let etaUSer = 2025 - Number(annoNascita);

console.log(nomeUser, typeof nomeUser);
console.log(cognomeUser, typeof cognomeUser);
console.log(emailUser, typeof emailUser);
console.log(corsoUser, typeof corsoUser);
console.log(etaUSer, typeof etaUSer);




let presentazione = "Ciao, mi chiamo \n" + nomeUser + " " + cognomeUser + " e ho " + etaUSer + " anni, sono nata nel " + annoNascita + "\nEmail: " + emailUser;

console.log(presentazione);


