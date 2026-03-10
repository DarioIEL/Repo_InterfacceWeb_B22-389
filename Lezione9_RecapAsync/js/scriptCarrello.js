const elencoCarrello = document.querySelector("#elencoCarrello");
const btnSvuota = document.querySelector("#btnSvuota");

function recuperaViaggiDaAcquistare(){
    if(localStorage.length != 0){
        for(let i = 0; i < localStorage.length; i++){

            elencoCarrello.innerHTML += creaItemList(localStorage.getItem(localStorage.key(i)))
        }
    }
}

function creaItemList(viaggio){
    let viaggioOBJ = JSON.parse(viaggio);

    const listItem = `<div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">${viaggioOBJ.destinazione} - ${viaggioOBJ.prezzo} €</a>`;

    return listItem;
}

document.addEventListener("DOMContentLoaded", recuperaViaggiDaAcquistare)


btnSvuota.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})