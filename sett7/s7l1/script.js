class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confronto(x) {
    if (this.age > x.age) {
      console.log(`${x.firstName} è più vecchi* di ${y.firstName}`);
    } else {
      console.log(`${x.firstName} è più vecchi* di ${this.firstName}`);
    }
  }
}

let utenteX = new User("Mario", "Rossi", 35, "Udine");
let utenteY = new User("Giada", "Marini", 40, "Bologna");
console.log(utenteX.confronto(utenteY));

console.log("Esercizio 2");

// let petName = document.getElementById('petName').value;
// let ownerName = document.getElementById('ownerName').value;
// let species = document.getElementById('species').value;
// let breed = document.getElementById('breed').value;

// let petName2 = document.getElementById('petName2').value;
// let ownerName2 = document.getElementById('ownerName2').value;
// let species2 = document.getElementById('species2').value;
// let breed2 = document.getElementById('breed2').value;

// class Pet {
//     constructor(petName, ownerName, species, breed){
//         this.petName = petName;
//         this.ownerName = ownerName;
//         this.species = species;
//         this.breed = breed;
//     }

//     sameOwner(x,y){
//         if(x.ownerName == y.ownerName){
//             console.log(true)
//         }else{
//             console.log(false)
//         }
//     }
// }

// let petX = new Pet(petName, ownerName, species, breed)
// let petY = new Pet (petName2, ownerName2, species2, breed2)

// console.log(petX.sameOwner(ownerName, ownerName2))


class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    sameOwner(x, y) {
      if (x.ownerName == y.ownerName) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }

let btn = document.getElementById("btn");
let pets = [];

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const petName = form.querySelector("input[name='petName']").value;
  const ownerName = form.querySelector("input[name='ownerName']").value;
  const species = form.querySelector("input[name='species']").value;
  const breed = form.querySelector("input[name='breed']").value;

  const pet = new Pet(petName, ownerName, species, breed);

  pets.push(pet);

  form.reset()

});

console.log(pets)
