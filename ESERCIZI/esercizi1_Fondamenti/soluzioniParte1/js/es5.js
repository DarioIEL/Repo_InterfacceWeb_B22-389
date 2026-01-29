let nomeFile = "lezioni.pdf.tar.gz.zip2";

let parti = nomeFile.split(".");
console.log(parti);

let estensione = parti[parti.length - 1];
console.log(estensione);


let frase = "Ciao_come_stai_?";
let fraseSpezzata = frase.split("_"); //Array[String]
console.log(fraseSpezzata);
let fraseRicomposta = fraseSpezzata.join(" ");
console.log(fraseRicomposta);

 