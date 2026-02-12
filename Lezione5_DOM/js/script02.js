//getAttribute legge il valore di un attributo

let classeUno = document.querySelector("#uno").getAttribute("class")
console.log(classeUno); //red

//setAttribute - setta un attributo anche se non esiste. Se già esistente allora sostituisce...
//Cambio la classe all'ultima cosa
document.querySelector("#quattro").setAttribute("class", "red");
document.querySelector("h3").setAttribute("class", "blue");

let img = document.querySelector("#miaImg");
img.setAttribute("src", "https://www.visitpiemonte.com/core/storage/images/3586/TAGLIO_PIazza%20San%20Carlo%2C%20Torino_Credits%20Visit%20Piemonte-%20GettyImages.jpg")

img.setAttribute("style", "width: 200px")

img.setAttribute("alt", "veduta di Piazza San Carlo");

//Remove Attribute
img.removeAttribute("alt");

//Posso anche richiamare direttamente la proprietà ma non è una bella cosa
// img.src = "...";
// img.alt = "Testo alternativo"

//className e classList. Importanti perché mi permettono di manipolare il set di classi appartenenti ad un elemento

let h1 = document.querySelector("h1");
h1.classList.add("underLine");
h1.classList.add("red");

//voglio aggiungere underline a tutti gli elementi di classe blue
let blues = document.querySelectorAll(".blue");
blues.forEach(el => {
    el.classList.add("underLine");
})

//esistono tanti altri metodi: remove, toggle