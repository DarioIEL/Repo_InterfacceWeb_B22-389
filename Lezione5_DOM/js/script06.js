let listaCose = document.querySelector("#listaCose");

let cose = ["Andare al cinema", "Andare in palestra", "Fare la spesa"];

// listaCose.innerHTML = `<li> ${cose[0]} </li>`;
// listaCose.innerHTML += `<li> ${cose[1]} </li>`;
// listaCose.innerHTML += `<li> ${cose[2]} </li>`;


//STEP BY STEP
// //creo il tag, l'html element
// let liUno = document.createElement("li");
// //creo il textNode
// liUno.textContent = cose[0];
// //aggancio il nuovo liUno a listaCose
// listaCose.appendChild(liUno);

// liUno.addEventListener("click", function(){
//     console.log(this.textContent);
// })


cose.forEach(cosa=>{
    let li = document.createElement("li");
    li.textContent = cosa;
    
    let btn = document.createElement("button");
    btn.textContent = " X ";

    btn.addEventListener("click", function(){
        //parent.removeChild(figlio)
        listaCose.removeChild(li);
    })
    
    li.appendChild(btn);

    listaCose.appendChild(li);
    
    li.addEventListener("click", function(){
        console.log(this.textContent);
    })
})


