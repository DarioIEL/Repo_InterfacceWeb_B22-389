/**
 * 
 * @param {String} frase 
 */
function trovaParolaPiuLunga(frase){
    //parole è un array 
    let parole = frase.split(" ");

    let parolaPiuLunga = "";

    for(let i = 0; i < parole.length; i++){

        if(parole[i].length > parolaPiuLunga.length ){
            parolaPiuLunga = parole[i];
        }
    }

    return parolaPiuLunga;
}

let frase1 = "Mi chiamo Massimiliano e faccio il programmatore";
console.log("la parola più lunga nella frase:\n" + frase1 + "\nè: " + trovaParolaPiuLunga(frase1));

let frase2 = "Ora sono le Otto meno dieci e comincio a pensare alla cena";
let parolaLunga = trovaParolaPiuLunga(frase2);

console.log("Nella frase: " + frase2 +"\nLa parola più lunga è: " + parolaLunga);

