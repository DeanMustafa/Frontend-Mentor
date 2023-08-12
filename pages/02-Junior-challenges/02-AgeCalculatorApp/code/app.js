// INPUT
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
// LABEL
const labelDay = document.getElementById("label-day");
const labelMonth = document.getElementById("label-month");
const labelYear = document.getElementById("label-year");
// ALERT WRONG
const alertDayWrong = document.getElementById("alert-day-wrong");
const alertMonthWrong = document.getElementById("alert-month-wrong");
const alertYearWrong = document.getElementById("alert-year-wrong");
// ALERT EMPTY
const alertDayEmpty = document.getElementById("alert-day");
const alertMonthEmpty = document.getElementById("alert-month");
const alertYearEmpty = document.getElementById("alert-year");
// SPAN
const outputDay = document.getElementById("output-day");
const outputMonth = document.getElementById("output-month");
const outputYear = document.getElementById("output-year");
// BUTTON
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  if (inputDay.value > 31 || inputMonth.value > 12 || inputYear.value > 2023) {
    // default style
    alertDayEmpty.style.display = "none";
    alertMonthEmpty.style.display = "none";
    alertYearEmpty.style.display = "none";

    inputDay.style.borderColor = "hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
    alertDayWrong.style.display = "unset";

    inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
    alertMonthWrong.style.display = "unset";

    inputYear.style.borderColor = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
    alertYearWrong.style.display = "unset";
  } else if (
    inputDay.value == 0 ||
    inputMonth.value == 0 ||
    inputYear.value == 0
  ) {
    // default style
    alertDayWrong.style.display = "none";
    alertMonthWrong.style.display = "none";
    alertYearWrong.style.display = "none";

    inputDay.style.borderColor = "hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
    alertDayEmpty.style.display = "unset";

    inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
    alertMonthEmpty.style.display = "unset";

    inputYear.style.borderColor = "hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
    alertYearEmpty.style.display = "unset";
  } else {
    // default style
    alertDayWrong.style.display = "none";
    alertMonthWrong.style.display = "none";
    alertYearWrong.style.display = "none";

    alertDayEmpty.style.display = "none";
    alertMonthEmpty.style.display = "none";
    alertYearEmpty.style.display = "none";

    alertDayEmpty.style.display = "none";
    alertMonthEmpty.style.display = "none";
    alertYearEmpty.style.display = "none";

    inputDay.style.borderColor = "hsl(0, 0%, 86%)";
    labelDay.style.color = "hsl(0, 1%, 44%)";
    inputMonth.style.borderColor = "hsl(0, 0%, 86%)";
    labelMonth.style.color = "hsl(0, 1%, 44%)";
    inputYear.style.borderColor = "hsl(0, 0%, 86%)";
    labelYear.style.color = "hsl(0, 1%, 44%)";

    let birthDay = inputDay.value;
    let birthMonth = inputMonth.value;
    let birthYear = inputYear.value;

    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    let ageDay, ageMonth, ageYear;

    ageYear = currentYear - birthYear;

    if (currentMonth >= birthMonth) {
      ageMonth = currentMonth - birthMonth;
    } else {
      ageYear--;
      ageMonth = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
      ageDay = currentDay - birthDay;
    } else {
      ageMonth--;
      ageDay = exactDay(birthYear, birthMonth) + currentDay - birthDay;
    }

    if (ageMonth < 0) {
      ageMonth = 11;
      ageYear--;
    }
    console.log(ageDay, ageMonth, ageYear);

    outputDay.innerHTML = ageDay;
    outputMonth.innerHTML = ageMonth;
    outputYear.innerHTML = ageYear;
  }
});

function exactDay(year, month) {
  return new Date(year, month, 0).getDate();
}
