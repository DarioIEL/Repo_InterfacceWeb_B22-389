# Esercitazione

1. Crea un array di studenti (object) nello script con almeno 4 proprietà. Trasforma questo array in un json e salvalo in LocalStorage. Cliccando su un pulsante stampa l'elenco degli studenti sia in formato json sia in formato Javascrit.

```
- [{"nome": "Dario", "cognome": "Mennillo"....}, {}, {}]

- nome: Dario, cognome: Mennillo,...

```

## Concetti Chiave



| Metodo | Descrizione |
|--------|-------------|
| `localStorage.setItem(chiave, valore)` | Salva un dato |
| `localStorage.getItem(chiave)` | Recupera un dato |
| `localStorage.removeItem(chiave)` | Rimuove un singolo dato |
| `localStorage.clear()` | Svuota tutto lo storage |
| `JSON.stringify(oggetto)` | Converte oggetto in stringa JSON |
| `JSON.parse(stringa)` | Converte stringa JSON in oggetto |

> **Nota**: localStorage salva solo stringhe. Per salvare oggetti o array devi usare `JSON.stringify()` e `JSON.parse()`.

***

## Esercizio 1 — Salvare e Recuperare Dati Semplici

**Obiettivo**: Usare i metodi base `setItem()`, `getItem()` e `removeItem()`.

**Descrizione**: Crea un'applicazione che salva il nome utente inserito, lo recupera al ricaricamento della pagina e permette di cancellarlo.

**Template HTML da completare**:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esercizio 1 - LocalStorage Base</title>
</head>
<body>
    <h2>Gestione Nome Utente</h2>

    abel for="nome">Inserisci il tuo nome:</label>
    <input type="text" id="nome" placeholder="Mario Rossi">
    <button id="salva">Salva</button>
    <button id="carica">Carica</button>
    <button id="cancella">Cancella</button>

    <p id="risultato"></p>

    <script>
        const inputNome    = document.getElementById('nome');
        const btnSalva     = document.getElementById('salva');
        const btnCarica    = document.getElementById('carica');
        const btnCancella  = document.getElementById('cancella');
        const risultato    = document.getElementById('risultato');

        btnSalva.addEventListener('click', function () {
            // TODO: Salvare il valore dell'input in localStorage con chiave "nomeUtente"
        });

        btnCarica.addEventListener('click', function () {
            // TODO: Recuperare il valore da localStorage e mostrarlo nel paragrafo
        });

        btnCancella.addEventListener('click', function () {
            // TODO: Rimuovere il dato da localStorage e pulire l'interfaccia
        });
    </script>
</body>
</html>
```

**Compiti**:
1. Salvare il valore dell'input con chiave `"nomeUtente"`
2. Caricare e mostrare il nome nel paragrafo `#risultato`
3. Eliminare il dato e svuotare input e paragrafo

**Test**: Scrivi un nome, salvalo, ricarica la pagina con F5 e verifica che persista.

***

## Esercizio 2 — Contatore Persistente

**Obiettivo**: Gestire valori numerici e aggiornare localStorage ad ogni modifica.

**Descrizione**: Implementa un contatore che mantiene il proprio valore anche dopo il refresh della pagina.

