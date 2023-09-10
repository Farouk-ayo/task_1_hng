// this is the function to get the current day of the week
function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}
// Updating the HTML elements with the current day and UTC time
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  getCurrentDayOfTheWeek();

// this is the function to get the current UTC time in milliseconds
function getCurrentUTCTimeMilliseconds() {
  const utcTimeInMilliseconds = new Date().getTime();
  // updating the current time in milliseconds
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time in Milliseconds: ${utcTimeInMilliseconds}`;
}

setInterval(getCurrentUTCTimeMilliseconds, 1000);
