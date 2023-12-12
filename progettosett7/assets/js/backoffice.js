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

const getRecords = () => {
    fetch(url + id, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        products = data;
      });
  };

  getRecords();

  const sendData = (id) => {
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

    const deleteRecord = (id) => {
          if (confirm("Confermi la tua scelta")) {
            const finalUrl = url + id;
            fetch(finalUrl, {
              method: "DELETE",
              headers: headers,
            }).then(() => {
            //   delete
            });
          }
        };

