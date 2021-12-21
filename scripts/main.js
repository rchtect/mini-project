document.addEventListener("DOMContentLoaded", (event) => {
  var date = document.querySelectorAll(".date-btn");
  for (var i = 0; i < date.length; i++) {
    if (i+1 == JSON.parse(localStorage.getItem("date"))) {
        date[i].style.color = "var(--accent)"
    }
        date[i].addEventListener("click", function (event) {
          localStorage.setItem("date", currentDate);
        });
  }
  calendar();
  today();
  sortable();
  todo();
});
