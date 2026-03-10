import Viaggio from "./Viaggio.js";

const elListaViaggi = document.querySelector("#elListaViaggi");

async function fetchViaggi(){
    const response = await fetch("http://localhost:3000/viaggi"); //aspetta la risposta
    
    if(!response.ok){
        throw new Error("Errore nel caricamento dati");
    }

    const dati = await response.json(); //aspetta il parsing JSON
    const viaggi = dati.map(v => new Viaggio(v));

    // elListaViaggi.appendChild(creaCard(mieiViaggi[0]));
    viaggi.forEach(viaggio => {
        elListaViaggi.appendChild(creaCard(viaggio));
    });
}

/**
 * 
 * @param {Viaggio} viaggio 
 * @returns 
 */
function creaCard(viaggio){
    const col4 = document.createElement("div");
    col4.setAttribute("class", "col-4");

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", viaggio.image );
    
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML += `<h2> ${viaggio.destinazione} </h2>`;
    cardBody.innerHTML += `<h4> Prezzo: ${viaggio.prezzo} € </h4>`;
    cardBody.innerHTML += `<p> Partenza: ${viaggio.partenza} </h4>`;

    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Acquista";
    btn.addEventListener("click", function(){
        compraViaggio(viaggio);
    })

    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(btn);
    
    col4.appendChild(card);

    return col4;
}

/**
 * 
 * @param {Viaggio} viaggio 
 */
function compraViaggio(viaggio){
    console.log("...Stai acquistato il seguente viaggio ", viaggio);
    //OPZ 1. Posso salvare il viaggio nella localStorage
    let viaggioJSON = JSON.stringify(viaggio);
    localStorage.setItem("viaggio" + viaggio.id, viaggioJSON);

    //OPZ 2. Posso salvare il viaggio nel mio DB attraverso l'id
    
}

document.addEventListener("DOMContentLoaded", fetchViaggi);