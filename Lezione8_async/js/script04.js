const demo = document.querySelector("#demo");
const btnDoc = document.querySelector("#btnDoc");

// function getDocenti(){
//     fetch("http://localhost:3000/docenti")
//     .then(data => {
//         return data.json();
//     })
//     .then(response =>{
//         console.log(response);
//     })
// }

//=============== ASYN e AWAIT senza Try&catch ===============
async function getDocenti() {
        const response = await fetch("http://localhost:3000/docenti");       
        const docenti = (response).json(); //restituisce la promise risolta conme oggetto json()
        return docenti;
}

//ASYNC e AWAIT con TRy e Catch
// async function getDocenti() {

//     try {
//         const response = await fetch("http://localhost:3000/docent");

//         if(!response.ok){
//             location.href = "pagenotfound.html";
//             throw new Error(`Errore HTTP: ${response.status}`);
//         }
        
//         const docenti = (response).json(); //restituisce la promise risolta conme oggetto json()
//         return docenti;
        
//     } catch (error) {
//         console.log("E' stato generato un errore", error);
//         throw error
//     }

// }

btnDoc.addEventListener("click", function(){
    getDocenti().then(docenti =>{
        console.log(docenti);
        stampaDocenti(docenti);
    })

   
});

/**
 * 
 * @param {Object[]} docenti 
 */
function stampaDocenti(docenti){
    docenti.forEach(doc =>{
        demo.innerHTML += `<li> ${doc.nome} ${doc.cognome} - corso: ${doc.corso}`;
    }
    )
}


const btnAll = document.querySelector("#btnAll");

//A livello sequenziale non è granché perché vengono chiamate una dopo l'altra
// async function getDocStud() {
//     const docenti = await fetch("http://localhost:3000/docenti").then(doc => doc.json());
//     const studenti = await fetch("http://localhost:3000/studenti").then(stud => stud.json());

//     return [docenti, studenti];
// }


//Situazione ottimale e più
async function getDocStud() {
    //con Promise.all() riesco a far partire più richieste in parallelo
    const [docentiResponse, studentiResponse] = await Promise.all([
        fetch("http://localhost:3000/docenti"),
        fetch("http://localhost:3000/studenti")
    ]);

    const docenti = await docentiResponse.json();
    const studenti = await studentiResponse.json();

    return [docenti, studenti];
}

btnAll.addEventListener("click", function(){
    getDocStud().then(([docenti, studenti] )=>{
        console.log(docenti);
        console.log(studenti);
        
    });

});


