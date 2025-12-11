//ATT: le classi definiscono i tipi complessi 

class Biblioteca{
    
    constructor(nome, indirizzo){
        this.nome = nome;
        this.indirizzo = indirizzo;
        this.libri = [];
    }


    aggiungiLibro(libro){
        this.libri.push(libro);
    }

    presentaBiblioteca(){
        return `${this.nome} - ${this.indirizzo}`;
    }

    get totaleLibri() {
        return this.libri.length;
    }
}

class Libro{
    constructor(titolo, autore, anno){
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
    }

    toString(){
        return `${this.titolo} - ${this.autore} - ${this.anno}`;
    }
}

let biblioteca = new Biblioteca("Civica", "C.so Re Umberto 4");

biblioteca.aggiungiLibro(new Libro("Il nome della rosa", "Umberto Eco", 1980));
biblioteca.aggiungiLibro(new Libro("1984", "George Orwell", 1948));
biblioteca.aggiungiLibro(new Libro("Hp La pietra filosofale", "J.K.Rowling", 1996));

console.log(biblioteca.presentaBiblioteca() + ". Libri presenti " + biblioteca.totaleLibri);

console.log("Titoli: ");

// biblioteca.libri.forEach(libro => {
//     console.log(libro.toString());
// });

for(let i = 0; i < biblioteca.libri.length; i++){
    console.log(biblioteca.libri[i].toString());
}



class Forma{
    constructor(colore){
        this.colore = colore;
        
    }

    calcolaArea(){
        throw new Error("Implementare metodo per il calcolo dell'area");
    }
}

class Rettangolo extends Forma{
    constructor(colore, larghezza, altezza){
        super(colore);
        this.larghezza = larghezza;
        this.altezza = altezza;
    }


    toString(){
        return `Rettangolo colore ${this.colore}, con area ${this.calcolaArea()} mq`;
    }
}

let rettangolo = new Rettangolo("verde", 10, 4);
console.log(rettangolo.calcolaArea());
console.log(rettangolo.toString());
