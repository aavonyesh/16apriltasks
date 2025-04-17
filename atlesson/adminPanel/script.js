const URL = "https://67fe475358f18d7209ed7ab7.mockapi.io/workers/";
const tbody = document.querySelector("tbody");
function generateTableRow(array) {
  console.log(array);
  array.forEach((element) => generateTableItem(element));
}

function generateTableItem(element) {
  const tr = document.createElement("tr");
  const tdForName = document.createElement("td");
  const tdForSurname = document.createElement("td");
  const tdForDescription = document.createElement("td");
  const tdForDelete = document.createElement("td")

  tdForName.innerText = element.name
  tdForSurname.innerText = element.surname;
  tdForDescription.innerText = element.description;
  tdForDelete.innerText = "x";
  tdForDelete.addEventListener("click",function(){
    deleteItemById(URL,element.id);
    tr.remove();

  })

  tr.appendChild(tdForName);
  tr.appendChild(tdForSurname);
  tr.appendChild(tdForDescription);
  tr.appendChild(tdForDelete)
  tbody.appendChild(tr);
}


async function callData (url) {
    const res = await fetch(url)
    const data = await res.json()
    return data;

}
async function generateTableRowFromApi(){
    const data = await callData(URL);
    generateTableRow(data);
    
}
async function deleteItemById(url,id){
    const res = await fetch(url+id,{method:"delete"})
    const data = await res.json();
    return data;
}
generateTableRowFromApi();