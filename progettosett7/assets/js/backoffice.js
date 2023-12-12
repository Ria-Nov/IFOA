const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkxNWMwNTgzNTAwMTg1MjJjOTUiLCJpYXQiOjE3MDIzNjk1NTgsImV4cCI6MTcwMzU3OTE1OH0.FIxKHIdFw_DeyM4Xe61FlqMRZ9Xq1sqX3X7D0vCidG4";
const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

let products = [];

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("picId");

const getRecord = () => {
  fetch(url + id, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      products = data;
      handleData(data)
    });
};

getRecord();

function handleData(id){

        document.getElementById('inputName').value = id.name
        document.getElementById('inputPrice').value = id.price
        document.getElementById('inputDescription').value = id.description
        document.getElementById('inputBrand').value = id.brand
        document.getElementById('inputImageUrl').value = id.imageUrl
        document.getElementById('productPhoto').src = id.imageUrl
}

const sendData = (action, id) => {
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value
    }

    const finalUrl = action === 'edit' ? url + id : url

    fetch(finalUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
    .then((response) => response.json())
    .then(data => {
            products.push(data)
            location.href = 'index.html'
        }
    )}


const modifyData = () => {
    const newRecord = {
      name: document.getElementById("inputName").value,
      brand: document.getElementById("inputBrand").value,
      description: document.getElementById("inputDescription").value,
      price: document.getElementById("inputPrice").value,
      imageUrl: document.getElementById("inputImageUrl").value,
    };
  
    fetch(url + id, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(newRecord),
    }).then((response) => response.json())
    .then(data =>  {
    location.href="index.html"})
  };

const deleteRecord = () => {
    const finalUrl = url + id;
    fetch(finalUrl, {
      method: "DELETE",
      headers: headers,
    }).then(() => {
        location.href = 'index.html'
    });
  };

const form = document.querySelector("form");

const resetForm = () => {
  form.reset();
};

const cancellaButton = document.getElementById('cancellaButton')
const modificaButton = document.getElementById('modificaButton')
const saveButton = document.getElementById('buttonSave')

const isModificaMode = () => {
  return new URLSearchParams(window.location.search).get("picId") !== null;
};


cancellaButton.style.display = isModificaMode() ? "inline-block" : "none";
modificaButton.style.display = isModificaMode() ? "inline-block" : "none";
saveButton.style.display = isModificaMode() ? "none" : "inline-block";
