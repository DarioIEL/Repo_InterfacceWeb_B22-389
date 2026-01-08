//Il ciclo for permette di ripetere un'operazione per un numero definito di volte.
//  INIZIALIZZAZIONE    CONDIZIONE    AGGIORNAMENTO
for (let i = 0; i < 3; i++) {
    console.log("Ciao " + i);
}

for (let i = 1; i <= 3; i++) {
    console.log("Ciao " + i)
}

//ATT: quando faccio let i = 0 dentro il for questa variabile vive solo ed esclusivamente nel for, fuori non esiste, non so cosa è. i è una variabile LOCALE, vive e muore nel costrutto in cui l'ho dichiarata
// console.log(i);

//Ciclo inverso 
console.log("Ciclo inverso");
for (let i = 3; i > 0; i--) {
    console.log(i);
}

//Applichiamo il ciclo for agli array
let listaNumeri = [4, 6, 9, 10, 2, 1, -4];

//voglio leggere o scorrere la lista dei numeri 

for (let i = 0; i < listaNumeri.length; i++) {
    console.log("Stai leggendo il numero: " + listaNumeri[i]);
}
//               0       1          2               3           4
let parole = ["ciao", "addio", "buongiorno", "buonasera", "arrivederci"];
for (let i = 0; i < parole.length; i++) {
    console.log(parole[i]);
}

for (let i = parole.length - 1; i >= 0; i--) {
    console.log(parole[i]);
}

//Giochiamo con il ciclo for. Data una lista di voti, stampare un voto alla volta e fornire un feedback all'utente se questo voto è < 18

let votiEsami = [30, 26, 28, 19, 30, 22, 16, 30];

for (let i = 0; i < votiEsami.length; i++) {
    let msg = "Esame num: " + (i + 1) + " - voto " + votiEsami[i];
    if (votiEsami[i] < 18) {
        msg += " Attenzione, qui hai preso un brutto voto";
    }
    console.log(msg);
}

//BREAK, utilizzato nei cicli, all'interno di un if permette di uscire anticipatamente da un ciclo
console.log("=== BREAK ===");

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

//CONTINUE: con questa keyword salto un'iterazione, cioè salto un giro
console.log("=== CONTINUE ===");
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

//ESEMPIO: Data una lista di numeri, appena trovi un numero pari salta un giro per passare al numero successivo

console.log("=== SALTA I NUMERI PARI ===");

let numeri = [7, 5, 3, 2, 9, 10, 4, 11, 12, 8];


for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 == 0) {
        console.log("Salto un numero pari");
        continue;
    }
    console.log(numeri[i]);
}

//ESEMPIO: Trova il nome
let nomi = ["Anna", "Marco", "Paolo", "Luisa", "Valeria", "Gianni", "Dario", "Valeria"];

for (let i = 0; i < nomi.length; i++) {
    if (nomi[i] == "Valeria") {
        console.log("Hai appena trovato una Valeria");
        break;
    }
    console.log(nomi[i]);
}



//FOREACH
//Un esempio di funzione di callback sincrona è il foreach nel quale utilizzo anche una arrow function
let listaColori = ["blu", "bianco", "verde", "rosa"];

//sintassi del foreach
// array.forEach(element => {
// });

listaColori.forEach(colore => {
    console.log(colore);
})
