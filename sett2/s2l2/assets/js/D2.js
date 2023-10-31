/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 4;
let num2 = 65;

if (num1 > num2){
   console.log(num1 + "è maggiore di " + num2)
}else if (num2 > num1){
   console.log(num2 + "è maggiore di " + num1)
  } else{
    console.log("i numeri sono uguali")
  }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


let num3 = 7;

if (num3 !== 5){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = 45;

if(num4 % 5 == 0){
   console.log("divisibile per 5")
}else{
   console.log("non divisibile")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 8;
let num6 = 16;

if(num5 == 8 || num6 == 8){
   console.log("il numero è uguale a 8")
}else if((num5 + num6) == 8 || (num5 -num6) == 8){
 console.log("il risultato è 8")
} else {
 console.log("non è 8 e non fa 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 43;

if(totalShoppingCart < 50){
  console.log(totalShoppingCart + 10)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = true;

if(totalShoppingCart < 50){
 let spedizione = totalShoppingCart + 10
   return spedizione
   if (blackFriday == true){
     console.log(spedizione + (spedizione * 100 / 20));
  }
};





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n1 = 3
let n2 = 45
let n3 = 23

if ( n1 > n2 && n1 > 3 && n2 > n3){
  console.log ( n1 += n2 += n3)
} else if( n2 > n1 && n1 > n3){
  console.log( n2 += n1 += n3)
} else {
  console.log(n3 += n2 += n1)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = "ciao";

if(valore == typeof Number){
   console.log(true)
} else{
   (false);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let paridis = 19;

if(paridis % 2 == 0){
   console.log("il numero è pari")
} else{
   console.log("il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
  // let val = 7
  // if (val < 10) {
  //     console.log("Meno di 10");
  //   } else if (val < 5) {
  //     console.log("Meno di 5");
  //   } else {
  //     console.log("Uguale a 10 o maggiore");
  //   }

    let val = 7
  if (val < 5) {
    console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


me.city = "Toronto";

console.log(me.skills)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = []

array[0] = 1
array[1] = 2
array[2] = 3
array[3] = 4
array[4] = 5
array[5] = 6
array[6] = 7
array[7] = 8
array[8] = 9
array[9] = 10

console.log(array)




/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100

console.log(array)
