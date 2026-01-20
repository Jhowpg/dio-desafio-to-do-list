let textBox = document.querySelector("#todo-input");
let addBtn = document.querySelector("#add-btn");
let filters = document.querySelector(".filters");
let todoList = document.querySelector("#todo-list");
let clearBtn = document.querySelector("#clear-completed");
let itemsLeft = document.querySelector("#items-left");

addBtn.addEventListener("click", function () {
  minhaLogicaDeAdicionar(textBox.value);
});

textBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    minhaLogicaDeAdicionar(textBox.value);
  }
});

todoList.addEventListener("click", function (e) {
  const itemClicado = e.target.closest(".delete-btn");
  if (itemClicado) {
    const itemList = itemClicado.closest("li");
    itemList.remove();
    salvarTarefasNavegador();
    atualizarContador();
  } else if (e.target.type === "checkbox") {
    const itemList = e.target.closest("li");
    itemList.classList.toggle("completed");
    salvarTarefasNavegador();
    atualizarContador();
  }
});

filters.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    filters.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    const filter = e.target.textContent.trim();
    const items = todoList.querySelectorAll("li");
    items.forEach(function (item) {
      const isCompleted = item.classList.contains("completed");

      switch (filter) {
        case "Todas":
          item.style.display = "";
          break;
        case "Pendentes":
          if (isCompleted) {
            item.style.display = "none";
          } else {
            item.style.display = "";
          }
          break;
        case "Concluídas":
          if (isCompleted) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
          break;
      }
    });
  }
});

clearBtn.addEventListener("click", function () {
  const completedItems = todoList.querySelectorAll("li.completed");
  completedItems.forEach(function (item) {
    item.remove();
    atualizarContador();
    salvarTarefasNavegador();
  });
});


function atualizarContador() {
  const totalItems = todoList.querySelectorAll("li:not(.completed)").length
  const counterText = document.querySelector("#items-left");
  if (counterText) {
    counterText.textContent = totalItems;
  }

}

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
    atualizarContador();
    salvarTarefasNavegador();
    textBox.value = "";
    textBox.focus();
  }
}

function salvarTarefasNavegador() {
  const tarefas = [];
  const itens = todoList.querySelectorAll("li");
  itens.forEach(function (item) {
    const tarefa = {
      texto: item.querySelector(".todo-text").textContent,
      concluida: item.classList.contains("completed")
    };
    tarefas.push(tarefa);
  });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefasNavegador() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.forEach(function (tarefa) {
    const itemList = document.createElement("li");
    if (tarefa.concluida) {
      itemList.classList.add("completed");
    }
    itemList.innerHTML = `
      <div class="todo-item">
        <input type="checkbox" ${tarefa.concluida ? "checked" : ""}>  
        <span class="todo-text">${tarefa.texto}</span>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    `;
    todoList.appendChild(itemList);
  });
  atualizarContador();
}

carregarTarefasNavegador();
