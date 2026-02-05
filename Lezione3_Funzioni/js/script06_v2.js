
function aumentaContatore(){
    let contatore = 0;

    // function incrementa(){
    //     contatore++;
    //     return contatore;
    // }
    // return incrementa;

    return function(){
        contatore++;
        return contatore
    }


}

let counter = aumentaContatore();
// console.log(contatore);


console.log(counter());
console.log(counter());

