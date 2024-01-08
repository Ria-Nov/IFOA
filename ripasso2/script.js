let points = 0;
let speed = 10;
let lost = 0;
let clicked = false;

function getsPoints() {
    points ++;
    document.getElementById('number').innerHTML = points;
    console.log(points);
    document.getElementById('palla').style = ('transition-duration:700ms; transform: scale(1.7); opacity:0%;');
    clicked = true;
  }

function myMove() {
    const elem = document.getElementById("palla");
    let posY = -25;
    let posX = 50;
    let interval = setInterval(frame, speed);

    function frame() {
        if (posY == 100 && lost == 5) { 
          clearInterval(interval);
          alert ('GAMEOVER! Il tuo punteggio è ' + points);
        } else if (posY == 100 && clicked == true) { 
            clicked = false;  
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
            setInterval(frame, (speed+0.01))
          } else if (posY == 100 && clicked == false) { 
            lost += 1;
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
          } else {
            elem.style.left = posX + 'px';
            elem.style.top = posY + '%';
            posY++; 
        }}}
myMove();