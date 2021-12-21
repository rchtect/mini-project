const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function calendar() {
  document.querySelector('.currentDate').innerHTML += "Current selected day is" + " " + JSON.parse(localStorage.getItem("date"))
  const newData = new Date();
  let monthName = month[newData.getMonth()];
  document.getElementById("currentMonth").innerHTML = monthName;
  currentDate = JSON.parse(localStorage.getItem("date"))
}
