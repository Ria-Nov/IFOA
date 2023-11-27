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


document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".move");

    function showLetters(index) {
        if (index <= letters.length) {
            letters[index].style.opacity = "0";
            setTimeout(function() {
                letters[index].style.opacity = "1";
                showLetters((index + 1) % letters.length);
            }, 500); 
        }
    }
    showLetters(0)
})
    
document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".move2");

    function showLetters(index) {
        if (index <= letters.length) {
            letters[index].style.opacity = "0";
            setTimeout(function() {
                letters[index].style.opacity = "1";
                showLetters((index + 1) % letters.length);
            }, 500); 
        } 
    }
    showLetters(0)
})

document.addEventListener("DOMContentLoaded", function() {
    let letters = document.querySelectorAll(".move3");

    function showLetters(index) {
        if (index <= letters.length) {
            letters[index].style.opacity = "0";
            setTimeout(function() {
                letters[index].style.opacity = "1";
                showLetters((index + 1) % letters.length);
            }, 500); 
        }
    }
    showLetters(0)
    
})