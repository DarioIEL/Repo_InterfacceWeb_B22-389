//VERSIONE prima di ES2015 (NOTAZIONE FUNZIONE COSTRUTTORE)
function Moto(marca, modello, cilindrata, targa){
    this.marca = marca;
    this.modello = modello;
    this.cilindrata = cilindrata;
    this.targa = targa;

    this.presentaMoto = function(){
        return `Motocicletta: ${this.marca} ${this.modello}, ${this.cilindrata}cc`;
    }
}

//Creo una motocicletta. Ogni moto è un' ISTANZA della funzione Moto
let moto1 = new Moto("Kawasaki", "Z750", 750, "BA7891");
let moto2 = new Moto("BMW", "K100", 1000, "NA951B");
let moto3 = new Moto("Ducati", "848", 850, "BT210C");

console.log(moto2.presentaMoto());


//DOPO la versione ES2015 si utilizzano le classi
//La classe rappresenta il modello, il "prototipo", il blueprint. La classe definisce il tipo di dato
class Automobile{
    //constructor è il METODO COSTRUTTORE. Ogni volta che creo un'istanza della classe Automobile viene invocato questo costruttore
    constructor(marca, modello, cilindrata){
        //Proprietà
        this.marca = marca;
        this.modello = modello,
        this.cilindrata = cilindrata;
        this.accesa = false;
        this.velocita = 0;
        this.numGiri = 0;
        this.marcia = 0;
    }

    //metodi
    presentaAuto(){
        return `Automobile: ${this.marca} ${this.modello}, ${this.cilindrata}cc`
    }

    accendi(){
        if(!this.accesa){
            this.accesa = true
        }
    }

    spegni(){
        if(this.accesa){
            this.accesa = false;
        }
    }

    guida(numGiri, marcia){
        if(this.accesa && this.velocita == 0){
            this.numGiri = numGiri;
            this.marcia = marcia;
            this.velocita = this.numGiri * this.marcia / 100;
            return this.velocita + " m/s"
        }else{
            return "La macchina non è ancora accesa, la devi prima accendere";
        }
    }


}

//Creo degli oggetti di tipo Automobile
let auto1 = new Automobile("Fiat", "Panda", 1200);
let auto2 = new Automobile("Audi", "Q2", 1400);
let auto3 = new Automobile("Audi", "Q2", 1400);

auto2.accendi();
console.log( auto2.guida(2000, 1) );


let parcoMacchine = [
    auto1,
    auto2,
    new Automobile("Peugeot", "2008", 1200),
    new Automobile("Toyota", "Corolla", 1400)
];

//Voglio descrivere tutte le auto nel parcoMacchine
// parcoMacchine.forEach(auto => {
//     console.log(auto.presentaAuto());
// })

for(let i = 0; i < parcoMacchine.length; i++){
    console.log(parcoMacchine[i].presentaAuto());
}

//ATT: il form che recupero dallo HTML è un Object e come tale ha delle prop e dei metodi. I "name" dei singoli campi input sono le proprietà. -> Se voglio richiamare il value di un campo: mioForm.name.value
let formAuto = document.getElementById("formAuto");
console.log(formAuto);
console.log(typeof formAuto);

function aggiungiAuto(){
    //                  Questa .marca è il name del campo input
    let marca = formAuto.marca.value;
    let modello = formAuto.modello.value;
    let cilindr = formAuto.cilindrata.value;
    
    let nuovaAuto = new Automobile(marca, modello, cilindr);

    parcoMacchine.push(nuovaAuto);

    console.log(parcoMacchine);
    
    //Questo metodo serve a non ricarica la pagina nel momento in cui viene inviato il form
    event.preventDefault();
    
    formAuto.reset();
}

formAuto.addEventListener("submit", function(event){
    aggiungiAuto();
    stampaAuto(); //stampo tutte le auto ogni volta che ne aggiungo una
});

let elParcMacch = document.getElementById("parcoMacchine");

function stampaAuto(){
    elParcMacch.innerHTML = ""; //Questo pulisce il div
    parcoMacchine.forEach(auto =>{
        elParcMacch.innerHTML += `<li> ${auto.presentaAuto()} </li>`;
    })
}

// stampaAuto(); //Questa stampa le auto appena ricarico la pagina
document.addEventListener("DOMContentLoaded", stampaAuto);

