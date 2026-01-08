let libri = [
    "Ubik",
    "Dubliners",
    "Il vagabondo delle stelle",
    "La versione di Barney",
    "Il signore degli anelli",
    "La città invincibile"
];

let autori =  [
    "Philip K. Dick",
    "James Joyce",
    "London",
    "Richler",
    "Tolkien",
    "O'Neill"
]

let libriAutori = [];

for(let i = 0; i < libri.length; i++){
    // libriAutori.push(libri[i] + " - " + autori[i]);
    libriAutori[i] = libri[i] + " - " + autori[i];

}

console.log(libriAutori);


libriAutori.sort();


// document.write("<li>" + libri[0] + "</li>")
// document.write("<li>" + libri[1] + "</li>")
// document.write("<li>" + libri[2] + "</li>")

for(let i = 0 ; i < libriAutori.length; i++){
    document.write("<li>" + libriAutori[i] + "</li>");
}