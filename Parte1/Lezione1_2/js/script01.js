//ARRAY strutture contenitori 0-based
//              0       1        2         3    
let colori = ["blu", "verde", "rosso", "giallo"];

let numElems = colori.length; //4
console.log("Nell'array ci sono " + numElems + " elementi");

//Voglio leggere un elemento alla volta
console.log(colori[0]); //blu
console.log(colori[3]); //giallo
console.log(colori[4]); //undefined

let primoEl = colori[0];
console.log(primoEl);


//aggiungo un colore al fondo dell'array
colori.push("viola");
colori.push("magenta");

//rimuovo l'ultimo elemento
colori.pop();

//aggiungo all'inizio un elemento
colori.unshift("azzurro");
colori.unshift("nero");

//ordino gli elementi alfabeticamente
colori.sort();

//inverto l'ordine degli elementi
colori.reverse();


//Creo un altro array e con l'operatore spread lo unisco al precedente
let altriColori = ["Ottanio", "Ciano", "Carminio", "Cobalto"];

colori.push(...altriColori)


let nuovoArr = [...colori];
console.log(nuovoArr);


//Estraggo degli elementi con slice(), non modifica l'array
console.log(colori.slice(1, 5));

//Rimuovo o sostuisco uno o più elementi, questo modifica l'array
colori.splice(0, 1, "Marrone");

//stampo l'intero array
console.log(colori);

let ultimoEl = colori[colori.length - 1];
console.log("L'ultimo colore è " + ultimoEl);


//Unire gli elementi di un array mettendoli in una string
let saluti = ["Ciao", "come", "stai?"];

// console.log(saluti[0] + " " + saluti[1] + " " + saluti[2]);
console.log(saluti.join(" "));

let stringaParole = "Ciao mi chiamo Dario";
//Posso prendere le parole di questa string e inserirle in un array
console.log(stringaParole.split(" "));

//Invertire una parola
//            01234567  
let parola = "Mennillo";
//Possiamo più o meno consideraree le stringhe come un array di caratteri
console.log(parola[0]);
console.log(parola[parola.length - 1]);

let parolaReverse = parola.split("").reverse().join("");

console.log(parolaReverse);

//Stampo nella pagina un array
let frutta = ["mela", "pesca", "arancia", "kiwi"];
console.log(frutta);

// document.write("<li>" + frutta[0] + "</li>"); 
// document.write("<li>" + frutta[1] + "</li>"); 
// document.write("<li>" + frutta[2] + "</li>"); 
// document.write("<li>" + frutta[3] + "</li>"); 

// frutta.forEach(frutto => {
//     document.write("<li>" + frutto + "</li>");
// });

frutta.push("mandarino");
frutta.shift();

for (let i = 0; i < frutta.length; i++) {
    document.write("<li> " + frutta[i] + "</li>");
}

frutta.indexOf("ciliegia"); //-1

