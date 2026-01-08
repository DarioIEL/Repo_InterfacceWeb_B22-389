//If statement
let num1 = Number(5);
let num2 = Number("5");
let condizione = num1 > num2;

if (num1 > num2) {
  //Questo blocco di codice viene eseguito solo se la condizione risulta essere true
  console.log(num1 + " è maggiore di " + num2);
} else if (num1 < num2) {
  console.log(num1 + " è minore di " + num2);
} else if (num1 === num2) {
  //ATT: il costrutto else raccoglio tutto ciò che è false non solo il contrario della condizione true
  console.log(num1 + " è uguale a " + num2);
} else {
  console.log("Mi spiace, non riesco a valutare i due numeri");

}

//Giochino online con i livelli
//per poter superare il livello devo avere un punteggio > 5 e un punteggioSkill > 5; Se uno dei due punteggi è sotto la soglia non passo il livello

let punti = 8;
let puntiSkill = 4;

if (punti > 5 && puntiSkill > 5) {
  console.log("Bravo, hai superato il livello. I tuoi punteggi sono:");
} else if (punti > 5 && puntiSkill <= 5) {
  console.log(
    "Mi spiace, non hai superato il livello a causa dei tuoi punti skill:"
  );
} else if (punti <= 5 && puntiSkill > 5) {
  console.log(
    "Mi spiace, non hai superato il livello a causa dei punti classici:"
  );
} else {
  console.log(
    "Mi dispiace non hai superato il livello perché hai fatto schifo su entrambi i fronti. I tuoi punteggi sono:"
  );
}
console.log("Punti: " + punti);
console.log("Punti skill: " + puntiSkill);

//Faccio la versione EAsy del gioco di prima, quindi con || logico
console.log("=== EASY MODE ===");

if (punti > 5 || puntiSkill > 5) {
  console.log("Bravo, hai superato il livello. I tuoi punteggi sono:");
} else {
  console.log(
    "Mi spiace, non hai superato il livello perché tutti i tuoi punteggi sono sotto la soglia"
  );
}

console.log("Punti: " + punti);
console.log("Punti skill: " + puntiSkill);


//Valuto direttamente un boolean

let presenza = false;

if (presenza) {
  console.log("Lo studente è presente");
} else {
  console.log("Lo studente è assente");
}

if (!presenza) {
  console.log("Lo studente è assente");
} else {
  console.log("Lo studente è presente");
}


//Club per programmatori maggiorenni e con invito
let etaUtente = 16;
let invito = true;
let accSocio = false;

console.log("=== CLUB CON INVITO ===");

//      True            True
if (etaUtente >= 18 && invito) {
  console.log("Benvenuto alla festa");
} else if (etaUtente < 18 && invito) {
  console.log("Non puoi entrare. Anche se hai un invito non hai l'età adatta");
} else if (etaUtente >= 18 && !invito) {
  console.log("Anche se sei maggiorenne non puoi entrare. Ti manca l'invito");
} else {
  console.log("Non puoi proprio entrare sia perché sei minorenne sia perché non hai un invito");
}

console.log("=== CON SOCIO ===");

if (etaUtente > 18 || invito || accSocio) {
  console.log("Benvenuto alla festa");
} else {
  console.log("Non puoi entrare. Non hai 18 anni, non sei invitato e non hai un socio");

}

console.log("=== INVITATO OPPURE CON UN SOCIO");

if (etaUtente >= 18 && (invito || accSocio)) {
  console.log("Benvenuto alla festa");
}
else {
  console.log("NON PUOI ENTRARE");
}


//CASO: devo per forza essere accompagnato da un socio e obbligatoriamente avere età > 18 e l'invito
console.log("=== IF ANNIDATO ===");

if (accSocio) {
  if (etaUtente > 18 && invito) {
    console.log("Benvenuto alla!!");
  } else {
    console.log("Mi spiace, non puoi entrare!!");
  }
} else {
  console.log("Non hai un socio accompagnatore");
}


//OPERATORE TERNARIO. Modo compatto per scrivre un if con condizioni binarie: true o false

let msg = "";
let pioggia = false;

// if(pioggia){
//   msg = "Porta un ombrello";
// }else{
//   msg = "Non portare l'ombrello";
// }

//                        True                        False
msg = pioggia ? "Sta piovendo porta un ombrello" : "Non sta piovendo, puoi lasciare l'ombrello a casa";

console.log(msg);


