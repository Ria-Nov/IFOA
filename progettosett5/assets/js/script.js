let navbar = document.getElementById('navbar');
let btn = document.getElementById('navbtn');

window.onscroll = function() {
    if(window.scrollY > 350){
      navbar.style.backgroundColor = '#fff';
      btn.style.backgroundColor= '#1a8917';
    }else{
      navbar.style.backgroundColor = '#ffc017';
      btn.style.backgroundColor= '#191919';
    }
  }


//   let move1 = document.querySelectorAll('.move');
//   let move2 = document.querySelectorAll('.move2');
//   let move3 = document.querySelectorAll('.move3');

//   function showText(arr1, arr2, arr3){
//         arr1.forEach((el) => {
//             el.classList.toggle = 'opacity:0'
//         });
//         arr2.forEach((el) => {
//             el.classList.toggle = 'opacity:0'
//         });
//         arr2.forEach((el) => {
//             el.classList.toggle = 'opacity:0'
//         });
//   }

//   showText(move1,move2,move3);