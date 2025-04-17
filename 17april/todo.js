const container = document.querySelector(".container");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const add = document.querySelector("#add");
let list = JSON.parse(localStorage.getItem("list")) || [];

function addTodo() {
    
    let newToDo={
        id: Date.now(),
        text: input.value,
    }
    list.push(newToDo);
    GetTodos()
    localStorage.setItem("list", JSON.stringify(list));
    input.value = "";
}
add.addEventListener("click", function () {
  addTodo(); 
});



function GetTodos(){
    ul.innerHTML = "";
    list.forEach((element) => {
        const li = document.createElement("li");
        const button = document.createElement("button")
        li.textContent = element.text;
        button.textContent = "Delete";
        ul.appendChild(li);
        li.appendChild(button)
    })
}
button.addEventListener("click",function(){
    

})

GetTodos()