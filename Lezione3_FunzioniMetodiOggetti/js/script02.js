//Alle funzioni possiamo passare dei parametri in ingresso. L'insieme del nome della funzione e i suoi parametri si chiama "Firma della funzione" o "signature"
function salutaRespo(nomeRespo){
    console.log("Ciao " + nomeRespo);   
}

salutaRespo("Stefania Vipiana");
salutaRespo("Egle Risola");

let listaRespo = [
    "Vincenzo", 
    "Valentina",
    "Tina",
    "Rita",
    "Tiziana",
    "Benedetta"
];

for(let i = 0; i < listaRespo.length; i++){
    salutaRespo(listaRespo[i]);
}

function moltiplicaDueNumeri(num1, num2){
    let risultato = num1 * num2;
    console.log("Il risultato della moltiplicazione è " + risultato);
}

moltiplicaDueNumeri(8, 26);

//Creo una funzione che mi restituisce qualcosa
function dividiDueNum(num1, num2){
    let risultato = num1 / num2;
    return risultato; //la parola chiave return mi fa capire che la funzione mi sta restituendo qualcosa, adesso bisogna capire come andarlo a prendere
}

// dividiDueNum(95, 6);
//raccolgo, registro in una variabile il risultato dell'esecuzione della funzione dividiDueNum()
let numero = dividiDueNum(96, 5);
console.log(numero);

//opppure
console.log(dividiDueNum(87,4));

//oppure posso creare una funzione che accetta come parametro un'altra funzione
function stampaValore(valore){
    console.log("Il valore da stampare è: " + valore);
}

stampaValore(dividiDueNum(36,8))

//ATT: non è detto che una funzione avente il return debba per forza avere dei paraemtrio di ingresso

//CALLBACK FUNCTION. Avere una funzione come parametro
function stampaQualcosa(nome, callback){
    console.log("Ciao " + nome);
    callback();    
}

function diciArrivederci(){
    console.log("Arrivederci !!");
}

stampaQualcosa("Anna", diciArrivederci)

//Funzioni anonime e callback

function salutaQualcuno(nome, callback){
    console.log("Ciao " + nome);
    callback();
}

function stampaSaluto(saluto){
    console.log(saluto);
}

//in questo caso mi servono le funzioni anonime
salutaQualcuno("Dario", function(){
    stampaSaluto("Buongiorno");
});

//Un esempio di funzione di callback sincrona è il foreach nel quale utilizzo anche una arrow function
let listaColori = ["blu", "bianco", "verde", "rosa"];

//sintassi del foreach
// array.forEach(element => {
// });

//colore => {} è uguale a function(colore){}

listaColori.forEach(colore => {
    console.log(colore);
})

setTimeout(function(){
    console.log("Ciao, dopo 3 secondi");  
}, 3000);

//Funzioni anonime
function salutaStudente(){
    console.log("Ciao Mario");
}

