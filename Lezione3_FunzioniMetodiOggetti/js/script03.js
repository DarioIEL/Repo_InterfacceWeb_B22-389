function salutaStudente(){
    console.log("Ciao Dario Mennillo");
}

function salutaDocente(nomeDoc){
    console.log("Ciao " + nomeDoc);
}


//Recupero il pulsante dall' HTML
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", salutaStudente);

let btn2 = document.querySelector("#btn2");
//Non posso avere le (param) in una funzione di callback richiamata su un addEventListener. Si risolve con delle funzioni anonime
btn2.addEventListener("click", function(){
    let nomeDocente = "Oscar";
    salutaDocente(nomeDocente);
});