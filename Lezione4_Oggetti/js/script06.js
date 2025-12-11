//DATE
let oraEsatta = new Date(); //OSS: utilizzo la parola chiave new su un qualcosa che non ho creato io, l'oggetto Date() vive nel linguaggio, è un oggetto built-in
console.log(oraEsatta.getDate() + "/" + (oraEsatta.getMonth()+1) + "/" + oraEsatta.getFullYear());

moment.locale("it")
console.log(moment().format('ll'));

//OROLOGIO DIGITALE
let demo = document.getElementById("demo");

setInterval(()=>{
    let oggi = new Date();
    let ora = (oggi.getHours() < 10? '0': '') + oggi.getHours();
    let min = (oggi.getMinutes() < 10? '0': '') + oggi.getMinutes();
    let sec = (oggi.getSeconds() < 10? '0': '') + oggi.getSeconds();
    
    demo.innerHTML = `<h3> ${ora}: ${min}: ${sec} </h3>`;
    
}, 1000)

