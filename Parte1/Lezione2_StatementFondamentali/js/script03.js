//OPERATORI MATEMATICI
//Operatore di autoincremento
let numero = 10;
numero++; //numero = numero + 1. Si chiama operatore di post-incremento
console.log(numero);
// ++numero; //Questo si chiama operatore di preincremento


numero--;
//--numero: //Questo è l'operatore di predecremento

console.log(numero);

//Operatore di somma
numero += 5; //numero = numero + 5;
//Fare l'esempio con le stringhe
console.log(numero);

numero -= 3;
console.log(numero);

numero *= 2;
console.log(numero);

numero /= 3;
console.log(numero);

//OPERATORE RESTO DELLA DIVISIONE o MODULO %
let numero2 = 42;

let restoDivisione = numero2 % 2; //0
console.log(restoDivisione);

let restoDivisione2 = numero2 % 5; //2
console.log(restoDivisione2);

//Voglio capire se un numero è divisibile per un altro 
let mioNumero = 12;
let divisore = 6;

if(mioNumero % divisore == 0){
    console.log(mioNumero + " è divisibile per " + divisore);
}else{
    console.log(mioNumero + " NON è divisibile per " + divisore);
}


//Uso del += con le stringhe

let msg = "Ciao, benvenuto nel gioco. \n";

if(mioNumero % divisore == 0){
    msg += mioNumero + " è divisibile per " + divisore;
}else{
    msg += mioNumero + " NON è divisibile per " + divisore;
}

console.log(msg);

