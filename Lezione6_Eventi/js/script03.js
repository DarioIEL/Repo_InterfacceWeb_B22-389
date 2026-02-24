const btn = document.querySelector("#btn");
const demo = document.querySelector("#demo");
const messaggio = document.querySelector("#messaggio");

const messaggiPre = [];

function inviaMessaggio(){
    let testo = messaggio.value;
    messaggiPre.push(testo);

    localStorage.setItem("messaggi",messaggiPre);

    stampaMessaggi();
}

btn.addEventListener("click", inviaMessaggio);

function stampaMessaggi(){
    demo.innerHTML = "";
    let messaggi = localStorage.getItem("messaggi");

    messaggi.forEach(messaggio => {
        demo.innerHTML +=  messaggio ; 
    }
    )
}

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.length != 0){
        messaggiPre = localStorage.getItem("messaggi");
        stampaMessaggi();
    }
});