// classi + costruttore

const arr = [1, 3, 15, 5, 6];

class Numeri {
  control(array) {
    if (Array.isArray(array)) {
      pippoplutopaperino(array);
    }
  }
}

function pippoplutopaperino(array) {
  array.forEach((el) => {
    if (el % 5 == 0 && el % 3 == 0) {
      console.log("paperino");
    } else if (el % 5 == 0) {
      console.log("pluto");
    } else if (el % 3 == 0) {
      console.log("pippo");
    } else {
      console.log(el.toString());
    }
  });
}


const minnie = new Numeri();

minnie.control(arr);


class PippoPlutoPaperino{
    constructor(arr = null){
        if (arr != null){
            this.numbers = arr
        }
    }

    check(){
        this.numbers.forEach(number => {
            if (number % 5 == 0 && number % 3 == 0) {
                console.log("paperino");
              } else if (number % 5 == 0) {
                console.log("pluto");
              } else if (number % 3 == 0) {
                console.log("pippo");
              } else {
                console.log(number.toString());
              }
        } )
    }
}

const topolino = new PippoPlutoPaperino([1, 4, 65, 3, 15])

topolino.check()

// event propagation

let main = document.getElementById('main')
let uno = document.getElementById('uno')
let due = document.getElementById('due')
let tre = document.getElementById('tre')

main.addEventListener('click', () => {
  main.style.backgroundColor = 'blue';
})

uno.addEventListener('click', (e) => {
  e.stopPropagation()
  uno.style.backgroundColor = 'blue';
})