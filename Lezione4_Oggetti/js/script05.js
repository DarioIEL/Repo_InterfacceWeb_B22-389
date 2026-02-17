const elencoLibri = document.getElementById("elencoLibri");
const formLibri = document.getElementById("formLibri");
const feed = document.getElementById("feed");

class Libro {
    constructor(titolo, autore, anno, genere, isbn) {
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
        this.genere = genere;
        this.isbn = isbn;
    }
}

let biblioteca = [];

function mostraLibri() {
    elencoLibri.innerHTML = "";
    // Questa mostra i libri appena accedo alla pagina
    biblioteca.forEach(libro => {
        elencoLibri.innerHTML += `<li>${libro.titolo} ${libro.autore} ${libro.isbn} </li>`;
    })
}


function aggiungiLibro() {
    //recupera tutti gli elementi del form e crea un Libro
    const titolo = formLibri.titolo.value;
    const autore = formLibri.autore.value;
    const anno = formLibri.anno.value;
    const genere = formLibri.genere.value;
    const isbn = formLibri.isbn.value;

    if (controllaDoppio(isbn) ) {
        feed.textContent = "Libro già esistente";
        return

    } else if (titolo.trim() != "" && autore.trim() != "" && anno != 0 && genere.trim() != "" && isbn.trim() != "") {
        let libro = new Libro(titolo, autore, anno, genere, isbn);
        biblioteca.push(libro);
        formLibri.reset();
    }

}

function controllaDoppio(codiceIsbn){
    for(let i = 0 ; i < biblioteca.length; i++){
        if(biblioteca[i].isbn === codiceIsbn){
            return true;
        }else{
            return false;
        }
    }
}


formLibri.addEventListener("submit", function (event) {
    console.log("Ciao");
    event.preventDefault();
    aggiungiLibro();
    mostraLibri();
});

document.addEventListener("DOMContentLoaded", mostraLibri);

