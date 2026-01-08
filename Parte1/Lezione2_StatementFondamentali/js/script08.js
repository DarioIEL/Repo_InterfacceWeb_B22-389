//Valore assoluto, parte positiva di un numero
let num1 = Math.abs(-8);
console.log(num1);

//Radice
let num2 = Math.sqrt(64);
console.log(num2);

//Potenza
let num3 = Math.pow(8, 2);
console.log(num3);

//Arrotondamento con ROUND
let num4 = Math.round(20.49);
console.log(num4);
let num5 = Math.round(20.5);
console.log(num5);

//Arrotondamento con ceil (intero superiore) e floor (intero inferiore);
let num6 = Math.ceil(20.2);
console.log(num6 + " con ceil");

let num7 = Math.floor(20.2);
console.log(num7 + " con floor");

//Trunc, elimina le cifre dopo la virgola
let num8 = Math.trunc(12.32145687422);
console.log(num8);

let num9 = 12.12321452115;
console.log(num9.toPrecision(4));


//MATH.random() ci fornisce un numero casuale tra 0 e 1, 1 non compreso
let numCasuale = Math.random();
console.log(numCasuale);

let numCas2 = Math.ceil(Math.random()*10);
console.log(numCas2);

//Numero casuale tra 10 e 25
let numCas3 = Math.ceil(Math.random() * 15) + 10;
console.log(numCas3);

//LOTTO ALLE OTTO
let numEstratto = Math.ceil(Math.random() * 90);
console.log(numEstratto);
