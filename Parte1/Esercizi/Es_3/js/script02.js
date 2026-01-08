/**
 * 
 * @param {String} parola 
 * @param {String} lettera 
 */
function contaLettere(parola, lettera){
    let contatore = 0;
    for(let i = 0; i < parola.length; i++){
        if(parola[i].toLowerCase() == lettera.toLowerCase()){
            contatore++;
        }
    }
    
    console.log("La parola è " + parola);
    console.log("La lettera da contare è " + lettera);
    console.log("La lettera " + lettera + " si ripete " + contatore + " volte");

}

contaLettere("caramella", "A");

// /**
//  * 
//  * @param {String} parola 
//  * @param {String} lettera 
//  */
// function contaLettere(parola, lettera) {
//     let contatore = 0;

//     for (let i = 0; i < parola.length; i++) {
//         if (parola[i].toLowerCase() == lettera.toLowerCase()) {
//             contatore++;
//         }
//     }

//     let risultato = "La parola è " + parola + "\nLa lettera " + lettera + " compare " + contatore + " volte ";

//     console.log("La parola è " + parola);
//     console.log("La lettera da contare è " + lettera);
//     console.log("La lettera " + lettera + " si ripete " + contatore + " volte");

//     return risultato;
// }

// let risultato = contaLettere("Laura", "R");
// console.log(risultato);


