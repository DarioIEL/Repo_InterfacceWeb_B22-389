let btn = document.getElementById("btn");

function estrai() {
    //raccolgo la quantità di numeri da estrarre dal campo input
    let quant = Number(document.getElementById("quant").value);
    console.log(`vuoi estrarre ${quant} numeri`);

    let numeriEstratti = [];
    let giri = 0;
    if (quant <= 90 && quant >= 1) {

        for (let i = 1; i <= quant; i++) {
            let numCasuale = Math.ceil(Math.random() * 90);

            // if(numeriEstratti.indexOf(numCasuale) == -1){
            //     numeriEstratti.push(numCasuale);
            // }else{
            //     i--;
            // }


            if (numeriEstratti.includes(numCasuale)) {
                i--;
            } else {
                numeriEstratti.push(numCasuale);
            }

            // FARE A MANO il metodo INCLUDES

            giri++;
        }
        console.log(numeriEstratti);
        console.log(`Ho impiegato ${giri} giri per estrarre i numeri`);
    } else {
        console.log("Inserisci un numero tra 1 e 90");
    }
}

btn.addEventListener("click", estrai)

