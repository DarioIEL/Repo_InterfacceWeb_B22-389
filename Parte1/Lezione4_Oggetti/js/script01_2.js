let auto = {
    marca: "",
    modello: "",
    cilindrata: 0,
    marcia: 0,
    velocita: 0,
    numGiri: 0,
    accesa: false,


    presentaAuto(marca, modello){
        this.marca = marca;
        this.modello = modello;

        return "Auto: " + this.marca + " " + this.modello;
    },

    accendiAuto(){
        if(this.accesa){
            this.accesa = false;
           return "Hai spento l'auto"; 
        }else{
            this.accesa = true;
            return "Hai acceso l'auto";
        }
    },

    cambiaMarcia(marcia){
        this.marcia = marcia;
        return "Sei alla marcia: " + this.marcia;
    },

    calcolaVelocita(numGiri){
        this.numGiri = numGiri;
        this.velocita = (this.marcia * 100) / this.numGiri;
        return "La tua vel attuale è : " +  this.velocita;
    }
}

// console.log(auto.presentaAuto("Fiat", "Panda"));
// console.log(auto.accendiAuto());
// auto.cambiaMarcia(3);
// console.log(auto.calcolaVelocita(2000));

function usaAuto(){
    let marca = document.getElementById("marca").value;
    let modello = document.getElementById("modello").value;
    let cilindrata = document.getElementById("cilindrata").value;
    let numGiri = document.getElementById("numGiri").value;
    let marcia = document.getElementById("marcia").value;

    let demo = document.getElementById("demo");

    demo.innerHTML = "<p>" + auto.accendiAuto() + "</p>";

    if(auto.accesa){
        demo.innerHTML += "<p>" + auto.presentaAuto(marca, modello) + "</p>";
        demo.innerHTML += "<p>" + auto.cambiaMarcia(marcia) + "</p>";
        demo.innerHTML += "<p>" + auto.calcolaVelocita(numGiri) + "</p>";
    }else{
        demo.innerHTML += "<p> Con l'auto spenta non posso calcolare nulla </p>"
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", usaAuto);