class Item{
    constructor(cosaDaFare, data){
        this.cosaDaFare = cosaDaFare;
        this.data = data;
    }
}

const formTodo = document.getElementById("formTodo");
const elListaItems = document.getElementById("elListaItems");

let items = [];

function aggiungiItem(){
    let cosa = formTodo.cosaItem.value;
    let data = formTodo.dataItem.value;

    let nuovoItem = new Item(cosa, data);

    items.push(nuovoItem);

    if(items.length != 0){
        stampaItems();
    }

}

function stampaItems(){
    elListaItems.innerHTML = "";

    items.forEach(item =>{
        elListaItems.innerHTML += "<li>" + item.cosaDaFare + " - " + item.data + "</li>";
    })
}

formTodo.addEventListener("submit", function(event){
    event.preventDefault();
    aggiungiItem();
});

