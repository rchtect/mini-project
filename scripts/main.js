document.addEventListener("DOMContentLoaded", (event) => {
  var date = document.querySelectorAll(".date-btn");
  for (var i = 0; i < date.length; i++) {
    if (i+1 == JSON.parse(localStorage.getItem("date"))) {
        date[i].style.color = "var(--accent)"
    }
        date[i].addEventListener("click", function (event) {
          localStorage.setItem("date", currentDate);
        })
        let a = date[i].innerText
        if (JSON.parse(localStorage.getItem(`todos${a}`)) != null) {
          let showAllTodo = document.createElement("span")
          showAllTodo.classList.add("totalTodo")
          date[i].appendChild(showAllTodo).innerText = JSON.parse(localStorage.getItem(`todos${a}`)).length
        }
  }
  calendar();
  today();
  sortable();
  todo();
});
