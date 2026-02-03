let btn = document.getElementById("btn");
let elParolaDaCercare = document.getElementById("parolaDaCercare");

const PAROLA_SEGRETA = "ELEFANTE";
let TENTATIVI_MAX = 10;

let parolaMostrata = [];

function inizializzaGioco(){
    parolaMostrata = PAROLA_SEGRETA.split("").fill("_");
    elParolaDaCercare.innerHTML = parolaMostrata.join("");
    console.log(parolaMostrata);  
}

/**
 * @param {String} lettera 
 */
function controllaLettera(lettera){
    lettera = lettera.toUpperCase();

    let letteraTrovata = false;

    for(let i = 0 ; i < PAROLA_SEGRETA.length; i++){
        if(PAROLA_SEGRETA[i] === lettera){
            parolaMostrata[i] = lettera;
            letteraTrovata = true;
            elParolaDaCercare.innerHTML = parolaMostrata.join("");
            console.log("trovata");
            console.log(parolaMostrata);
        }
    }

    if(!letteraTrovata){
        TENTATIVI_MAX--;
        console.log(TENTATIVI_MAX);
        
    }
}

inizializzaGioco();

btn.addEventListener("click", function(){
    let lettera = document.getElementById("elLettera").value;
    controllaLettera(lettera);
})

