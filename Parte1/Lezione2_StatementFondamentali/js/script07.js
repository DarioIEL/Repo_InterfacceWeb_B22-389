//WHILE e DO-WHILE. Parliamo di cicli indefiniti
//esempio Numero segreto

const NUMERO_SEGRETO = 7;
let numeroUtente = 0;
let tentativi = 0;

while(numeroUtente != NUMERO_SEGRETO){
    numeroUtente = prompt("Inserisci il numero segreto per accedere");
    tentativi ++;
}

console.log("Bravo, sei riuscito ad entrare con " + tentativi + " tentativi");


console.log("=== TABELLINA DEL 7 ===");
let i = 1; //variabili di supporto o backup
let msg = "";

//Il while esegue il codice nel suo body fintanto che è TRUE la condizione 
while(i <= 10){
    let risultato = i * 7;
    msg += i + " x 7 = " + risultato + "\n";
    i++;
}
console.log(msg);


//DO-While: prima esegue qualcosa poi lo controlla con un while

numeroUtente = 0;

do{
    numeroUtente = prompt("Inserisci il numero segreto");

}while(numeroUtente != NUMERO_SEGRETO);

console.log("Hai di nuovo trovato il numero segreto");
