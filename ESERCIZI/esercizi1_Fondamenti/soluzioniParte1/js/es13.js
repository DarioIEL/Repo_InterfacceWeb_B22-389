//stampo i 100 numeri

let mult3 = 0;
let mult5 = 0;
let mult15 = 0;

for(let i = 1; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " BANGARANG");
        //mult15++; //mult15 = mult15 + 1 
        mult15 += 1;

    }else if(i % 3 == 0){
        console.log(i + " ZOOM");
        mult3++;

    }else if(i % 5 == 0){
        console.log(i + " BOOM");
        mult5++;
    }else{   
        console.log(i);
    }
}

console.log(`Multipli di 3 :${mult3}`);
console.log(`Multipli di 5 :${mult5}`);
console.log(`Multipli di 15 :${mult15}`);
