const apiKey = "yourApiKey";
let cityName = document.getElementById("city-name");
let date = document.getElementById("date");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let windSpeed = document.getElementById("wind-speed");
let getWetherBtn = document.getElementById("getBtn");

async function getWeatherData() {
  try {
    const cnt = 10;
    const cityInputtedByUser = document.getElementById("input-city").value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputtedByUser}&appid=${apiKey}&units=metric`;

    const responce = await fetch(apiUrl);
    const data = await responce.json();

    //Display error if user types invalid city or no city
    if (data.cod == "400" || data.cod == "404") {
      // error.innerHTML = `Not valid city. Please input another city`;
      alert("Not valid city. Please input another city");
      return;
    }

    showWeather(data);
  } catch (error) {
    console.log(error);
  }
}

function convertToLocalTime(dt) {
  // Create a new Date object by multiplying the Unix timestamp by 1000 to convert it to milliseconds
  // Will produce a time in the local timezone of user's computer
  const date = new Date(dt * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours() % 12 || 12).padStart(2, "0"); // Convert 24-hour to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM"; // Determine AM/PM

  // Formatted date string in the format: YYYY-MM-DD hh:mm:ss AM/PM
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;
}

function showWeather(data) {
  cityName.innerText = data.name;
  date.innerText = convertToLocalTime(data.dt);
  temp.innerText = data.main.temp + "°C";
  weather.innerText = data.weather[0].description;
  windSpeed.innerHTML = "Wind Speed: " + data.wind.speed + "m/s";
}

getWetherBtn.addEventListener("click", () => {
  getWeatherData();
});
