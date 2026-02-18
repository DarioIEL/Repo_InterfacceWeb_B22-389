# Esercitazione DOM – Tracce

---

## Esercizio 1 – querySelector, querySelectorAll, textContent

### HTML di partenza

```html
<ul id="catalogoVinili">
    <li class="rock" id="v1">Led Zeppelin – IV</li>
    <li class="rock" id="v2">Pink Floyd – The Wall</li>
    <li class="jazz" id="v3">Miles Davis – Kind of Blue</li>
    <li class="jazz" id="v4">John Coltrane – A Love Supreme</li>
    <li class="pop"  id="v5">Michael Jackson – Thriller</li>
</ul>

<ul id="accessori">
    <li class="rock">Amplificatore valvolare</li>
    <li class="jazz">Giradischi professionale</li>
    <li class="pop">Cuffie wireless</li>
</ul>
```
### Obiettivo

1. Seleziona con `querySelector` il `<li>` con id `v1` e cambia il suo `textContent` in `"Led Zeppelin – Houses of the Holy"`.
2. Seleziona con `querySelectorAll` tutti i `<li>` di classe `jazz` e stampa in console il loro testo.
3. Seleziona tutti i `<li>` di classe `rock` del solo `#catalogoVinili` (non quelli di `#accessori`).
4. Usando `.children` sul `#catalogoVinili`, stampa in console il testo del primo e dell'ultimo figlio.
5. Usando `.innerHTML`, aggiungi una stella ⭐ al testo del `<li id="v5">` senza perdere il testo già presente.


---

## Esercizio 2 – getAttribute, setAttribute, classList

### HTML di partenza

```html
<h2 id="titoloNegozio">Vinili &amp; Sogni</h2>

<img id="copertina" alt="">

<ul id="listaArtisti">
    <li class="disponibile">David Bowie</li>
    <li class="esaurito">Jimi Hendrix</li>
    <li class="disponibile">Aretha Franklin</li>
    <li class="esaurito">Elvis Presley</li>
</ul>
```

### Obiettivo

1. Leggi con `getAttribute` la classe del primo `<li>` e stampala in console.
2. Usa `setAttribute` per impostare `src` e `alt` dell'immagine `#copertina` con valori a tua scelta (anche un URL esterno).
3. Con `setAttribute` imposta uno stile inline sull'immagine: `width: 150px`.
4. Usa `classList.add` per aggiungere la classe `evidenziato` al titolo `#titoloNegozio`.
5. Con `querySelectorAll` e `classList`, aggiungi la classe `barrato` a tutti i `<li class="esaurito">`.
6. Usa `classList.toggle` per togliere/rimettere la classe `evidenziato` sul titolo ogni volta che si preme un pulsante.

---

## Esercizio 3 – Attributi data-*

### HTML di partenza

```html
<ul id="dischi">
    <li data-artista="David Bowie"   data-anno="1972" data-genere="rock">The Rise and Fall of Ziggy Stardust</li>
    <li data-artista="Miles Davis"   data-anno="1959" data-genere="jazz">Kind of Blue</li>
    <li data-artista="Amy Winehouse" data-anno="2006" data-genere="pop">Back to Black</li>
    <li data-artista="Nirvana"       data-anno="1991" data-genere="rock">Nevermind</li>
</ul>

<div id="pannello-info">Clicca un disco per vedere i dettagli</div>
```

### Obiettivo

1. Seleziona tutti i `<li>` di `#dischi`.
2. Per ognuno, leggi con `getAttribute` i valori di `data-artista`, `data-anno` e `data-genere` e costruisci un array di oggetti `{titolo, artista, anno, genere}`. Stampalo in console. Ogni oggetto deve far riferimento alla classe `Disco`
3. Aggiungi un `addEventListener("click")` su ciascun `<li>`: al click mostra nel `#pannello-info` i dati del disco selezionato (usa `event.target` e `getAttribute`).
4. Usa `setAttribute` per aggiungere `data-prezzo` a ciascun disco: Bowie 18€, Davis 22€, Winehouse 15€, Nirvana 20€.

---

## Esercizio 4 – addEventListener, event.target, classList

### HTML di partenza

```html
<ul id="playlist">
    <li>Bohemian Rhapsody – Queen</li>
    <li>Hotel California – Eagles</li>
    <li>Stairway to Heaven – Led Zeppelin</li>
    <li>Smells Like Teen Spirit – Nirvana</li>
</ul>

<button id="btnEvidenzia">Evidenzia tutto</button>
<button id="btnReset">Reset</button>
<p id="output"></p>
```

### Obiettivo

1. Aggiungi un `addEventListener("click")` su ogni `<li>`: al click usa `event.target` per mostrare nel `<p id="output">` il testo della canzone cliccata e applica la classe `selezionato`. La classe deve andare solo sull'elemento cliccato (togli `selezionato` dagli altri prima).
2. Il pulsante `#btnEvidenzia` deve aggiungere la classe `evidenziato` a tutti i `<li>` se non ce l'hanno già, altrimenti rimuoverla (usa `classList.contains` + `classList.add/remove`).
3. Il pulsante `#btnReset` deve rimuovere sia `evidenziato` che `selezionato` da tutti i `<li>` e svuotare il testo di `#output`.

---

## Esercizio 5 – createElement, appendChild, removeChild

### HTML di partenza

```html
<input type="text" id="inputBrano" placeholder="Nome brano...">
<button id="btnAggiungi">Aggiungi</button>

<ul id="coda"></ul>
```

### Obiettivo

1. Quando si clicca `#btnAggiungi`, leggi il valore dell'input e (se non vuoto) crea un `<li>` con `createElement`, imposta il suo `textContent` col nome del brano e aggiungilo a `#coda` con `appendChild`. Svuota l'input dopo l'aggiunta.
2. Ogni `<li>` deve contenere anche un `<button>` con testo `"Rimuovi"`. Al click sul pulsante, rimuovi il `<li>` corrispondente con `removeChild`.
3. Al click sul testo del `<li>` (non sul pulsante), stampa in console: `"In riproduzione: [nome brano]"` usando `this.textContent`.
4. **Bonus:** aggiungi al `<li>` un `data-posizione` con il numero progressivo del brano (es. il primo aggiunto avrà `data-posizione="1"`, il secondo `"2"` ecc.).

---

## Esercizio 6 – Progetto finale: schede artisti generate dal DOM

### HTML di partenza

```html
<div id="griglia"></div>
```

### Obiettivo

1. Definisci una classe `Artista` con proprietà `nome`, `genere`, `albumFamoso`, `nazionalita`.
2. Crea un array con almeno 4 istanze di `Artista`.
3. Scrivi una funzione `creaScheda(artista)` che con `createElement` costruisce un `<div class="scheda">` contenente: un `<h3>` col nome, due `<p>` con genere e album famoso, e un `<button>` "Preferito" e mostrale nel `div#griglia`.
4. Il pulsante "Preferito" deve usare `classList.toggle` per aggiungere/togliere la classe `selezionato` sulla scheda.
5. Allo stesso tempo inserisci il disco preferito in una lista, sotto il `div#griglia`
