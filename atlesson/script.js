/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */
// const workers = [
    //   {
        //     name: "John",
        //     surname: "Doe",
        //     age: "24",
        //     id: "1",
        //   },
        //   {
            //     name: "Jane",
            //     surname: "Doenne",
            //     age: "26",
            //     id: "2",
            //   },
            //   {
                //     name: "Jack",
                //     surname: "Daniels",
                //     age: "42",
                //     id: "3",
                //   },
                // ];
                
                // console.log(workers);
                
const URL = "https://67fe475358f18d7209ed7ab7.mockapi.io/workers/"
const tBody = document.querySelector("tbody");
function generateTableRow(array) {
    console.log(array);
    array.forEach((element) => createTableItem(element));
  
}
function createTableItem(element) {
  const tableRow = document.createElement("tr");
  let tableRowTh = document.createElement("th");
  let tableRowTd = document.createElement("td");

  let tableRowTd2 = document.createElement("td");
  let tableRowTd3 = document.createElement("td");
  tableRowTh.innerText = "1";
  tableRowTd.innerText = element.name;
  tableRowTd2.innerText = element.id;
  tableRowTd3.innerText = "x";
  tableRow.appendChild(tableRowTh);
  tableRow.appendChild(tableRowTd);
  tableRow.appendChild(tableRowTd2);
  tableRow.appendChild(tableRowTd3);
  tBody.appendChild(tableRow);
    tableRowTd3.addEventListener("click", function() {
        deleteItemById(URL + element.id);
        tableRow.remove();
    });
}


async function callData(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
    
}
async function deleteItemById(url){
    const res = await fetch(url, {method: "DELETE"});
    const data = await res.json();
    console.log(data);
    return data;
    
}
async function generateTableRowFromApi(){

    const data = await callData(URL);
    console.log(data);
    
    generateTableRow(data);
}

generateTableRowFromApi()