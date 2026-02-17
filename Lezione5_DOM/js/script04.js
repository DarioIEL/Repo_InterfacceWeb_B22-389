let ul = document.querySelector("#listaCose");

console.log(ul.children); //Genera una HTML Collection, non è della famiglia degli array

for(let i = 0; i < ul.children.length; i++){
    console.log(ul.children[i].textContent); //Con textContent leggo solo i testi NON leggo l'HTML
}

let lis = document.querySelectorAll("#listaCose li"); //Genera una NodeList, fa parte della famiglia degli array

console.log(lis);

lis.forEach(li =>{
    console.log(li.textContent);
})

//ESEMPIO: fornire un link al secondo li "Appuntamento Dentista"

let liDent = document.querySelector("#listaCose").children[1];
console.log(liDent);

// let aDent = liDent.firstChild;
let aDent = liDent.querySelector("a");
// let aDent = liDent.children[0];

console.log(aDent);

// aDent.href = "https://www.immaginazioneelavoro.it";
aDent.setAttribute("href",  "https://www.immaginazioneelavoro.it" );
aDent.setAttribute("target", "_blank");

//clicco sul link e contemporaneamente vengo portato nella pagina e in console scrivo il valore della prop href

aDent.addEventListener("click", function(){
    console.log("Sei stato trasferito su " + this.getAttribute("href"));
})

//Senza istanziare neppure una variabile
document.querySelector("#listaCose").lastElementChild.addEventListener("click", function(event){
    console.log(event.target);
    // this.setAttribute("style", "font-size: 50px");
    event.target.setAttribute("style", "font-size: 50px");
})

document.querySelector("#btn").addEventListener("click", function(){
    document.querySelectorAll("#listaAlbum li").forEach(li => {
        // li.classList.add("purple");
        
        // li.classList.toggle("purple");
        
        if(li.classList.contains("purple")){
            li.classList.remove("purple");
        }else{
            li.classList.add("purple");
        }
    })
})