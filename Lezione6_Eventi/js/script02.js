const { use } = require("react");

const form = document.querySelector("form");
const feed = document.querySelector("#feed");

function checkUsername(){
    let username = form.username.value;
    if(username.length < 5){
        feed.textContent = "Il tuo username non rispetta la lunghezza";
        return false
    }else{
        feed.textContent = "";
        return true
    }
}

//mi prendo i singoli campi per poter applicarei vari eventi
let username = form.querySelector("#username");

username.addEventListener("blur", checkUsername); //blur si scatena nel momento in cui esco da un campo, cioè clicco all'esterno del campo input

function checkEmail(){
    let email = form.email.value;
    let regexMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!email.match(regexMAIL)){
        feed.textContent = "La tua mail non rispetta il formato corretto";
        return false;
    }else{
        feed.textContent = "";
        return true;
    }
}

let email = form.querySelector("#email");
email.addEventListener("blur", checkEmail);

function checkOptions(){
    let ruolo = form.ruolo.value;
    if(ruolo == ""){
        feed.innerHTML = "Ricorda di selezionare un ruolo";
        return false;
    }else{
        feed.innerHTML = "";
        return true;
    }
}

function checkSub(){

    let isValid = checkUsername() && checkEmail() && checkOptions;

    if(isValid){
       console.log("Registrazione avvenuta");
       return true;
    }else{
        return false;
    }
}

form.addEventListener("submit", function(event){
    if(!checkSub()){
        event.preventDefault();
    }
})

username.addEventListener("keypress", function(event){
    console.log(event.keyCode);

    //13 è l' Enter
    if(event.keyCode == 13){
        checkSub();
    }
    
})