function presenta(nome, cognome, eta, dataNascita, corsoFreq){
    let presentazione = `
    <p> Nome User: ${nome} ${cognome} </p>
    <p> Data di Nascita - Età: ${dataNascita} - ${eta} anni </p>
    <p>Corso Frequentato: ${corsoFreq}
    `;
    
    return presentazione;
}

function recupera_stampa(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let dataNascita = document.getElementById("dataNascita").value;
    let eta = document.getElementById("eta").value;
    let corsoFreq = document.getElementById("corsoFrequentato").value;

    let demo = document.getElementById("demo");

    if(nome != "" && cognome != "" && dataNascita != "" && eta != "" && corsoFreq != ""){
        demo.innerHTML = presenta(nome, cognome, eta, dataNascita, corsoFreq);
        pulisciForm();
       
    }else{
        demo.innerHTML = "<h4>Mi spiace, stai dimenticando qualcosa </h4>";
    }

}

function pulisciForm(){
 document.querySelectorAll("input").forEach(campo => {
            campo.value = "";
        })
}

let btn = document.getElementById("btn");
btn.addEventListener("click", recupera_stampa);


