const inputBox = document.getElementById("input-box");
const LIST = document.getElementById("list");
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        LIST.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
}
LIST.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName==="span"){
        e.target.parentElement.remove();
    }
}, false);
function saveData(){
    localStorage.setItem("data",LIST.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();