let automobile = {
    marca: "",
    modello: "",
    cilindrata: 0,
    marcia: 0,
    velocita: 0,
    num_giri: 0,
    acceso: false,

    creaAuto: function(marca, modello, cilindrata){
        //Il this fa riferimento all'oggettoe alla sua proprietà. Quando gli passo la marca al metodo questo valore diventa il valore della proprietà marca
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata
        return `Hai appena creato la seguente automobile: ${this.marca} ${this.modello}, ${this.cilindrata} cc`;
    }
}

let descrizioneAuto = automobile.creaAuto("Fiat", "Panda", 1200);

//Posso al massimo cambiare delle proprietà
automobile.marca = "Audi";

console.log(descrizioneAuto);

console.log(automobile.marca);
