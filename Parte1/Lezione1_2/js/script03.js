//Metodi per le stringhe
//LE stringhe sono oggetti 0-based
//ATT: tra i caratteri rientra anche lo spazio " "

let txt = "Sono le ore 18 e 15";

//prop length
console.log("La stringa è lunga: " + txt.length + " caratteri" );

//metodi per la ricerca
let search1 = txt.indexOf("ore"); //questo metodo restituisce l'indice della occorrenza
console.log("La parola ore si trova all'indice " + search1);

let search2 = txt.indexOf("S");
console.log("La lettera S è in posizione " + search2);

let search3 = txt.indexOf("Dario");
console.log(search3); //-1

let search4 = txt.charAt("5"); //l
console.log("In posizione 5 si trova il carattere " + search4);

//Metodi per il taglio 
let subs = txt.substring(5, 10);
console.log(subs);

let slic = txt.slice(5,10);
console.log(slic);

//Metodi per sostituzione
let stringa2 = "In classe ci sono 10 studenti";
console.log( stringa2.replace("studenti", "docenti") );


//Metodi vari
console.log(stringa2.toUpperCase());

//Metodi per la scomposizione
let stringa3 = "Ciao";
let stringa3InArray = stringa3.split(""); //["C", "i", "a", "o"]
console.log(stringa3InArray);

let strArr = ["D","A", "R","I", "O"];
let ArrString = strArr.join("");
console.log(ArrString);

//Esempio
let mioFile = "documento.txt";
//Voglio estrarre solo l'estensione del file
let separaFile = mioFile.split("."); //["documento", "txt"]
console.log(separaFile);
let estensione = separaFile[separaFile.length - 1];
console.log("L'estensione del file è " + estensione);






