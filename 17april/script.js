const plus = document.getElementById("plus")
const count = document.getElementById("count")
const minus = document.getElementById("minus")
let total = 0 

plus.addEventListener("click",function(){
    total++
    localStorage.setItem("total",total)
    count.innerText = total
})
minus.addEventListener("click",function(){
    total--
    localStorage.setItem("total",total)
    count.innerText = total
})
if(localStorage.getItem("total")){
    total = localStorage.getItem("total")
    count.innerText = total

}