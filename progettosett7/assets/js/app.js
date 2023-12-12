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

const sendData = (action, id) => {
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }

    fetch(url + id, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
    .then((response) => response.json())}

// const deleteRecord = (id) => {
//   if (confirm("Confermi la tua scelta")) {
//     const finalUrl = url + id;
//     fetch(finalUrl, {
//       method: "DELETE",
//       headers: headers,
//     }).then(() => {
//       products.splice(
//         products.findIndex((element) => element._id === id),
//         1
//       );
//       createTable(products);
//     });
//   }
// };


function handleForm(data){
        document.getElementById('inputName').value = data.name
        document.getElementById('inputPrice').value = data.price
        document.getElementById('inputDescription').value = data.description
        document.getElementById('inputBrand').value = data.brand
        document.getElementById('inputImageUrl').value = data.imageUrl
        document.getElementById('productPhoto').src = data.imageUrl
        document.getElementById('productPhoto').alt = "Immagine prodotto " + data.name
}

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
