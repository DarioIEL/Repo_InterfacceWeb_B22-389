// Crea una classe "Azienda" avente nome e settore (metodi da creare: stampaListaDipendenti(), toString()). La classe azienda dovrà avere dei dipendenti, oggetti di tipo Dipendente (nome, cognome, matricola, stipendio, calcolStipendio(), toString())
class Azienda{
    /**
     * 
     * @param {String} nome 
     * @param {String} settore 
     * @param {Dipendente[]} dipendenti 
     */
    constructor(nome, settore, dipendenti){
        this.nome = nome;
        this.settore = settore;
        this.dipendenti = dipendenti;
    }

    stampaListaDipendenti(){
        let listaDipendenti = "";
        this.dipendenti.forEach(dipendente =>{
            listaDipendenti += dipendente.toString() + "\n";
        })
        return listaDipendenti
    }

    toString(){
        console.log(`=== ${this.nome} dal 1989 leader in ${this.settore} ===`);
        console.log("--- I nostri dipendenti ---");
        console.log(this.stampaListaDipendenti());
    }
}

class Dipendente{
    /**
     * 
     * @param {String} nome 
     * @param {String} cognome 
     * @param {Number} matricola 
     * @param {Number} stipendio 
     */
    constructor(nome, cognome, matricola, ruolo){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.ruolo = ruolo;
        this.stipendioBase = 1200;
    }

    calcolaStipendio(){
        let stipendioFinale = 0;

        switch(this.ruolo){
            case "Amministratore":
                stipendioFinale = this.stipendioBase * 5;
            break;
            case "Consulente":
                stipendioFinale = this.stipendioBase * 2;
            break;
            case "Sviluppatore Full Time":
                stipendioFinale = this.stipendioBase * 1.5;
            break;
            default:
                stipendioFinale = this.stipendioBase;
            break;
        }

        return stipendioFinale;
    }

    toString(){
        return `${this.nome} ${this.cognome} - ruolo: ${this.ruolo} - Stipendio: ${this.calcolaStipendio()}`;
    }
}

//UTILIZZO LE CLASSI
const dipendenti = [
    new Dipendente("Anna", "Bianchi", 1, "Amministratore"),
    new Dipendente("Paolo", "Verdi", 2, "Amministratore"),
    new Dipendente("Luca", "Bianchi", 3, "Consulente"),
    new Dipendente("Emma", "Gialli", 4, "Sviluppatore Full Time"),
    new Dipendente("Laura", "Rossi", 5, "")
];

const azienda = new Azienda("PocheSolution SRL", "Informatica", dipendenti);

azienda.toString();
console.log(azienda.stampaListaDipendenti());
