let riga = document.querySelector("#riga");

class Film{
    /**
     * 
     * @param {String} titolo 
     * @param {String} locandina 
     * @param {String} regista 
     * @param {String[]} attori 
     */
    constructor(titolo, locandina, regista, attori){
        this.titolo = titolo;
        this.locandina = locandina;
        this.regista = regista;
        this.attori = attori;
    }
}

let films = [
    new Film("The Shining", "the_shining.jpg", "Stanley Kubrick", ["Jack Nicholson", "Shelley Duvall"] ),
    new Film("Fight Club", "fight_club.jpg", "David Fincher", ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"] ),
    new Film("Io Sono Leggenda", "io_sono_leggenda.jpg", "Francis Lawrence", ["Will Smith", "Alice Braga"] ),
    new Film("Mad Max", "mad_max.jpg", "George Miller", ["Mel Gibson", "Tina Turner"] ),
    new Film("Pulp Fiction", "pulp_fiction.jpg", "Quentin Tarantino", ["John Travolta", "Uma Thurman"] ),
    new Film("Il signore degli anelli", "signore_degli_anelli.jpg", "Peter Jackson", ["Elijah Wood", "Ian Mckellen", "Liv Tayler", "Viggo Mortensen"] ),
    new Film("Sinners", "sinners.jpg", "Ryan Coogler", ["Hailee Steinfield", "Michael B. Jordan"] ),
    new Film("Inception", "inception.jpg", "Christopher Nolan", ["Leonardo di Caprio", "Elliot Page", "Tom Hardy"] ),
];

/**
 * @param {Film} film 
 */
function creaCard(film){
    // let card = `<div class="col-4">
    //                 <div class="card">
    //                      <img class="card-img-top" src=./img/${film.locandina} alt="Title" />
    //                     <div class="card-body">
    //                         <h3 class="card-title">${film.titolo}</h3>
    //                         <p class="card-text">Regista: ${film.regista}</p>
    //                         <p class="card-text">Attori: ${film.attori}</p>
    //                         <button class ="btn btn-primary"> Seleziona </button>
    //                     </div>
    //                 </div>
    //             </div>`;

    let divCard = document.createElement("div");
    divCard.setAttribute("class", "col-4");

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", `./img/${film.locandina}`);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML = `<h3 class='card-title'> ${film.titolo} </h3>`;
    cardBody.innerHTML += `<p class='card-text'>Regista: ${film.regista} </p>`;
    cardBody.innerHTML += `<p class='card-text'>Attori: ${film.attori} </p>`;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Seleziona";

    btn.addEventListener("click", function(){
        // card.setAttribute("class", "bg-success");
        // card.classList.add("bg-success");
        card.classList.toggle("bg-success");
    })

    cardBody.appendChild(btn);
    card.appendChild(img);
    card.appendChild(cardBody);
    divCard.appendChild(card);

    return divCard;
}

function mostraFilm(){
    films.forEach(film =>{
        // riga.innerHTML += creaCard(film);
        riga.appendChild(creaCard(film));
    })
}

mostraFilm();