class Viaggio{
    constructor({id, destinazione, prezzo, image, partenza}){
        this.id = id;
        this.destinazione = destinazione;
        this.prezzo = prezzo;
        this.partenza = partenza;
        this.image = image;
    }

    getDescrizione(){
        return `${this.titolo} - ${this.prezzo} €`;
    }

    isFuturo(){
        const oggi = new Date();
        return this.partenza > oggi;
    }
}

export default Viaggio;