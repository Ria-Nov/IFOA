const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkxNWMwNTgzNTAwMTg1MjJjOTUiLCJpYXQiOjE3MDIzNjk1NTgsImV4cCI6MTcwMzU3OTE1OH0.FIxKHIdFw_DeyM4Xe61FlqMRZ9Xq1sqX3X7D0vCidG4";
const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

let products = [];

const getRecords = () => {
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      products = data;
      createTable(data);
    });
};

getRecords();

function createTable(data) {
  const row = document.querySelector(".row");
  row.innerHTML = "";

  data.forEach((element) => {
    let newCard = `<div class="card" style="width: 18rem;">
  <img src=${element.imageUrl} class="card-img-top" alt="Nokia">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.description}</p>
    <button type="button" class="btn btn-sm btn-outline-primary mx-1" onclick="goToDetails('${element._id}')">Dettagli</button>
                    <button type="button" class="btn btn-sm btn-outline-warning mx-1" onclick="goToEdit('${element._id}')">Modifica</button>
  </div>
</div>
        `;
    row.innerHTML += newCard;
  });
}

const goToDetails = (id) => {
  window.location.assign("./detail.html?picId=" + id);
};

const goToEdit = (id) => {
    window.location.assign("./backoffice.html?picId=" + id);
  };
