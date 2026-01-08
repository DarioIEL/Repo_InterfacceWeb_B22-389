let btn = document.querySelector("#btn");

//VERS 1
// let contatore = 0;

// function stampaUnoAllaVolta(){
//     let parole = ["ciao", "come", "stai", "tutto", "bene"]
//     console.log(parole[contatore]);
//     contatore++;
// }

// //Att, la funzione va collegata senza le parentesi tonde()
// btn.addEventListener("click", stampaUnoAllaVolta);

//VERS2
// let contatore = 0;
// /**
//  * 
//  * @param {String[]} parole 
//  */
// function stampaUnoAllaVolta(parole){
//     console.log(parole[contatore]);
//     contatore++;
// }

// btn.addEventListener("click", function(){
//     let parole = ["ciao", "come", "stai", "tutto", "bene"];
//     stampaUnoAllaVolta(parole);
// })

let  contatore = 0;

function stampaParola(parola){
    if(parola != undefined){
        console.log(parola);
        contatore++;
    }else{
        console.log("So finiteeee");
    }
}

function unaAllaVolta(){
    let parole = ["ciao", "come", "stai", "tutto", "bene"];

    stampaParola(parole[contatore]);
}

btn.addEventListener("click", unaAllaVolta);