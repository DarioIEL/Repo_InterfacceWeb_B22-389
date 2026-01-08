/**
 * ATTENZIONE: i jsDoc non forniscono i tipi ma solo ed esclusivamente un suggerimento.
 * @param {String} materia 
 * @param {Number} ore 
 */
function studia(materia, ore){
    let resoconto = "Oggi ho studiato " + materia + " per " + ore + " ore";
    console.log(resoconto);
}

studia("matematica", 3);
studia("informatica", 2);
studia("filosofia", 4);
studia("javascript", 9);

function studia2(){
    let materia = "Italiano";
    let ore = 5;
    console.log("Oggi ho studiato " + materia + " per " + ore + " ore");
}

studia2();
studia2();
studia2();


function indovinaNumero(numeroFortunato){
    console.log("Hai scelto di giocare con il numero " + numeroFortunato);
    
    if(numeroFortunato == 5){
        // console.log("Bravo, hai indovinato il numero");
        return "Bravo, hai indovinato il numero";
    }else{
        // console.log("Mi spiace, non hai indovinato il numero");
        return "Mi spiace, non hai indovinato il numero";
    }
}

function acquisisciNumero(){
    let feed = document.getElementById("feed");
    let numero = document.getElementById("numero").value;
    feed.innerHTML = indovinaNumero(numero);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", acquisisciNumero);
