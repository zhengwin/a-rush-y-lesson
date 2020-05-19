let submitBtn = document.querySelector("#submit-todo");
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const todoText = e.target.form[0].value;
    e.target.form[0].value = "";

    let newTodo = document.createElement("div");
    newTodo.classList.add("todo-item");
    
    let newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoText;
    let newTodoBtn = document.createElement("button");
    newTodoBtn.innerText = "Delete";

    newTodo.appendChild(newTodoLi);
    newTodo.appendChild(newTodoBtn);

    let ul = document.querySelector("ul");
    ul.appendChild(newTodo);
}
