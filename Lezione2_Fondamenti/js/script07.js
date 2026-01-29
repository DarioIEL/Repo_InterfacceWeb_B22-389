//BREAK: il break interrompe anticipatamente un ciclo, una esecuzione di un costrutto

let listaNum = [4,32,1,33,42,1,0,49,5,67,42];

let numDaCercare = 42;
let giri = 0;


for(let i = 0; i < listaNum.length; i++){
    giri++;
    if(listaNum[i] == numDaCercare){
        console.log(`TROVATOOO ${listaNum[i]}`);
        break; //con l'utilizzo del break il ciclo viene interroto prima della fine dell'array
    }
}

console.log(giri);

//CONTINUE: questa keyword mi permette di "saltare" un'iterazione

for(let i = 0; i < listaNum.length; i++){
    
    if(listaNum[i] == numDaCercare){
        console.log("NON STAMPA IL NUMERO");
        continue; //Quando viene letto il continue mi riporta subito alla riga 20, non viene eseguita la 27
    }

    console.log(listaNum[i]);
}
