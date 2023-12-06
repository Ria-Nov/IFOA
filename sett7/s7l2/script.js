// let user = document.getElementById('user').value;
// let form = document.getElementById('form');

// function save(){
//     localStorage.setItem('user', user);
//     write()
// }

// function deleted(){
//     localStorage.removeItem('user')
//     write()
// }

// function write(){
//     if(localStorage.getItem('user')){
//         testo = 'Ciao, ' + localStorage.getItem('user')
//     }else{
//         testo = "Chi sei?"
//     }

//     document.querySelector('.title').innerText = testo;
// }

// window.onload = write;

let i = sessionStorage.getItem('count')
? parseInt(sessionStorage.getItem('count'))
: 0

function conta() {
i++
document.getElementById('timer').innerText = `Sessione aperta da ${i} secondi`;
sessionStorage.setItem('count', i)
}

setInterval(conta, 1000)