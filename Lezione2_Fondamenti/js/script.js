// Voglio iniettare delle stringhe nella porzione di html div#demo

let saluto = "Ciao ragazzi del corso di interfacce web";

// 1. prendo il tag html p#demo atttraverso il metodo getElementByID()
let demo = document.getElementById("demo");

//2. voglio iniettare dentro demo il saluto attraverso la proprietà innerHTML (legge e scrivere html e testo)
demo.innerHTML = "<h3>" + saluto + "</h3>";


// Faccio la stessa cosa con div#feed
let feed = document.getElementById("feed");

let nomiStudenti = "Giacomo, Lamyaa, Elma, Federico, Emeli, Fabio";

// textContent legge e scrive solo testo
// feed.textContent = "<h3> Gli studenti del corso sono: " + nomiStudenti + " <h3>";
feed.textContent = `<h3> Gli studenti del corso sono: ${nomiStudenti}`;



//Voglio iniettare un'immagine all'interno del div
let image = document.getElementById("image");

let percorso = "./img/torinoMole.jpeg";


image.innerHTML = `<img src = '${percorso}' /> `;