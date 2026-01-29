// SINTASSI: 
// if (condizione){
//      ..corpo 
// }

// la condizione è sempre un boolean
let etaUser = 20;
let invito = true;

//ATT: una volta che entro in un if ed eseguo il corpo non vado negli if successivi
if ( etaUser >= 18 ){
    console.log("Hai l'età giusta per accedere");
    
}else if (invito){
    console.log("Hai l'invito, puoi entrare nel locale");

}else{ //else non è mai obbligatorio
    console.log("Mi spiace, non puoi proprio entrare");
}


// ESEMPIO

let num1 = 10
let num2 = 5;

if (num1 > num2 ){
    console.log("num1 è maggiore di num2");
}else if (num1 < num2){
    console.log("num2 è maggiore di num1");
}else if (num1 === num2){
    console.log("i due numeri sono uguali");
}else{
    console.log("i due valori non possono essere confrontati");
}


// ESEMPIO
let password = "abcd";

if(password != "abcd"){
    console.log("Mi spiace, password errata");
}else{
    console.log("Password corretta, puoi accedere");   
}

//UNISCO LE CONDIZIONE con && (AND logico) || (OR logico)

//1. && devono essere true tutte le condizioni affinché la condizione globale sia true

//esempio: per registrare il voto dell'esame devo aver superato l'esame e partecipato ai labs
let votoEsame = 16;
let laboratorio  = false;

//      TRUE                TRUE
if (votoEsame >= 18 && laboratorio){
    console.log(`Bene, il tuo voto finale è ${votoEsame}`);
} else if (votoEsame < 18 && laboratorio){
    console.log("Hai partecipato al laboratorio ma non hai superato il 18. Non posso registrare il voto");
} else if (votoEsame >= 18 && !laboratorio){
    console.log("Hai superato l'esame ma non hai partecipato al lab. Non posso registrare il voto");
} else{
    console.log("Non hai nè il voto giusto nè il lab frequentato");
}

// ESEMPIO. Per registrare il voto dell'esame mi basta superare o lo scritto o l'orale, oppure entrambi

let votoScritto = 12;
let votoOrale = 17;

//ATT: mi basta che una delle due condizioni sia vera affinché quella globale risulti vera
if (votoScritto >= 18 || votoOrale >= 18){
    console.log("Bene, hai superato l'esame");
    if(votoScritto > votoOrale){
        console.log(`Il voto finale è ${votoScritto}`);
    }else{
        console.log(`Il voto finale è ${votoOrale}`);
    }
}else{
    console.log("Mi spiace, non hai superato l'esame. NEssuno dei tuoi voti è >= 18");
}

