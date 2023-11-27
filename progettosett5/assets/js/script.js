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