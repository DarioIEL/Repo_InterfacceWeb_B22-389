function saluta(nome){
    console.log(`Ciao ${nome} !!`);   
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let nomeUser = "Anna";
    saluta(nomeUser);
})

