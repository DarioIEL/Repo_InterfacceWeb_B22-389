// Con gli array posso raggruppare più valori allo stesso tempo
//Sono come dei contenitori di elementi simili ("stesso tipo" ma in JS non è vero) tra loro.
//Gli array sono oggetti 0-based: ogni elemento ha un indice, questo indice parte da 0

//              0           1              2         3             4            5
let cose = ["matita", "caricabatterie", "mouse", "tastiera", "smartphone", "computer"];

//posso richiamare gli elementi in una determinata posizione attraverso gli indici
console.log(cose[2]);
console.log(cose[0]); //Il primo elemento è SEMPRE in posizione 0
console.log(cose[4]);

//proprietà length degli array. Misuro l'array, cioè conto quanti elementi ci sono 
console.log("L'array ha una dimensione di " + cose.length);

//Mettendo caso che ci sono x elementi in un array come stampo il valore dell'ultimo elemento ? 
//                            5         1    
let ultimoElemento = cose[cose.length - 1];
console.log(ultimoElemento);

//Alcuni metodi per array
//metodo PUSH() - aggiungew in coda un elemento
cose.push("agenda");

//unshift() - aggiunge all'inizio dell'array
cose.unshift("webcam");


//pop() - elimina l'ultimo elemento
cose.pop();

//shift() - eliminar il primo elemento
cose.shift();

console.log(cose);

let filtro = cose.filter((cosa) => cosa.length > 8);
console.log(filtro);

let verificaCosa = cose.includes("mouse");
console.log(verificaCosa);


//ATT: per quanto sia possibile fare degli array misti in JS non ha molto senso logico
let mioArr = ["Ciao", 2, true, "Dario", 56.6];


//OPERATORE SPREAD ...
let colori = ["rosso", "giallo", "blu", "rosa", "verde"];
let frutta = ["mela", "pera", "pesca"];

let unicoArray = [...colori,...frutta];
console.log(unicoArray);

