//Raccolgo tutti gli elementi e i campi del DOM (Document Object Model)
//Att: raccoglierò i value solo all'interno delle funzioni, non qui all'esterno

const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta");
const email = document.getElementById("email");
const codFisc = document.getElementById("codFisc");
const corso = document.getElementById("corso");

const button = document.getElementById("btnSend");
const feed = document.getElementById("feed");

//Per ogni campo input creo una funzione che lo controlla e lo valida
function validaNomeCognome(nome){
    // if(nome.trim() != ""){
    //     return true;
    // }else{
    //     return false;
    // }
    const regex = /^[a-zA-Z]{2,}$/;
    return regex.test(nome);
}

function validaEta(eta){
    if(eta > 18){
        return true;
    }else{
        return false;
    }
}

function validaEmail(email){
    // if(email.trim() != ""){
    //     return true;
    // }else{
    //     return false;
    // }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email);
}

function validaCodFisc(codFisc){
    // if(codFisc.trim() != ""){
    //     return true;
    // }else{
    //     return false;
    // }
    const regex = /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}$/
    return regex.test(codFisc);
}

function validaCorso(corso){
    if(corso != ""){
        return true;
    }else{
        return false;
    }
}

//Funzione per validare tutto
function validaForm(){

    let msgErros = []; //Qui dentro andranno ad essere registrati i msg di errore di ogni singolo campo

    //validazione nome
    if(nome.value.trim() == ""){
        msgErros.push("Nome non inserito");
    }else if(!validaNomeCognome(nome.value)){
        msgErros.push("Il tuo nome non è valido");
    }

    if(cognome.value.trim() == ""){
        msgErros.push("Cognome non inserito");
    }else if(!validaNomeCognome(cognome.value)){
        msgErros.push("Il tuo cognome non è valido");
    }

    if(!validaEmail(email.value)){
        msgErros.push("Email non valida");
    }

    if(!validaEta(eta.value)){
        msgErros.push("Età non valida");
    }

    if(codFisc.value.trim() == ""){
        msgErros.push("Codice Fiscale non inserito")
    }else if(!validaCodFisc(codFisc.value)){
        msgErros.push("Codice Fiscale non valido");
    }

    if(!validaCorso(corso.value)){
        msgErros.push("Non hai selezionato un corso");
    }


    if(msgErros.length > 0){
        feed.style.color = "red";
        feed.innerHTML = "<h3>Errori di compilazione</h3>";
        msgErros.forEach(errore =>{
            feed.innerHTML += `<p>${errore}</p>`;
        })
    }else{
        feed.style.color = "green";
        feed.innerHTML = "<h3>Registrazione Avvenuta</h3>";
        feed.innerHTML += `<p> Nome: ${nome.value} ${cognome.value} <p>
                           <p> Corso Selezionato: ${corso.value} </p>
                           <p> Anno Nascita: ${2026 - eta.value} </p>
                           <p> Email: ${email.value} </p>
                           <p> Codice Fiscale: ${codFisc.value}</p>`;
        
        //Inserisci la puliza dei campi 2 secondi dopo aver inviato il form
    }

}

button.addEventListener("click", validaForm);