let addBtn = document.getElementById("add");
let inputTask = document.getElementById("task");
let taskList = document.querySelector(".tasks");
let checkboxes = document.querySelectorAll("input[type=checkbox]");
console.log(checkboxes);
let allTodos = [];

function addTodo() {
  let todo = {
    id: Date.now(),
    task: inputTask.value,
    completed: false,
  };
  let todos = localStorage.getItem("allTodos");
  if (todos && todos.length > 0) {
    allTodos = [...JSON.parse(todos)];
  }
  allTodos.push(todo);
  //console.log(allTodos);
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
  displayTodos();
  inputTask.value = "";
}

function displayTodos() {
  let todos = JSON.parse(localStorage.getItem("allTodos"));
  if (!todos) return;
  taskList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let task = ` 
        <div style="width: 100%;">
            <div class="task" style = ${
              todos[i].completed
                ? "background-color:#c6e9a7;"
                : "background-color:#ccbed7;"
            }>
                <input type="checkbox" id="" style="cursor: pointer"; ${
                  todos[i].completed ? "checked" : ""
                }>
                <input type="text" value="${todos[i].task}" id="${
      todos[i].id
    }"class="msg" readonly>
                <button class="edit">✏️</button>
                <button class="delete" onclick="deleteTodo(${
                  todos[i].id
                })" >❌</button>
            </div>
         </div>`;
    taskList.insertAdjacentHTML("afterbegin", task);
  }
}

function deleteTodo(id) {
  let tasks = JSON.parse(localStorage.getItem("allTodos"));

  tasks = tasks.filter((task) => {
    return task.id !== id;
  });

  localStorage.setItem("allTodos", JSON.stringify(tasks));
  displayTodos();
}

displayTodos();
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});
