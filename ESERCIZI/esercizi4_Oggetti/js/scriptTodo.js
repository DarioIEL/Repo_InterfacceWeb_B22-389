class Item{
    constructor(cosaDaFare, data){
        this.cosaDaFare = cosaDaFare;
        this.data = data;
    }
}

const formTodo = document.getElementById("formTodo");
const elListaItems = document.getElementById("elListaItems");
const feed = document.getElementById("feed");


let items = [];

function aggiungiItem(){
    let cosa = formTodo.cosaItem.value;
    let data = formTodo.dataItem.value;

    if(!cosa.trim() || !data){
        alert("Compila tutti i campi");
        return;
    }

    //Gestione Duplicati
    //il metodo find restituisce sempre un oggetto
    let dataDuplicata = items.find(item => item.data == data);
    if(dataDuplicata){
        feed.innerHTML = "Attenzione, hai già un'altra cosa da fare in quella data";

        setTimeout(() => {
            feed.innerHTML = "";
        }, 2000);
    }
    

    let nuovoItem = new Item(cosa, data);

    items.push(nuovoItem);

    if(items.length != 0){
        items = ordinaTODO();
        stampaItems();
    }

}

function stampaItems(){
    elListaItems.innerHTML = "";

    items.forEach(item =>{
        elListaItems.innerHTML += "<li>" + item.cosaDaFare + " - " + formattaData(item.data) + " <button>X</button> </li>";
    })
}

function formattaData(dateString){
    let data = new Date(dateString);
    let giorno = data.getDate();
    let mese = data.getMonth() + 1;
    let anno = data.getFullYear();

    let dataFinale = giorno + "/" + mese + "/" + anno;

    return dataFinale;
}


function ordinaTODO(){
    return [...items].sort( (i,f) => new Date(i.data) - new Date(f.data) );
}

formTodo.addEventListener("submit", function(event){
    event.preventDefault();
    aggiungiItem();
});

