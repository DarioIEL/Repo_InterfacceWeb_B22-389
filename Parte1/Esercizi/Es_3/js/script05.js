let stringa = document.getElementById("ruotaAnim").textContent;

setInterval(()=>{
    stringa = stringa[stringa.length - 1] + stringa.slice(0, -1);
    document.getElementById("ruotaAnim").textContent = stringa
}, 100)
