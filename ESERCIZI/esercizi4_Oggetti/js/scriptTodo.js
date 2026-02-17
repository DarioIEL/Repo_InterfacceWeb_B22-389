// Oggetto Item
class Item {
    constructor(descrizione, data) {
        this.descrizione = descrizione;
        this.data = data;
        this.id = Date.now(); // ID unico basato sul timestamp
    }
}

// Array per memorizzare gli items
let items = [];

// Elementi del DOM
const itemInput = document.getElementById('itemInput');
const dateInput = document.getElementById('dateInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const messaggiDiv = document.getElementById('messaggi');

// Funzione per salvare gli items in localStorage
function salvaInLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(items));
}

// Funzione per caricare gli items da localStorage
function caricaDaLocalStorage() {
    const datiSalvati = localStorage.getItem('todoItems');
    if (datiSalvati) {
        items = JSON.parse(datiSalvati);
    }
}

// Funzione per mostrare messaggi di errore/avviso
function mostraMessaggio(testo, tipo = 'errore') {
    messaggiDiv.textContent = testo;
    messaggiDiv.style.display = 'block';
    
    if (tipo === 'errore') {
        messaggiDiv.style.backgroundColor = '#ffcccc';
        messaggiDiv.style.color = '#cc0000';
        messaggiDiv.style.border = '1px solid #cc0000';
    } else if (tipo === 'avviso') {
        messaggiDiv.style.backgroundColor = '#ffffcc';
        messaggiDiv.style.color = '#ff9900';
        messaggiDiv.style.border = '1px solid #ff9900';
    } else if (tipo === 'successo') {
        messaggiDiv.style.backgroundColor = '#ccffcc';
        messaggiDiv.style.color = '#00aa00';
        messaggiDiv.style.border = '1px solid #00aa00';
    }
    
    // Nasconde il messaggio dopo 3 secondi
    setTimeout(() => {
        messaggiDiv.style.display = 'none';
    }, 3000);
}

// Funzione per controllare se esiste un item con la stessa data
function controlloDataDuplica(data) {
    return items.some(item => item.data === data);
}

// Funzione per aggiungere un item
function aggiungiItem() {
    const descrizione = itemInput.value.trim();
    const data = dateInput.value;

    // Validazione
    if (!descrizione || !data) {
        mostraMessaggio('Inserisci sia la descrizione che la data!', 'errore');
        return;
    }

    // Controllo se esiste già un item con la stessa data
    if (controlloDataDuplica(data)) {
        mostraMessaggio('Attenzione: esiste già un compito per questa data!', 'avviso');
    }

    // Crea il nuovo item
    const nuovoItem = new Item(descrizione, data);
    items.push(nuovoItem);

    // Salva in localStorage
    salvaInLocalStorage();

    // Pulisci gli input
    itemInput.value = '';
    dateInput.value = '';

    // Ricarica la visualizzazione
    mostraItems();
}

// Funzione per eliminare un item
function eliminaItem(id) {
    items = items.filter(item => item.id !== id);
    salvaInLocalStorage();
    mostraItems();
}

// Funzione per ordinare gli items per data
function ordinaItems() {
    return [...items].sort((a, b) => new Date(a.data) - new Date(b.data));
}

// Funzione per mostrare gli items ordinati
function mostraItems() {
    const itemsOrdinati = ordinaItems();
    
    todoList.innerHTML = '';

    if (itemsOrdinati.length === 0) {
        todoList.innerHTML = '<p>Nessun compito! 🎉</p>';
        return;
    }

    itemsOrdinati.forEach(item => {
        const div = document.createElement('div');
        div.style.cssText = 'border: 1px solid #ccc; padding: 10px; margin: 5px 0; border-radius: 5px; display: flex; justify-content: space-between; align-items: center;';
        
        const dataFormattata = new Date(item.data).toLocaleDateString('it-IT');
        
        div.innerHTML = `
            <span><strong>${item.descrizione}</strong> - ${dataFormattata}</span>
            <button onclick="eliminaItem(${item.id})" style="background-color: #ff6b6b; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">[X]</button>
        `;
        
        todoList.appendChild(div);
    });
}

// Event listener per il bottone Aggiungi
addBtn.addEventListener('click', aggiungiItem);

// Permetti di aggiungere item anche premendo Enter
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        aggiungiItem();
    }
});

// Carica i dati da localStorage e mostra la lista
caricaDaLocalStorage();
mostraItems();