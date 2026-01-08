# Consegne Esercizi JavaScript - If Statement
## Esercizio 1 : Accesso con credenziali
**Obiettivo:** Accedere ad un'ipotetica piattaforma utilizzando delle credenziali

**Consegna:** Verifica se l'utente possiede le seguenti credenziali
- `username`: pippo
- `password`: 1234

Stampare in console il messaggio appropriato. Se lo username è corretto ma non la password avvisare l'utente della sola pass sbagliata. 

## Esercizio 2: Controllo Condizioni Meteo per Gita

**Obiettivo:** Verificare se è una buona giornata per fare una gita utilizzando condizioni complesse.

**Consegna:**
Scrivi un programma che dichiari tre variabili:
- `temperatura` (numero) - la temperatura in gradi
- `sole` (booleano) - true se c'è il sole, false altrimenti
- `weekend` (booleano) - true se è weekend, false altrimenti

Utilizza un `if` per controllare se è possibile fare una gita. La condizione deve essere vera se:
- La temperatura è maggiore di 20 gradi **E** c'è il sole
- **OPPURE** se è weekend (indipendentemente dalle altre condizioni)

Stampa un messaggio appropriato in base al risultato.

**Operatori da utilizzare:** `&&`, `||`

---

## Esercizio 3: Calcolo e Verifica Range

**Obiettivo:** Eseguire operazioni matematiche e verificare se il risultato rientra in un determinato range.

**Consegna:**
Scrivi un programma che dichiari tre variabili:
- `a` = 10
- `b` = 5
- `risultato` = il valore di `a` moltiplicato per `b` diviso per 2

Utilizza un `if` per verificare se il `risultato` è compreso tra 20 e 30 (esclusi gli estremi).

Stampa un messaggio che indichi se il risultato è dentro o fuori dal range specificato.

**Operatori da utilizzare:** `*`, `/`, `&&`

---

## Esercizio 4: Score Perfetto con Bonus

**Obiettivo:** Incrementare uno score e verificare se raggiunge un punteggio perfetto divisibile per 10.

**Consegna:**
Scrivi un programma che dichiari una variabile:
- `score` = 99

Incrementa il valore di `score` di 1 unità usando l'operatore `++`.

Utilizza un `if` per verificare se lo score:
- È divisibile per 10 (usa l'operatore modulo `%`)
- **E** una condizione che è sempre vera (puoi usare `!false`)

Se entrambe le condizioni sono vere, stampa un messaggio che indica che è stato ottenuto un "Score perfetto" con bonus. Altrimenti stampa lo score attuale.

**Operatori da utilizzare:** `++`, `%`, `&&`, `!`

## Esercizio 5: Ore del Giorno
**Obiettivo:** Scrivere un saluto per ogni blocco di ore del giorno

**Consegna:**
Crea una variabile chiamata oraDelGiorno = 18 ecc.
- 00-06 (buonmattino)
- 06-12 (buongiorno)
- 12-18 (buonpomeriggio)
- 18-24 (buonasera)