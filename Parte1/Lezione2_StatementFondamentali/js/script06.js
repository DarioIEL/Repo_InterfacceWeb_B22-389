//Lo switch permette di controllare direttamente il valore di una variabile

let msg = "";

let livelloGioco = 2;

switch (livelloGioco) {
    case "uno":
    case 1:
        msg = "Ciao giocatore, sei nel primo livello";
        break;

    case "due":
    case 2:
        msg = "Sei nel secondo livello, ti manca un solo livello per completare il gioco";
        break;

    case "tre":
    case 3:
        msg = "Ultimo livello, adesso c'è il mostro !!!";
        break;


    default:
        msg = "Ciao giocatore, non sei in nessun livello";
        break;
}

console.log(msg);


let giornoSettimana = prompt("Che giorno è oggi ?").toLocaleLowerCase();
let feed = "";

switch (giornoSettimana) {
    case "lunedì":
        feed = "Il Lunedì è tragico per tutti";
        break;

    case "venerdì":
        feed = "Finalmente sta finendo la settimana";
        break;

    default:
        feed = "Non capisco il giorno che mi stai passando"
        break;
}

console.log(feed);