**Template HTML da completare**:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esercizio 2 - Contatore</title>
    <style>
        .counter-display { font-size: 3em; color: #2c3e50; margin: 20px 0; }
        button { padding: 10px 20px; margin: 5px; font-size: 1em; }
    </style>
</head>
<body>
    <h2>Contatore Persistente</h2>

    <div class="counter-display" id="display">0</div>

    <button id="incrementa">+1</button>
    <button id="decrementa">-1</button>
    <button id="reset">Reset</button>

    <script>
        const display      = document.getElementById('display');
        const btnIncrementa = document.getElementById('incrementa');
        const btnDecrementa = document.getElementById('decrementa');
        const btnReset     = document.getElementById('reset');

        // TODO: Al caricamento della pagina, recuperare il contatore da localStorage
        // Se non esiste, inizializzarlo a 0

        function aggiornaDisplay(valore) {
            // TODO: Aggiornare il display con il valore e salvarlo in localStorage
        }

        btnIncrementa.addEventListener('click', function () {
            // TODO: Incrementare e aggiornare
        });

        btnDecrementa.addEventListener('click', function () {
            // TODO: Decrementare e aggiornare
        });

        btnReset.addEventListener('click', function () {
            // TODO: Resettare a 0 e aggiornare
        });
    </script>
</body>
</html>
```

**Compiti**:
1. Inizializzare il contatore da localStorage al caricamento (default `0`)
2. Implementare i tre bottoni: `+1`, `-1`, `Reset`
3. Salvare automaticamente dopo ogni modifica

**Test**: Porta il contatore a 5, chiudi la scheda, riaprila e verifica che sia ancora 5.

***

## Esercizio 3 — Form con Auto-Save

**Obiettivo**: Salvataggio automatico durante la digitazione tramite evento `input`.

**Descrizione**: Crea un form che salva i dati mentre l'utente scrive, in modo che il testo non venga mai perso.

**Template HTML da completare**:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esercizio 3 - Auto-Save Form</title>
    <style>
        form    { max-width: 500px; }
        label   { display: block; margin-top: 15px; font-weight: bold; }
        input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
        textarea { min-height: 100px; }
        .status { margin-top: 15px; color: green; font-style: italic; }
    </style>
</head>
<body>
    <h2>Form con Salvataggio Automatico</h2>

    <form id="formContatto">
        abel for="username">Username:</label>
        <input type="text" id="username" name="username">

        abel for="email">Email:</label>
        <input type="email" id="email" name="email">

        abel for="messaggio">Messaggio:</label>
        <textarea id="messaggio" name="messaggio"></textarea>

        <button type="button" id="svuota">Svuota Form</button>
    </form>

    <div class="status" id="status"></div>

    <script>
        const username = document.getElementById('username');
        const email    = document.getElementById('email');
        const messaggio = document.getElementById('messaggio');
        const status   = document.getElementById('status');
        const btnSvuota = document.getElementById('svuota');

        // TODO: Al caricamento, recuperare i dati salvati e popolare il form

        // TODO: Aggiungere eventi 'input' su ciascun campo per auto-save

        btnSvuota.addEventListener('click', function () {
            // TODO: Svuotare il form e rimuovere i dati da localStorage
        });

        function mostraStatus(msg) {
            status.textContent = msg;
            setTimeout(() => status.textContent = '', 2000);
        }
    </script>
</body>
</html>
```

**Compiti**:
1. Caricare i dati dal localStorage al `load` della pagina
2. Aggiungere evento `input` su ogni campo per il salvataggio in tempo reale
3. Mostrare un messaggio "Salvato!" dopo ogni modifica (usa `mostraStatus`)
4. Il bottone "Svuota" deve resettare form e localStorage

**Test**: Compila i campi, ricarica la pagina, verifica che i dati siano ancora presenti.

***

## Esercizio 4 — Lista Compiti (Array + JSON)

**Obiettivo**: Salvare e recuperare un array usando `JSON.stringify()` e `JSON.parse()`.

**Descrizione**: Crea una todo list che persiste i compiti tra le sessioni del browser.

**Template HTML da completare**:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esercizio 4 - Todo List</title>
    <style>
        .task-item {
            padding: 10px; margin: 5px 0;
            background: #f4f4f4; border-radius: 4px;
            display: flex; justify-content: space-between;
        }
        button.delete { background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer; }
    </style>
</head>
<body>
    <h2>Lista Compiti Persistente</h2>

    <input type="text" id="nuovoCompito" placeholder="Inserisci un compito">
    <button id="aggiungi">Aggiungi</button>
    <button id="svuotaLista">Svuota Lista</button>

    <div id="listaCompiti"></div>

    <script>
        const inputCompito  = document.getElementById('nuovoCompito');
        const btnAggiungi   = document.getElementById('aggiungi');
        const btnSvuota     = document.getElementById('svuotaLista');
        const listaCompiti  = document.getElementById('listaCompiti');

        let compiti = [];

        function caricaCompiti() {
            // TODO: Recuperare l'array da localStorage con JSON.parse
            // Se non esiste, usare un array vuoto
        }

        function salvaCompiti() {
            // TODO: Salvare l'array in localStorage con JSON.stringify
        }

        function visualizzaCompiti() {
            listaCompiti.innerHTML = '';
            compiti.forEach((compito, index) => {
                // TODO: Creare un div per ogni compito con un pulsante Elimina
            });
        }

        function eliminaCompito(index) {
            // TODO: Rimuovere l'elemento dall'array, salvare e visualizzare
        }

        btnAggiungi.addEventListener('click', function () {
            // TODO: Aggiungere il compito, salvare e visualizzare
        });

        btnSvuota.addEventListener('click', function () {
            // TODO: Svuotare array, localStorage e visualizzare
        });

        // Inizializzazione
        caricaCompiti();
        visualizzaCompiti();
    </script>
</body>
</html>
```

**Compiti**:
1. Implementare `caricaCompiti()` usando `JSON.parse`
2. Implementare `salvaCompiti()` usando `JSON.stringify`
3. Visualizzare la lista con pulsante Elimina per ogni voce
4. Gestire aggiunta, eliminazione e svuotamento

**Test**: Aggiungi 5 compiti, ricarica la pagina, elimina alcuni e verifica la persistenza.

***

## Esercizio 5 — Rubrica Contatti (Oggetti Complessi)

**Obiettivo**: Gestire un array di oggetti JSON con più proprietà.

**Descrizione**: Implementa una rubrica contatti con nome, telefono ed email.

**Template HTML da completare**:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esercizio 5 - Rubrica</title>
    <style>
        .contatto { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .contatto h3 { margin: 0 0 8px 0; }
        input { margin: 5px; padding: 8px; }
        button.delete { background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer; }
    </style>
</head>
<body>
    <h2>Rubrica Contatti</h2>

    <form id="formContatto">
        <input type="text"  id="nome"     placeholder="Nome"     required>
        <input type="tel"   id="telefono" placeholder="Telefono" required>
        <input type="email" id="email"    placeholder="Email"    required>
        <button type="submit">Aggiungi Contatto</button>
    </form>

    <button id="svuotaRubrica">Svuota Rubrica</button>

    <div id="listaContatti"></div>

    <script>
        const form           = document.getElementById('formContatto');
        const inputNome      = document.getElementById('nome');
        const inputTelefono  = document.getElementById('telefono');
        const inputEmail     = document.getElementById('email');
        const btnSvuota      = document.getElementById('svuotaRubrica');
        const listaContatti  = document.getElementById('listaContatti');

        let rubrica = [];

        function caricaRubrica() {
            // TODO: Recuperare l'array di oggetti contatto da localStorage
        }

        function salvaRubrica() {
            // TODO: Salvare l'array in localStorage
        }

        function visualizzaContatti() {
            listaContatti.innerHTML = '';
            rubrica.forEach((contatto, index) => {
                // TODO: Mostrare nome, telefono, email e pulsante Elimina
            });
        }

        function eliminaContatto(index) {
            // TODO: Rimuovere contatto, salvare e visualizzare
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nuovoContatto = {
                // TODO: Popolare con nome, telefono, email
            };
            // TODO: Aggiungere alla rubrica, salvare, visualizzare e resettare form
        });

        btnSvuota.addEventListener('click', function () {
            if (confirm('Svuotare tutta la rubrica?')) {
                // TODO: Svuotare, salvare e visualizzare
            }
        });

        caricaRubrica();
        visualizzaContatti();
    </script>
</body>
</html>
```

**Compiti**:
1. Strutturare ogni contatto come oggetto `{ nome, telefono, email }`
2. Implementare aggiunta, visualizzazione ed eliminazione
3. Usare `confirm()` prima di svuotare la rubrica

**Test**: Aggiungi 3 contatti, elimina uno, ricarica e verifica i dati.

***

## Esercizio 6 — Gestione Preferenze Utente

**Obiettivo**: Salvare un oggetto di impostazioni e applicarle dinamicamente all'interfaccia.

**Descrizione**: Sistema di preferenze con tema chiaro/scuro e dimensione font personalizzabile.

**Template HTML da completare**:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esercizio 6 - Preferenze</title>
    <style>
        body { transition: all 0.3s ease; padding: 20px; }
        .light-theme { background: #ffffff; color: #333333; }
        .dark-theme  { background: #2c3e50; color: #ecf0f1; }
        select, input { padding: 8px; margin: 10px; }
    </style>
</head>
<body class="light-theme">
    <h1>Preferenze Utente</h1>

    <div class="settings">
        abel>Tema:
            <select id="tema">
                <option value="light">Chiaro</option>
                <option value="dark">Scuro</option>
            </select>
        </label>

        abel>Font:
            <select id="fontSize">
                <option value="14">Piccolo (14px)</option>
                <option value="16">Normale (16px)</option>
                <option value="18">Grande (18px)</option>
                <option value="20">Molto Grande (20px)</option>
            </select>
        </label>

        abel>Username:
            <input type="text" id="username" placeholder="Il tuo username">
        </label>

        <button id="salva">Salva Preferenze</button>
        <button id="reset">Reset Default</button>
    </div>

    <p id="benvenuto"></p>

    <script>
        const selectTema    = document.getElementById('tema');
        const selectFont    = document.getElementById('fontSize');
        const inputUsername = document.getElementById('username');
        const btnSalva      = document.getElementById('salva');
        const btnReset      = document.getElementById('reset');
        const benvenuto     = document.getElementById('benvenuto');

        const DEFAULT = { tema: 'light', fontSize: '16', username: 'Ospite' };

        function caricaPreferenze() {
            // TODO: Recuperare le preferenze o usare i DEFAULT
        }

        function applicaPreferenze(prefs) {
            // TODO: Applicare tema (classe CSS), font-size e messaggio benvenuto
        }

        function salvaPreferenze() {
            // TODO: Costruire oggetto preferenze e salvarlo in localStorage
        }

        btnSalva.addEventListener('click', function () {
            // TODO: Salvare e applicare
        });

        btnReset.addEventListener('click', function () {
            // TODO: Ripristinare DEFAULT e applicare
        });

        // Aggiornamento in tempo reale
        selectTema.addEventListener('change', function () {
            // TODO: Applicare tema immediatamente
        });

        selectFont.addEventListener('change', function () {
            // TODO: Applicare font-size immediatamente
        });

        caricaPreferenze();
    </script>
</body>
</html>
```

**Compiti**:
1. Salvare un oggetto `{ tema, fontSize, username }` in localStorage
2. Applicare il tema tramite classi CSS `light-theme` / `dark-theme`
3. Modificare `document.body.style.fontSize` dinamicamente
4. Aggiornamento in tempo reale al cambio di ogni selettore
5. Bottone Reset che ripristina i valori `DEFAULT`

**Test**: Imposta tema scuro e font grande, ricarica la pagina e verifica che le preferenze siano applicate automaticamente.

***

## Bonus — Esercizi Avanzati

Dopo aver completato gli esercizi base, prova le seguenti sfide:

1. **Carrello E-commerce**: Lista prodotti con quantità e prezzo, calcolo totale persistente, pulsante svuota carrello
2. **Todo List con Priorità**: Compiti con data di scadenza e livello di priorità, ordinati automaticamente
3. **High Score Gioco**: Salvataggio del punteggio migliore di una sessione di gioco

***

