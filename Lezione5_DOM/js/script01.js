//QuerySelector e QuerySelectorAll sono più potenti dei meto getElementBy...

//QuerySelector(CssSyntax)

let liUno = document.querySelector("#uno");
// let liUno = document.querySelector(".red#uno");
// let liUno = document.querySelector("#coseDaComprare.red#uno");

//Recupero l'h3 ma in presenza di altri h3 recuperarà solo la prima occorrenza
let h3 = document.querySelector("h3");

//Sta recuperando il primo li (Pasta)
let li = document.querySelector("li");

let body = document.querySelector("body");
body.style.backgroundColor = "lightgreen";

let ul = document.querySelector("ul");
console.log(ul.children[0]);
console.log(typeof ul);

//QuerySelectorAll
//Questo sotto recupera tutti gli li della pagina
let lis = document.querySelectorAll("li"); //Mi restituisce una lista di nodi (NodeList, parente degli array)
console.log(lis);
console.log(typeof lis);

[...lis].forEach(li => console.log(li.textContent));

let lisLibri = document.querySelectorAll("#biblioteca li");

console.log("QUESTI SONO SOLO I LIBRI");
lisLibri.forEach(titolo => console.log(titolo.textContent));

//VOGLIO RECUPERARE SOLO GLI ELEMENTI LI DI COLORE BLUE
let lisBlue = document.querySelectorAll("li.blue");
console.log(lisBlue);

//textContent e innerHTML (sono delle proprietà)
//Il primo scrive e legge solo testo, il secondo legge e scrive testo e html
let liCosaUno = document.querySelector("li#uno");

let testo = liCosaUno.textContent; //leggo
liCosaUno.textContent = "Spaghetti"; //scrivo
console.log(testo); 

let biblioteca = document.querySelector("#biblioteca");
console.log(biblioteca.textContent);
console.log(biblioteca.innerHTML);
// Voglio sostituire tutti i miei li con un h1
// biblioteca.textContent = "<h1>Qui ci vanno i libri</h1>";
// biblioteca.innerHTML = "<h1>Qui ci vanno i libri</h1>";

let libroUno = document.querySelectorAll("#biblioteca li")[0];
console.log(libroUno);
console.log(libroUno.innerHTML);
console.log(libroUno.textContent);

let libroUno2 = document.querySelector("#biblioteca").firstElementChild;
console.log(libroUno2);

//Prop children del metodo querySelector. Att: restituisce una HTMLCollection
let cose = document.querySelector("#coseDaComprare").children;
console.log(cose);
//Le collection non sono array né Nodelist. Quindi va applicato l'operatore spread
[...cose].forEach(cosa => console.log(cosa.textContent))

