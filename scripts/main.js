currentDate = ""
document.addEventListener("DOMContentLoaded", (event) => {
  var date = document.querySelectorAll(".date-btn");
    for (var i = 0; i < date.length; i++) {
        date[i].addEventListener("click", function (event) {
            localStorage.setItem("date", currentDate);
    });
    }
  today();
  sortable();
  todo();
  calendar();
});
