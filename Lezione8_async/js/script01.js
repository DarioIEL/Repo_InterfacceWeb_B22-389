let utenti = [];

const URLendpoint = "https://jsonplaceholder.typicode.com/users";

//utilizzo il metodo fetch() per poter richiamare i dati che si trovano presso la risorsa (url)
//il metodo fetch() restituisce una PROMISE
//Specificando solo lURL la fetch esegue di default un metodo GET
fetch(URLendpoint)
.then(data => {
    console.log(data);
    console.log(data.body);
    console.log(data.status);
    if(data.status == 404){
        demo.innerHTML = "Ricevendo i dati....."
        setTimeout(() => {
            location.href = "pagenotfound.html"
        }, 3000);
    }
    
    return data.json(); //questo metodo parserizza il body della promise(dati in formato json)
})
.then(response =>{ //questa response sono i dati tradotti in formato OBJECT
    console.log(response);
    utenti = response;
    console.log(utenti);
    creaListaUsers(utenti);
})


const demo = document.querySelector("#demo");

/**
 * 
 * @param {Object[]} users 
 */
function creaListaUsers(users){
    users.forEach(user => {
        demo.innerHTML += "<li>" + user.name + " email: " + user.email + "</li>";
    });
}



const btn = document.querySelector("#btn");

function inviaMsg(){
    //ELaboro una POST verso jsonplaceholder
    let nuovoMsg = {
        text: "Ciao, come stai ?",
        dataInvio: "26/02/2026"
    }

    let URLPost = "https://jsonplaceholder.typicode.com/posts";

    fetch(URLPost, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(nuovoMsg)
    })
    .then(data => {return data.json()})
    .then(response => {
        console.log(response, "Messaggio Registrato");
    }
    )
}

btn.addEventListener("click", inviaMsg)