//OPERATORI DI CONFRONTO: tutte le volte che utilizzo un operatore di confronto sto creando una variabile boolean

// == e ===
//== valuta solo il contenuto
//=== valuta anche il tipo di dato
let num1 = 5;
let num2 = 8;

let conf1 = (num1 == num2);// false
let conf2 = (num1 === num2); //false

console.log(conf1);
console.log(conf2);

let num3 = 10;
let num4 = "10";

let conf3 = (num3 == num4); //true
let conf4 = (num3 === num4); //false

console.log(conf3);
console.log(conf4);

// != e !== (NOT equal). Il ! serve a negare una condizione
let conf5 = (num3 != num4); //false
let conf6 = (num3 !== num4); //true

console.log(conf5);
console.log(conf6);

//> < >= <=
let conf7 = num1 > num2; //false
let conf8 = num1 < num2; //true
let conf9 = num1 >= num2; 
let conf10 = num1 <= num2
let conf11 = num3 >= num4; //true
let conf12 = num3 <= num4; //false

//Faccio una prova con le string

let parola1 = "Ciao";
let parola2 = "CiaO";

let confPar1 = parola1 == parola2; //false
console.log(confPar1);

//ATT: per poter contare le lettere devo utilizzare la prop length
let confPar2 = parola1.length >= parola2.length;
console.log(confPar2); //false

//OPERATORI LOGICI: servono a mettere insieme più confronti oppure poter confrontare contemporaneamente più cose.
//&&  ||  !
//AND OR NOT

//Giochino online: 
let punt = 4;
let puntSkill = 5;

//per poter superare il livello devo avere un punteggio > 5 e un punteggioSkill > 5; Se uno dei due punteggi è sotto la soglia non passo il livello 

//Uso && come se fosse un " e contemporaneamente"
let passLivello = (punt > 5) && (puntSkill > 5);
console.log("Livello superato: " + passLivello);

//per poter superare il livello basta che uno dei due punteggi sia > 5
let passLivello2 = (punt > 5) || (puntSkill > 5);
console.log("Livello Easy superato: " + passLivello2);
