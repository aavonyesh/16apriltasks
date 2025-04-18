const URL = "https://fakestoreapi.com/products/";
const tbody = document.querySelector("tbody");
const cardDiv = document.querySelector("#cardDiv");






function generateCards(array) {
  console.log(array);
  array.forEach((item) => {
    cardDiv.innerHTML += `
         <div class="row g-0" data-id="${item.id}">
                  <div class="col-md-4">
                    <img src="${item.image}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.price}</p>
                      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
        `;
        
  } );


  cardDiv.querySelectorAll(".row").forEach((item) => {
    item.addEventListener("click", function () {
      const id = item.getAttribute("data-id");
      console.log(id);
      window.location.href = "touchcard.html?id=" + id;
      getElementById(array, id);
    });
  });
}
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  
async function generateCardsFromApi(){
    const data = await getData(URL);
    console.log(data);
    generateCards(data);
    
}
function getElementById(array,id){
    array.forEach((item)=>{
        if(id===item.id){
            console.log(item)
        }
    })

}
async function getElementByIdFromApi(){
    const data = await getData(URL);
    getElementById(data,5);
}



getElementByIdFromApi()
generateCardsFromApi();
