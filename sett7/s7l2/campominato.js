let points = 0;
let play = true;
let level = "easy";
let levels = {
  easy: 20,
  medium: 40,
  hard: 60,
};

const levelSelector = document.getElementById("level");
levelSelector.onchange = () => {
  level = levelSelector.value;
  clearGrid()
  createBombs();
};

function createGrid() {
  const box = document.getElementById("mainDiv");

  for (let i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("onclick", "step(this)");
    box.appendChild(square);
  }

  createBombs();
}

function createBombs() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((element) => {
    element.classList.remove("bomb");
  });
  for (let i = 0; i <= levels[level]; i++) {
    let casual = Math.floor(Math.random() * 100);
    squares[casual].classList.add("bomb");
  }
}

function step(el) {
  if (!el.classList.contains("bomb") && play == true) {
    el.classList.add("good");
    points++;
    document.getElementById("points").innerText = points;
  } else if (el.classList.contains("bomb")) {
    el.classList.add("exploded");
    play = false;
    document.getElementById("gameover").style.opacity = 1;
  }
}

function clearGrid(){
    const box = document.getElementById("mainDiv").innerHTML = '';
    play = true;
    points = 0;
    document.getElementById("points").innerText = '';
    createGrid();

}

createGrid();
