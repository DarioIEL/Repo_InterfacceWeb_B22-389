function calcolatrice(operazione, num1, num2){
    let risultato = 0;

    switch(operazione){

        case "+":
            risultato = num1 + num2;
        break
        case "-":
            risultato = num1 - num2;
        break
        case "*":
            risultato = num1 * num2;
        break;
        case "/":
            risultato = num1 / num2;
        break;
        default:
            risultato = 0;
        break;
    }

    return risultato;
}

let risultato = calcolatrice("*", 54, 8);
// console.log("IL risultato dell'operazione è " + risultato);
//backtick ` 
console.log(`Il risultato dell operazione è ${risultato}`);

let risultato2 =  calcolatrice("/", 320, 8);
console.log(`Il risultato della divisione è ${risultato2}`);


//RECUPERO DEI PEZZI DI HTML. TUTTO CIò CHE è "DINAMICO" VA RECUPERATO DENTRO LE FUNZIONI
function eseguiOperazioni(){
    //recupero gli elementi attraverso il loro id
    let num1 = Number( document.getElementById("num1").value );
    console.log(num1);
    
    let num2 = Number( document.getElementById("num2").value );
    console.log(num2);
    
    let operazione = document.getElementById("operazione").value;
    console.log(operazione);

    let risultato = calcolatrice(operazione, num1, num2);
    let divRisultato = document.getElementById("divRisultato");
    divRisultato.innerHTML = `Il risultato dell'operazione ${operazione} è : ${risultato}`;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", eseguiOperazioni);
