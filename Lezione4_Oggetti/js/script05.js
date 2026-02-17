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

// Carica libri da localStorage
function caricaDaLocalStorage() {
    const datiSalvati = localStorage.getItem('biblioteca');
    if (datiSalvati) {
        biblioteca = JSON.parse(datiSalvati);
    }
}

// Salva libri in localStorage
function salvaInLocalStorage() {
    localStorage.setItem('biblioteca', JSON.stringify(biblioteca));
}

function mostraLibri() {
    elencoLibri.innerHTML = "";
    if (biblioteca.length === 0) {
        elencoLibri.innerHTML = "<li>Nessun libro in biblioteca</li>";
        return;
    }
    
    // Costruisce l'HTML una sola volta, più efficiente
    let html = "";
    biblioteca.forEach(libro => {
        html += `<li>${libro.titolo} - ${libro.autore} (${libro.anno}) | ISBN: ${libro.isbn}</li>`;
    });
    elencoLibri.innerHTML = html;
}

function mostraMessaggio(testo, tipo = 'errore') {
    feed.textContent = testo;
    feed.style.color = tipo === 'errore' ? 'red' : 'green';
    
    // Nasconde il messaggio dopo 3 secondi
    setTimeout(() => {
        feed.textContent = '';
    }, 3000);
}

function aggiungiLibro() {
    //recupera tutti gli elementi del form e crea un Libro
    const titolo = formLibri.titolo.value.trim();
    const autore = formLibri.autore.value.trim();
    const anno = formLibri.anno.value;
    const genere = formLibri.genere.value.trim();
    const isbn = formLibri.isbn.value.trim();

    // Validazione campi
    if (!titolo || !autore || !anno || !genere || !isbn) {
        mostraMessaggio("Compila tutti i campi!", 'errore');
        return;
    }

    // Controlla se il libro esiste già
    if (controllaDoppio(isbn)) {
        mostraMessaggio("Libro già esistente in biblioteca!", 'errore');
        return;
    }

    // Crea e aggiunge il libro
    let libro = new Libro(titolo, autore, anno, genere, isbn);
    biblioteca.push(libro);
    salvaInLocalStorage();
    formLibri.reset();
    mostraMessaggio("Libro aggiunto con successo!", 'successo');
}

// ERRORE CORRETTO: La funzione originale tornava false al primo elemento che non corrispondeva
// Non controllava tutti gli elementi della biblioteca
function controllaDoppio(codiceIsbn) {
    return biblioteca.some(libro => libro.isbn === codiceIsbn);
}

formLibri.addEventListener("submit", function (event) {
    event.preventDefault();
    aggiungiLibro();
    mostraLibri();
});

document.addEventListener("DOMContentLoaded", function() {
    caricaDaLocalStorage();
    mostraLibri();
});

