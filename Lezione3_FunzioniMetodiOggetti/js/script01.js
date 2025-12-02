//Dichiaro una funzione
function salutaDocente(){
    console.log("Ciao " + nomeDocente);
}

function saluta(){
    let mioNome = "Dario"; //Questa è una variabile locale, vuol dire che dall'esterno io non ci posso accedere. Scope è locale
    console.log("Ciao classe");
    console.log("Ciao " + mioNome  +" ti sto salutando ");   
}

//Richiamo una funzione
saluta();

// console.log(mioNome);



let nomeDocente = "Oscar"; //Questa è una variabile globale, visibile dappertutto a meno che nella funzione non ci sia una variabile con lo stesso nome
salutaDocente();
