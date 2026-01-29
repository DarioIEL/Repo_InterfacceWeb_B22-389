let num1 = 90;
let num2 = 101;

let distanza1 = Math.abs( num1-100 );
let distanza2 = Math.abs( num2-100 );

// if(distanza1 < 0){
//     distanza1 = -distanza1;
// }

// if(distanza2 < 0){
//     distanza2 = -distanza2;
// }

console.log(distanza1);
console.log(distanza2);



if(num1 === num2){
    console.log("I numeri sono uguali");
}else if(distanza1 < distanza2){
    console.log(`Il num più vicino al cento è ${num1}`);
}else if(distanza2 < distanza1){
    console.log(`Il num più vicino al cento è ${num2}`);
}else{
    console.log("I numeri si trovano alla stessa distanza");
    
}