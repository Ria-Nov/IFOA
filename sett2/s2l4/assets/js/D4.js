/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
    rett = l1*l2
    return rett
}


console.log(area(4,5))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x, y){
    if (x === y){
        multiply = (x + y) * 3

    return multiply

    } else {
        somma = x + y
        return somma
    }
}

console.log(crazySum(5, 6))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x , y = 19){
    if( x >= 19){
        mult = Math.abs((x - y) * 3);
        return mult;
    }else{
        diff = Math.abs(x - y);
        return diff;
    }
}

console.log(crazyDiff(3))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n){
    if ((n > 20 && n <= 100) || n === 400){
        return true
    } else {
        return false
    }

}

console.log(boundary(55));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(x){
    if (x.indexOf('EPICODE') === 0){
        return x
     }else{
       return x.replace(x.charAt(-1), 'EPICODE ');
     }
 }

 console.log(epify('hello world'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x) {
    if(x % 7 === 0 || x % 3 === 0){
        return console.log('il numero è multiplo di 3 o 7')
    }else{
        return console.log('il numero non è multiplo di 3 o 7')
    }
}

    console.log(check3and7(3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

// function reverseString(x){
//     let revX = ''
//     let i = x.length - 1
//      while (i >= 0){
//         revX += x.substring(i, i + 1);

//         i--;
        
//     }
//     return revX;
// }

function reverseString(x){
    reverse = x.split('').reverse().join('')
    
    return reverse
}

console.log(reverseString('ciao'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(x){
    let reverse = x.replace(/(^\w|\s\w)/g, v => v.toUpperCase());

    return reverse;

}

console.log(upperFirst('buona lezione a tutti'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(x){
   let cut1 = x.slice(1, -1)

    return cut1
}

console.log(cutString('hello world'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let ray = []
    let i = 0
    while ( i <= n){
        ray.push(Math.floor(Math.random()*11))

        i++

    }

    return ray
}


console.log(giveMeRandom(5))