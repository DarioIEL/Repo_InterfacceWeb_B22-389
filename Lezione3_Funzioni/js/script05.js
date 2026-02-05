
let btnInvia = document.getElementById("btnInvia");
let demo = document.getElementById("demo");
// let elNome = document.getElementById("nome");
// let elCognome  = document.getElementById("cognome");

/**
 * 
 * @param {String} nome 
 * @param {String} cognome 
 */
function gestisciInfo(nome, cognome){
    let userName = nome.toUpperCase() + cognome.toUpperCase();
    return userName;
}

function creaUtenza(){
      // let nome = elNome.value;
    // let cognome = elCognome.value;
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    
    if(nome.trim() != "" && cognome.trim() != ""){

        let userName = gestisciInfo(nome, cognome);
        
        demo.innerHTML = `Ciao ${nome} ${cognome}, abbiamo creato la tua utenza con il seguente username ${userName}`
        
        console.log(nome, cognome);
    }else{
        demo.innerHTML = "Mi spiace, non hai compilato bene i campi"
    }
}

btnInvia.addEventListener("click", creaUtenza)
