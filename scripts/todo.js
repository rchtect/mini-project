function todo() {
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const todosUL = document.getElementById("todos");
  const todos = JSON.parse(localStorage.getItem("todos" + JSON.parse(localStorage.getItem("date"))));
  if (todos) {
    todos.forEach((todo) => addTodo(todo));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
    updateLS();
    window.location.reload();
  });

  function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
      todoText = todo.text;
    }

    if (todoText) {
      const todoEl = document.createElement("li");
      const dot =
        "<span class='dot uncomplete-color' id='dot'><span class='inner-dot' id='inner-dot'><i class='fas fa-check icon' id='check'></i></span></span>";
      const todoTitle =
        "<span class='todo-title' id='todo-title'>" + todoText + "</span>";
      const bin = "<i class='far fa-trash-alt icon bin' id='bin'></i>";
      todoEl.classList.add("todo-item");
      todoEl.innerHTML += dot;
      todoEl.innerHTML += todoTitle;
      todoEl.innerHTML += bin;
      todoEl.classList.add("uncomplete-border");
      // On refresh add completed prop
      if (todo && todo.completed) {
        todoEl.classList.add("complete-border");
        todoEl.querySelector("#dot").classList.add("complete-color");
        todoEl.querySelector("#check").classList.add("complete-icon");
        todoEl.querySelector("#inner-dot").classList.add("complete-color");
        todoEl.querySelector("#todo-title").classList.add("complete-text");
      }
      if (todo && todo.date) {

      } else {
        if (currentDate == "") {
          todoEl.setAttribute("data-date", " ")
        } else {
          todoEl.setAttribute("data-date", currentDate)
        }
      }

      todoEl.querySelector("#dot").addEventListener("click", () => {
        if (todoEl.classList.contains("complete-border")) {
          todoEl.classList.remove("complete-border");
          todoEl.classList.add("uncomplete-border");
          todoEl.querySelector("#dot").classList.remove("complete-color");
          todoEl.querySelector("#dot").classList.add("uncomplete-color");
          todoEl.querySelector("#check").classList.remove("complete-icon");
          todoEl.querySelector("#inner-dot").classList.remove("complete-color");
          todoEl.querySelector("#todo-title").classList.remove("complete-text");
        } else {
          todoEl.classList.remove("uncomplete-border");
          todoEl.classList.add("complete-border");
          todoEl.querySelector("#dot").classList.remove("uncomplete-color");
          todoEl.querySelector("#dot").classList.add("complete-color");
          todoEl.querySelector("#check").classList.add("complete-icon");
          todoEl.querySelector("#inner-dot").classList.add("complete-color");
          todoEl.querySelector("#todo-title").classList.add("complete-text");
        }
        updateLS();
      });

      todoEl.querySelector("#bin").addEventListener("click", (e) => {
        e.preventDefault();
        todoEl.remove();
        updateLS();
      });

      document.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.preventDefault();
        todoEl.remove();
        empty = [];
        localStorage.setItem("todos" + JSON.parse(localStorage.getItem("date")), JSON.stringify(empty));
      });

      //   Update list on drag event
      document.querySelector(".todos").addEventListener(
        "drag",
        function (event) {
          updateLS();
        },
        false
      );
      // Delete all function

      todosUL.appendChild(todoEl);

      input.value = "";
    }
  }

  function updateLS() {
    todosEl = document.querySelectorAll("li");
    const todos = [];
    todosEl.forEach((todoEl) => {
      todos.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains("complete-border"),
        date: todoEl.dataset.date,
      });
    });
    localStorage.setItem("todos" + JSON.parse(localStorage.getItem("date")), JSON.stringify(todos));
  }
}


