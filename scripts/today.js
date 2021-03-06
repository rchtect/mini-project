/** The start of the program */
function today() {
  startClock();
}

/** Keeps the time and date updated on the page */
function startClock() {
  renderClock();
  setInterval(renderClock, 1000);

  getFullDate();
  setInterval(getFullDate, 1000);
}

/** Updates the page with current time and weekday */
function renderClock() {
  const date = new Date();

  const timeElement = document.getElementById("time");
  timeElement.innerText = getCurrentTimeString(date);

  const weekdayElement = document.getElementById("weekday");
  weekdayElement.innerText = getCurrentWeekday(date);
}
/**
 * Takes a date and returns current weekday
 * @param {Date} date
 * @returns {String}
 */
function getCurrentWeekday(date) {
  const weekday = date.getDay();

  switch (weekday) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

/**
 * Constructs the time string from a date
 * @param {Date} date
 * @returns {String} in format HH:mm
 */
function getCurrentTimeString(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return hours + ":" + minutes;
}

/** Adds full date to page */
function getFullDate() {
  const fullDate = document.getElementById("full-date");

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();

  const currentFullDate = year + "/" + month + "/" + date;

  fullDate.innerHTML = currentFullDate;
}
