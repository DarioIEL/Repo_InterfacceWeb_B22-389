//Recupero i data-autore
let libri = document.querySelectorAll("#biblioteca li");

let autori = [];

libri.forEach(libro => {
    let autore = libro.getAttribute("data-autore");
    autori.push(autore);
})

console.log(autori);
