//FUNZIONI con PARAMETRI: argomenti in ingresso

/**
 * @param {String} nome 
 */
function saluta(nome){
    console.log(`Ciao ${nome}`);
}

//Nel momento in cui richiamo la funzione gli devo passare qualcosa
saluta("Mario");
saluta("Anna");
saluta("Paolo");
saluta("Luisa");
saluta(10);
saluta(true);
saluta("Pippo")


function presentaStudente(nome, cognome, matricola, corso){
    let presentazione = `Mi chiamo ${nome} ${cognome}, matricola ${matricola}. Sono iscritta/o al corso di ${corso}`;

    console.log(presentazione);
}

presentaStudente("Laura", "Verdi", 123, "TSS 389")

//Funzioni con parametri di default
function presentaDocente(nome = "Dario", cognome = "Mennillo", matricola = 456 ){
    let presentazione = `Docente ${nome} ${cognome}, matricola ${matricola}`;
    console.log(presentazione);
}

presentaDocente();
presentaDocente("Ilaria", "Mennillo", 789);

/**
 * @param {String[]} parole 
 */
function stampaParole(parole){
    parole.forEach(parola =>{
        console.log(parola);
    })
}
//gli devo passare un array in ingresso
stampaParole(["ciao", "buongiorno", "addio"]);


//REST PARAMETERS, si utilizza l'operatore spread "...nomeArray" che mi permette di creare un array
function sommaNumeri(...numeri){
    let totale = 0;
    for (let n of numeri){
        totale += n;
    }
    return totale;
}

console.log(sommaNumeri(2,6,5,8,4,7,4,121,8574,4));
console.log(sommaNumeri(2,6));

//Parola chiave return
function costruisciNome(nome, cognome){
    let nomeCompleto = nome + " " + cognome;
    return nomeCompleto;
}

let nomeUser = costruisciNome("Dario", "Mennillo");
console.log(nomeUser);

console.log(costruisciNome("Laura", "Verdi"));

//ARROW FUNCTIONS
let somma = function(a,b){
    return a+b;
}

console.log(somma(5,7));

let somma2 = (a,b) => {
    return a+b;
}

console.log(somma2(9,7));

//OSS: non utilizzando le parentesi {} non ho bisogno della parola return
let moltiplica = (a,b) => a*b;

console.log(moltiplica(5,8));

//ESEMPIO calcolo di aree
function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

let area = calcolaArea(6,4);
console.log(`L'area del rettangolo vale: ${area}`);


let areaCerchio = (raggio) => Math.PI * raggio * raggio;
console.log(`L'area del cerchio vale ${areaCerchio(9)}`);

//Passare una funzione come parametro
/**
 * 
 * @param {Number} n1 
 * @param {Number} n2 
 * @param {Function} operazione 
 */
function eseguiOperazione(n1, n2, operazione){
    return operazione(n1, n2);
}

let sottrazione = (a,b) => a-b;
let divisione = (a,b) => a/b;

function potenza(a,b){
    return Math.pow(a,b)
}

console.log(eseguiOperazione(6,7,divisione));
console.log(eseguiOperazione(6,7,sottrazione));
console.log(eseguiOperazione(2,2,potenza))


//CALLBACK FUNCTIONS
//Le callback sono funzioni passate come paramtri ad un'altra funzione la quale verrà eseguita solo in un secondo momento
function saluta2(nome, callback){
    console.log(`Ciao ${nome}`);
    callback(); //lancio la funzione dopo aver salutato
}

function dopoSaluta(){
    console.log("Come stai ?");
}

saluta2("Marco", dopoSaluta); //ATT: non usare le parentesi () per richiamare la funz di callback

//callback inline anonima
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @param {Function} operazione 
 */
function faiOperazione(a,b,operazione){
    let risultato = operazione(a,b);
    console.log(`Risultato ${risultato}`);
}

faiOperazione(5,4, somma);

//se non ho una funzione definita(cioè che ha nome), posso creare una funzione contestualmente al richiamo dell'Operazione. In questo caso passo una funzione anonima
faiOperazione(6,9, function(x,y){
    return x + y;
} )

faiOperazione(9,4, (a,b)=>a*b);

//Eempio di utilizzo di una funzione di callback: setTimeout e setInterval
//setTimeout esegue una funzione dopo un tot di secondi
//setInterval esegue la stessa funzione ogni tot di secondi

console.log("START");

setTimeout(function(){
    console.log("Ciao, dopo 2 secondi");
}, 2000)

console.log("END");

let counter = 0;

let intervallo = setInterval( ()=>{
    counter++;
    console.log(`Valore attuale ${counter}`);
    
    if(counter === 5){
        clearInterval(intervallo);
        console.log("STOP");
    }
}, 1000)

//ESEMPIO CON FOREACH
let nomiStud = ["Paolo", "Laura", "Andrea"];

nomiStud.forEach((studente)=>{
    console.log(studente);
})

let studenteTrovato = nomiStud.find(function(stud){
    return stud.length > 5;
})
console.log(studenteTrovato);

