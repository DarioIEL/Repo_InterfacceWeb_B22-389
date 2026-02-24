const messaggio = document.querySelector("#messaggio");
const feed = document.querySelector("#feed");
const btn = document.querySelector("#btn");
const btnDelCrono = document.querySelector("#delCrono");


let messaggi = []
//Questa funzione prende il messaggio, lo inserisce in un array, lo trasforma in JSON, lo salva nella Local Storage
function registraMSG(){

    let txtMSG = messaggio.value;

    messaggi.push(txtMSG);

    localStorage.setItem("messaggi", trasformaJSON(messaggi));

    messaggio.value = "";
}

/**
 * 
 * @param {String[]} arrMSGS 
 */
function trasformaJSON(arrMSGS){
    let arrJSON = JSON.stringify(arrMSGS);
    return arrJSON;
}

btn.addEventListener("click", function(){
    registraMSG();
    stampaMessaggi();
});


function recuperaMsgs(){
    if(localStorage.length != 0){

        let msgsJSON = localStorage.getItem("messaggi");
        console.log(msgsJSON);
        let msgsObj = JSON.parse(msgsJSON);
        messaggi = msgsObj;
        console.log(messaggi);
    }
}


function stampaMessaggi(){
    feed.innerHTML = "";
    messaggi.forEach(msg => {
        feed.innerHTML += `<li>${msg}</li>`;
    })
}
document.addEventListener("DOMContentLoaded", function(){
    recuperaMsgs();
    stampaMessaggi();
});

function rimuoviCronologia(){
    // localStorage.clear();
    localStorage.removeItem("messaggi");
    feed.innerHTML = "";
}

btnDelCrono.addEventListener("click", rimuoviCronologia);