// let numeriEstratti = [];
// let estrazioniEseguite = 0;

// for(let i = 0; i < 45; i++){
//     let numero = Math.ceil(Math.random() * 90);
//     if(numeriEstratti.indexOf(numero) == -1){
//         numeriEstratti.push(numero);
//     }else{
//         i--; //fatti di nuovo lo stesso giro
//     }
//     estrazioniEseguite++;
// }

// console.log(numeriEstratti);
// console.log("Estrazioni eseguite: " + estrazioniEseguite);

//Prova a fare la stessa cosa con un While

let numeriestratti = [];
let estrazioniEseguite = 0;

while(numeriestratti.length < 50){
    let numeroEstratto = Math.ceil(Math.random() * 90);
    if(numeriestratti.indexOf(numeroEstratto) == -1){
        numeriestratti.push(numeroEstratto)
    }
    estrazioniEseguite++;
}

console.log(numeriestratti);
console.log(estrazioniEseguite);



//Prova a fare lo stesso esercizio ma con solo il costrutto del for, in pratica non utilizzare il metodo indexOf()

