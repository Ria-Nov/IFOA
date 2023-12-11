const url = "https://striveschool-api.herokuapp.com/books";
let row = document.getElementById('cards');


fetch(url)
  .then((response) => response.json())
  .then((data) => populateHomepage(data));

function populateHomepage(data) {
  data.forEach(el => {
    let col = document.createElement('div');
    col.classList.add('col-3');
    col.innerHTML = `<div class="card my-3" style="width: 18rem;">
    <img src="${el.img}" class="img-fluid" alt="book cover">
    <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text">${el.category}</p>
      <a href="#" class="btn btn-primary" onclick="addToCart(event, ${el.asin}">Add to cart</a>
      <a href="#" class="btn btn-danger" onclick="scarta(event)">Delete</a>
    </div>
  </div>`

  row.appendChild(col);

  });
}

function scarta(event){
    event.target.closest('.col-3').remove()
}