// JavaScript code is here
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.textContent = todoText;

    const actions = document.createElement("div");
    actions.classList.add("todo-actions");

    const markBtn = document.createElement("button");
    markBtn.textContent = "Mark Done";
    markBtn.classList.add("mark-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    actions.appendChild(markBtn);
    actions.appendChild(deleteBtn);
    todoItem.appendChild(actions);

    markBtn.addEventListener("click", () => {
        todoItem.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(todoItem);
    });

    todoList.appendChild(todoItem);
    todoInput.value = "";
});