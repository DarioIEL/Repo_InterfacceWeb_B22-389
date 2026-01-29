//For: costrutto che permette di ripetere un blocco di codice un numero finito di volte
/**     iniz       cond   agg
 * for (let i = 0; i < 3; i++){
 *  ..corpo
 * }
 */

for(let i = 0; i <= 3; i++){
    console.log("Ciao, " + i);
}

//1° giro
//i = 0; 0 < 3 (T); 1 --->

//2° giro
//i = 1; 1 < 3 (T); 2 --->

//3° giro
//i = 2; 2 < 3 (T); 3 ---->

//4° giro 
//i = 3; 3 < 3 (F); XXXXXXX 

let listaNum = [4,6,2,21,56,5,8,95,4,2,11,2];

let somma = 0;
//voglio stampare un numero alla volta e fare la somma
for(let i = 0; i < listaNum.length; i++){
    console.log(listaNum[i]);
    somma += listaNum[i];
}

console.log(`IL totale è: ${somma}`);

//For al contrario
for(let i = listaNum.length - 1; i >= 0; i--){
    console.log(listaNum[i]);
}

// console.log(i);

console.log("STAMPO con un FOREACH");

//foreach. Questo è un for ottimizzato per gli array
listaNum.forEach(num => {
    console.log(num);
});
