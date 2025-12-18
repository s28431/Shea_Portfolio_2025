
//Check
console.log("hey");

//DOM ele
const taskFrom = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//let for change :3 
//State
let tasks = [];

//listen for new list a ma bob
//e stands for the event (in this case submit) its built into js
taskFrom.addEventListener('submit', (e) =>{
    e.preventDefault()
    //.value is the stuff typed inside :p
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }
    //you could also type if (text ==="") return; 
    //in this case
    tasks.push(text);
    console.log(tasks);
    //set the value to make it empty again after using the data
    taskInput.value = ``;
    //for saving the stuff
    saveItem();
    //render means showing it on screen :D
    renderTaskList();
});

//save to storage
function saveItem(){
    localStorage.setItem(`tasks`, JSON.stringify(tasks))
}

//prep for tasks
function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

//make the list show up
function renderTaskList(){
    taskList.innerHTML = ``;
    tasks.forEach((item, i)=> {
        taskList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <input type="checkbox" class="form-check-input me-2" checked=true>
        <span>${item}</span>
        <button class="btn btn-sm btn-danger ms-3" id="delete${i}" onClick="deleteTask(${i})>Delete</button>
      </li>`
    })
}

function deleteTask(taskId) {
    tasks = tasks.splice(taskId,1);
    saveItem();
    renderTaskList();
}

loadTasks();
renderTaskList();