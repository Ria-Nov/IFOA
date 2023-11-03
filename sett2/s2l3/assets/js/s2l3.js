// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età


/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE L'ETA
4. VERIFICARE LA MAGGIORE O MINORE ETA
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM

EVENTO SCATENANTE
click

VARIABILI GLOBALI (perché usata in più punti)
nome 
anno
stato
*/

let nome; // campo di input e stampare a video
let anno; // campo di input, calcolare età, verificare età, stampare a video
let eta;
let stato; // verificare l'età e stampare a video

function eventHandler(){
    leggiForm();
    if (anno >=1900 && anno <= 2023 && nome != '') {
        errore.innerHTML = '&nbsp;';
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        errore.innerHTML= 'Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
        return;
    }
}

function leggiForm(){
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
}

function calcolaEta(){
    eta = 2023 - Number(anno); // quello che arriva dal form è stringa, converti
}

function verifica(){
    stato = (eta >= 18) ? "maggiorenne" : "minorenne";
}

function scrivi() {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato;
}

function cancellaForm(){
    document.getElementById('nome').value = ' ';
    document.getElementById('anno').value = ' ';
}

