let textBox = document.querySelector("#todo-input");
let addBtn = document.querySelector("#add-btn");
let filterBtns = document.querySelector(".filter-btn");
let todoList = document.querySelector("#todo-list");
let clearBtn = document.querySelector("clear-completed");
let itemsLeft = document.querySelector("#items-left");
let clearCompleted = document.querySelector("#clear-completed");

addBtn.addEventListener("click", function () {
  minhaLogicaDeAdicionar(textBox.value);
});

textBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    minhaLogicaDeAdicionar(textBox.value);
  }
});

function minhaLogicaDeAdicionar(task) {
  task = task.trim();

  if (task !== "") {
    const itemList = document.createElement("li");
    itemList.innerHTML = `
      <div class="todo-item">
        <input type="checkbox">
        <span class="todo-text">${task}</span>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    `;
    todoList.appendChild(itemList);
    textBox.value = "";
    textBox.focus();
  }
}
