// CLOSURE: sono funzioni che ricordano le variabile del loro ambiente esterno, dopo che la funzione esterna è stata eseguita.
//Terra terra: praticamente è una funzione creata dentro un'altra funzione che accede alle variabili della funzione che la contiene

function esterna(){
    let saluto = "Ciao, come stai ? ";

    function interna(){
        //Questa funzione interna può accedere a saluto
        console.log(saluto);
    }

    return interna;
}

let miaClosure = esterna();
miaClosure();

//STEP by STEP

function creaContatore(){
    let contatore = 0;

    function aumentaContatore(){
        contatore++;
        return contatore;
    }

    return aumentaContatore;
}


let mioContatore = creaContatore();
console.log(mioContatore());  //1
console.log(mioContatore()); //2
console.log(mioContatore()); //3
console.log(mioContatore()); //4
console.log(mioContatore()); //5

// console.log(contatore);



//Altro esempio
function moltiplicatore(fattore){
    return function(numero){
        return numero * fattore;
    }
}

let raddoppia = moltiplicatore(2); //questo è il "fattore"
console.log(raddoppia(10)); //questo è il "numero"


let triplica = moltiplicatore(3);
console.log(triplica(20));


//Altro esempio
function saluta(nome){
    let msg = "Ciao";
    function mostraSaluto(){
        console.log(msg + " " + nome);
    }
    return mostraSaluto;
}


let salutaDario = saluta("Dario");
let salutaPaola = saluta("Paola");
let salutaAndrea = saluta("Andrea");

salutaDario();
salutaPaola();
salutaAndrea();


//altro Esempio

function altroContatore(){
    let mioCounter = 0;

    return{
        incrementa: function(){
            mioCounter++;
        },
        decrementa: function(){
            mioCounter--;
        },
        leggiValAttuale: function(pass){
            if(pass == "1234"){
                return mioCounter;
            }else{
                return "Password errata"
            }
        }
    }
}

console.log("---- Altro Contatore ----");

let contatore2 = altroContatore();
contatore2.incrementa();
contatore2.incrementa();
contatore2.incrementa();
contatore2.decrementa();
contatore2.incrementa();

console.log(contatore2.leggiValAttuale("123"));
console.log(contatore2.mioCounter); //ATTT: NON POSSO ACCEDERE DIRETTAMENTE AL VALORE DEL MIO CONTATORE INTERNO ALLA FUNZIONE. PER POTER LEGGRE IL VALORE DEVO METTERE UNA PASSWORD



