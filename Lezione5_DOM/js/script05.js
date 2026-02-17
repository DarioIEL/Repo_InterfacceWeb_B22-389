
// let links = document.querySelectorAll(".nav-link");

document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click", function(event){
        event.preventDefault();
        
        //Prima nascondo tutto
        document.querySelectorAll("main section").forEach(section => {
            section.style.display = "none";
        })

        //Poi mostro la singola section
        let targetID = link.getAttribute("href"); //raccolgo il valore dell'attributo href del link sul quale clicco
        document.querySelector(targetID).setAttribute("style", "display:block");        
    }
    )
})

//Funzione all'avvio
document.querySelectorAll("main section").forEach(section =>{
    section.getAttribute("id") !== "home"? section.setAttribute("style", "display: none") : section.setAttribute("style", "display:block")
})