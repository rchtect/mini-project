window.addEventListener("load", main);

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

function main() {
  const newData = new Date();
  let monthName = month[newData.getMonth()];
  document.getElementById("currentMonth").innerHTML = monthName;
}
