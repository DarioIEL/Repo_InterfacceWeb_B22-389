// Stampa i numeri da 1 a 100 in console. Accanto a multipli di 3 stampa "ZOOM", accanto ai multipli di 5 stampa "BOOM", accanto ai multipli di 3 e 5 stampa "ZOOM BOOM"

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " ZOOM BOOM");
    } else if (i % 3 == 0) {
        console.log(i + " ZOOM");
    } else if (i % 5 == 0) {
        console.log(i + " BOOM");
    } else {
        console.log(i);

    }
}