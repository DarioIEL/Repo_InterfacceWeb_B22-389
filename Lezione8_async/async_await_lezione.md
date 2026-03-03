# Lezione: Async/Await in JavaScript

## Cos'è Async/Await?

`async/await` è una sintassi introdotta in ES2017 che permette di scrivere codice asincrono come se fosse sincrono, rendendo il codice molto più leggibile rispetto all'uso delle Promise tradizionali con `.then()` e `.catch()`. Ogni funzione che utilizza `await` deve obbligatoriamente essere dichiarata con la parola chiave `async`.

---

## 1. Funzione `async` e `await`

Una funzione `async` restituisce **sempre una Promise**. Il keyword `await` mette in pausa l'esecuzione della funzione fino a quando la Promise non si risolve.

```js
// Senza async/await (Promise tradizionale)
function fetchMovies() {
  fetch('/movies')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Con async/await (molto più leggibile)
async function fetchMovies() {
  const response = await fetch('/movies'); // aspetta la risposta
  const movies = await response.json();   // aspetta il parsing JSON
  console.log(movies);
}

fetchMovies();
```

> `await fetch('/movies')` avvia la richiesta HTTP e mette in **pausa** la funzione finché non arriva la risposta, senza bloccare il thread principale.

---

## 2. Leggere JSON dalla risposta

L'oggetto `response` restituito da `fetch()` è un placeholder generico. Per estrarre i dati bisogna chiamare un secondo metodo asincrono:

```js
async function fetchMoviesJSON() {
  const response = await fetch('/movies');
  const movies = await response.json(); // estrae e parsa il JSON
  return movies;
}

fetchMoviesJSON().then(movies => {
  console.log(movies); // array dei film
});
```

Oltre a `.json()`, esistono anche:
- `response.text()` → restituisce testo grezzo
- `response.blob()` → restituisce dati binari (file)
- `response.formData()` → restituisce un FormData
- `response.arrayBuffer()` → restituisce un ArrayBuffer

---

## 3. Gestione degli errori con `try/catch`

Con `async/await` la gestione degli errori si fa con i blocchi `try/catch`, che intercettano sia errori di rete che risposte HTTP errate.

```js
async function ottieniDati(url) {
  try {
    const response = await fetch(url);

    // fetch() NON lancia errori per 404/500, bisogna controllare response.ok
    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (errore) {
    console.error('Qualcosa è andato storto:', errore);
    throw errore; // ri-lancia se necessario
  }
}

ottieniDati('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(err => console.log('Errore finale:', err));
```

> ⚠️ **Attenzione**: `fetch()` rigetta la Promise solo in caso di errori di **rete**. Risposte come `404` o `500` non causano un'eccezione — bisogna verificare `response.ok` manualmente.

---

## 4. Cancellare una richiesta con `AbortController`

È possibile annullare una richiesta in corso usando `AbortController`:

```js
let controller = null;

fetchButton.addEventListener('click', async () => {
  controller = new AbortController();

  try {
    const response = await fetch('/movies', {
      signal: controller.signal // collega il segnale di abort
    });
    const movies = await response.json();
    console.log(movies);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Richiesta annullata!');
    } else {
      console.error('Fetch error:', error);
    }
  }
  controller = null;
});

cancelButton.addEventListener('click', () => {
  if (controller) controller.abort(); // annulla la richiesta
});
```

---

## 5. Richieste in Parallelo con `Promise.all`

Se hai più richieste **indipendenti**, eseguirle in sequenza con `await` separati è lento. Con `Promise.all()` partono tutte in parallelo.

```js
// ❌ Lento: sequenziale (aspetta la prima, poi la seconda)
async function fetchSequential() {
  const movies = await fetch('/movies').then(r => r.json());
  const categories = await fetch('/categories').then(r => r.json());
  return [movies, categories];
}

// ✅ Veloce: parallelo (partono insieme)
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch('/movies'),
    fetch('/categories')
  ]);

  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();
  return [movies, categories];
}

fetchMoviesAndCategories()
  .then(([movies, categories]) => {
    console.log(movies);
    console.log(categories);
  })
  .catch(error => {
    console.error('Una delle richieste è fallita:', error);
  });
```

> Se una qualsiasi richiesta in `Promise.all()` fallisce, l'intera Promise viene rigettata. Se vuoi che tutte le richieste completino indipendentemente dagli errori, usa `Promise.allSettled()`.

---

## Riepilogo visivo

| Scenario | Soluzione |
|---|---|
| Richiesta singola | `await fetch(url)` |
| Parsing risposta | `await response.json()` |
| Gestione errori | `try/catch` + controllo `response.ok` |
| Annullare richiesta | `AbortController` + `signal` |
| Più richieste parallele | `await Promise.all([...])` |
