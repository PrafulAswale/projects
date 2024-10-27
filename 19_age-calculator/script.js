let getBtn = document.getElementById("calBtn");

function getDOB() {
  let inputDOB = document.getElementById("DOB").value;
  let today = new Date();
  console.log(inputDOB);
  let DOB = new Date(inputDOB);
  let day = DOB.getDate();
  let month = DOB.getMonth() + 1;
  let year = DOB.getFullYear();

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  let yearDiff = currentYear - year;
  let monthDiff = currentMonth - month;
  let dateDiff = currentDate - day;

  if (yearDiff < 0) console.log("invalid date");
  else if (monthDiff > 0) {
    console.log(yearDiff);
  } else if (monthDiff === 0 && dateDiff >= 0) {
    console.log(yearDiff);
  } else {
    yearDiff = yearDiff - 1;
    if (monthDiff <= 0)
      if (dateDiff > 0) monthDiff = 12 + monthDiff;
      else monthDiff = 11 - monthDiff;
  }
  if (dateDiff < 0) {
    dateDiff = 30 + dateDiff;
    monthDiff -= 1;
  }

  if (yearDiff < 0)
    document.getElementById("currentAge").innerHTML = "Invalid Date";
  else {
    displayAge(dateDiff, monthDiff, yearDiff);
  }
}

function displayAge(date, month, year) {
  document.getElementById("currentAge").innerHTML =
    "Your current Age is " +
    year +
    " years " +
    month +
    " months " +
    date +
    " days";
}
getBtn.addEventListener("click", () => {
  getDOB();
});
