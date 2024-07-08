const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// pop up for unwritten

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ;
        li.appendChild(span) ;
    }

    inputBox.value = "";

    //To save the data while refreshing the site

    saveData();
}

// striking the completed work

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save function

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();