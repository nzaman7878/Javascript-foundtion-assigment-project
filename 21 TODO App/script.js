/* 21.TODO App
Create a simple to-do app to add TODO items to the list through an input field and a button. */

// Get the input field, button, and todo list
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

// Add event listener to the button to add a new todo
addTodoBtn.addEventListener("click", function() {
  if (todoInput.value) {
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
});

// Add event listener to the todo list to toggle the "done" class
todoList.addEventListener("click", function(event) {
  const todo = event.target;
  if (todo.classList.contains("done")) {
    todo.classList.remove("done");
  } else {
    todo.classList.add("done");
  }
});
