const token = "yiTdh7zYg2GhOyQc0sZ20Iq9qMK9tmNfkkSr9n6mGH7lDB6SfV5jEFmy";
const firstUrl = "https://api.pexels.com/v1/search?query=dog";
const secondUrl = "https://api.pexels.com/v1/search?query=cat";
const headers = {
  "Authorization": token,
  "Accept": "application/json",
  "Content-Type": "application/json",
};

let photos = [];

const getPics = () => {
    fetch(firstUrl, {
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        photos = data
        createTable(data)
    })
}

async function getPicture(id) {
    const finalUrl = firstUrl + id
    const response = await fetch(finalUrl, {
        headers: headers
    })
    return response.json()   
}

window.onload = () => {
    getPics();
    
}

function createTable(data) {
    const row = document.querySelector('.row')
    row.innerHTML = ''

    data.forEach(element => {
        let newRow = `
        <div class="card" style="width: 18rem;">
  <img src="${element.src.medium} class="card-img-top" alt="${element.alt}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
        row.innerHTML += newRow;
    });
}
