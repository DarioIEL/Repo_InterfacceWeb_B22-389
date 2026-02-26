
fetch("http://localhost:3000/studenti")
.then(data => {
    return data.json();
})
.then(response =>{
    console.log(response);
})


document.querySelector("#btn").addEventListener("click", caricaNuovoStudente);

function caricaNuovoStudente(){
    let nuovoStudente = {
        nome: "Dario",
        cognome: "Mennillo"
    }

    fetch("http://localhost:3000/studenti", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuovoStudente)
    })
    .then(data => {return data.json()})
    
}