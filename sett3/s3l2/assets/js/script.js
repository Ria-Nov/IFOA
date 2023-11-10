  /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
        
       const changeTitle = function () {
        document.querySelector('h1').innerText = 'Ho sonno';
       }

       changeTitle()
       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        document.querySelector('h1').className = "myHeading";
       }

       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        let divp = document.querySelectorAll('div p');
        divp.forEach ((el) => el.innerText = "ho ancora più sonno")
       }

       changePcontent()
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        let links = document.querySelectorAll('a:not(footer a)');
        links.forEach((el) => el.setAttribute('href', 'https://www.google.com'))
       }

       changeUrls()
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {

        let secondChild = document.getElementById('secondList');

        let newLi = document.createElement('li');
        newLi.innerText = '4th row';

        secondChild.appendChild(newLi);

    }

       addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {

        let primoDiv = document.querySelector('div');

        let newP = document.createElement('p');
        newP.innerText = 'sono un nuovo paragrafo'

        primoDiv.appendChild(newP)

       }


       addParagraph()
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {

        document.getElementById('firstList').style.display = 'none';

       }


       hideFirstUl()
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {

        let uls = document.querySelectorAll('ul')

        uls.forEach((el) => el.style.backgroundColor = 'green')

       }


       paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        let title = document.querySelector('h1');
        title.onclick = () => {
            
            let text = title.innerText;
          
            let newText = text.substring(0, text.length - 1);
          
            title.innerText = newText;

    }}

       
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        let ft = document.getElementById('ft');

        ft.innerText = alert('https://www.google.com')

       }


       
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {

        let table = document.getElementById('tableArea');

        let tabella = document.createElement('table')

        table.appendChild(tabella)

        let thead = document.createElement("thead");
        table.appendChild(thead);

        let tr = document.createElement("tr");
        thead.appendChild(tr);

        let th = document.createElement("th");
        th.innerText = "Immagine";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerText = "Nome prodotto";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerText = "Quantità";
        tr.appendChild(th);

        th = document.createElement("th");
        th.innerText = "Prezzo";
        tr.appendChild(th);

       }


       generateTable()
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
    //    const addRow = function () {

    //     let newRow = document.getElementById('tableArea')

    //     let tr = document.createElement("tr");
    //     newRow.appendChild(tr);




    //    }

    //    addRow()
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {
        let imgs = document.getElementsByTagName('td img');

        imgs.forEach((el) => el.style.display = 'none')
       }

       hideAllImages()
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {
        let subtitle = document.getElementById('changeMyColor');
        
        subtitle.style.color = `rgb(${Math.floor(Math.random() * (255 + 1))} , ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
    }
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {
        



       }