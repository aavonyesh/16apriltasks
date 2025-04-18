const URL = "http://localhost:3000/cards/";
const row = document.querySelector(".row");
const btn_danger = document.querySelector(".btn-danger");

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}
getData(URL);

function generateCard(array) {
  array.forEach((element) => {
    row.innerHTML += `
        <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <a href="#" class="btn btn-primary">${element.price}</a>
              <a href="#" class="btn btn-danger">Delete</a>
              <a href="#" class="btn btn-warning">Edit</a>
            </div>
          </div>
    </div>
        `;
  });
  const deleteButtons = querySelectorAll(".btn-danger");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = button.getAttribute("data-id");
      deleteItemById(URL, id);
    });
  });
}

async function setCards() {
  const data = await getData(URL);
  generateCard(data);
}

async function deleteItemById(url, id) {
    const res = await fetch(`${url}/${id}`, { method: "delete" });
    const data = await res.json();
    console.log(data);

}
setCards();
