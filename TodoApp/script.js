const inputBox = document.getElementById("input-box")
let btn = document.getElementById("btn");
let myTasks = document.getElementById('list-container')
btn.addEventListener('click',function(){
    if(inputBox.value===""){
        alert("You must add Something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        myTasks.appendChild(li);
    }
    inputBox.value = ""
    saveData();
})

function saveData(){
    localStorage.setItem("data",myTasks.innerHTML)
}

function showTask(){
    myTasks.innerHTML = localStorage.getItem("data")
}
showTask()