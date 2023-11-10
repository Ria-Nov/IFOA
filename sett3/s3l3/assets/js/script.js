let btn = document.getElementById('invia');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    let form = document.querySelector('form');
    let task = document.getElementById('task');
    let lista = document.getElementById('listaTask')
    let newLi = document.createElement('li');

    newLi.setAttribute('onclick', 'strike()')

    let newTask = task.value;

    newLi.innerHTML = `${newTask} <button type="remove" class="cancel"> X </button>`;

    lista.appendChild(newLi);

    arr();
    form.reset();
});

//  function arr(){
//  let arrayTasks = []
//  arrayTasks.push(task.value)
//  arrayTasks.forEach ((el, i) => el.splice(i-1))
//  console.log(arrayTasks)
//  }

function strike(){
    let litem = document.querySelectorAll('li');
    litem.forEach((el) => el.style.textDecoration = 'line-through');
    
}


 function cancella(){

    let cancItem= document.querySelector('.cancel')
    
 cancItem.remove();
 }