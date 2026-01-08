//Dichiaro una funzione
function faiQualcosa(){
    console.log("Ciao dalla funzione");
    console.log("Sto eseguendo un ciclo for");
    for(let i = 0; i < 10; i++){
        console.log("Ciao dal for " + i);
    }    
}

//Richiamo la funzione
// faiQualcosa();

function faiAltro(){
    console.log("Eseguo la prima funzione");
    faiQualcosa();    
}

faiAltro();

function salutaPersona(){
    let nomePersona = "Laura"; //Questa è una variabile LOCALE
    return "Ciao " + nomePersona;
}

let saluto = salutaPersona();
console.log(saluto);


//Closure. La closure "ricorda" le variabili dello scope più esterno
function creaContatore(){
    let contatore = 0;

    return function(){
        contatore++;
        return contatore;
    }
}

let contatore = creaContatore();
console.log(contatore()); //1
console.log(contatore()); //2
console.log(contatore()); //3
console.log(contatore()); //4

//Altro esempio di closure

function moltiplicatore(fattore){
    return function(numero){
        return numero * fattore;
    }
}


let raddoppia = moltiplicatore(2);
console.log(raddoppia(10));

let triplica = moltiplicatore(3);
console.log(triplica(6));


//Ultimo esempio di closure. Incapsulamento: la capacità di "proteggere" una variabile

function creaUtente(nome){
    let password = "";

    return {
        setPassword(nuovaPass){
            password = nuovaPass
        },
        verificaPassword(tentativo){
            return tentativo === password
        },
        getNome(){
            return nome;
        }
    }
}

let nuovoUser = creaUtente("Dario");
nuovoUser.setPassword("12345");

console.log(nuovoUser.verificaPassword("1234")); //false
console.log(nuovoUser.verificaPassword("12345")); //true


