const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkxNWMwNTgzNTAwMTg1MjJjOTUiLCJpYXQiOjE3MDIzNjk1NTgsImV4cCI6MTcwMzU3OTE1OH0.FIxKHIdFw_DeyM4Xe61FlqMRZ9Xq1sqX3X7D0vCidG4";
const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("picId");
let products = [];

const getRecords = () => {
    fetch(url + id, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        products = data;
        createCard(products)
      });
  };
  
  getRecords();

  function createCard(data) {
    const row = document.querySelector(".row");
    row.innerHTML = "";
  
      let newCard = `<div class="card" style="width: 18rem;">
    <img src=${data.imageUrl} class="card-img-top" alt="Nokia">
    <div class="card-body">
      <h5 class="card-title">Prodotto: ${data.name}</h5>
      <p class="card-text">Descrizione: ${data.description}</p>
      <p class="card-text">Brand: ${data.brand}</p>
    </div>
  </div>
          `;
      row.innerHTML += newCard;
    }

