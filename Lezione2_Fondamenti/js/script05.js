//WHILE fa parte della famiglia dei cicli indefiniti
/**
 * while (condizione){
 *      ..corpo
 * }
 */

//Posso simulare un for con un while

let i = 0;

while (i < 10){
    console.log(`Ciao ${i}`);
    i++; //aggiorno
}

//while con password
let password = "";
let tentativi = 0;

while(password != "abcd"){
    password = prompt("Inserisci la password: ");

    tentativi++;

    if(password == "abcd"){
        console.log("Bravo, hai indovinato la pass");
    }else{
        console.log("Riprova");
    }
}

console.log(`Hai indovintato in ${tentativi} tentativi`);


//DO- while

do{
    password = prompt("Inserisci la pass del do");

    if(password == "1234"){
        console.log("Bravo");
    }else{
        console.log("ritenta");
        
    }
}while(password != "1234");


//ESEMPIO del while

let arrayNum = [];
let giri = 0;

while(arrayNum.length < 6){ //Questo decide gli slot disponibili nell'array

    let numRand = Math.ceil(Math.random() * 10); //Num random tra 0 e 10

    giri++;

    if(!arrayNum.includes(numRand)){
        arrayNum.push(numRand);
    }

}

console.log(arrayNum);
console.log(`Giri impiegati: ${giri}`);


