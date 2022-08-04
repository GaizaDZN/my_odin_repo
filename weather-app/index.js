const img = document.querySelector("img");
const button = document.getElementById("btn");
const input = document.getElementById("queryInput");
const elData = document.getElementById("data");
const loader = document.getElementById("loader");
const infoName = document.getElementById("infoName");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const infoContainer = document.getElementById("info");

// convert kelvins to fahrenheit
const kelvinToFahrenheit = (k) => {
  return ((k - 273.15) * (9 / 5) + 32).toFixed(0);
};

const getQuery = async () => {
  let query = input.value.toLowerCase();

  if (query === "") {
    alert("please enter a city name!");
  } else {
    const key = config.weatherapi;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
    const response = await fetch(apiUrl, { mode: "cors" });
    const weatherData = await response.json();

    if (loader.classList.contains("invisible")) {
      loader.classList.remove("invisible");
    }
    loader.textContent = "loading...";
    infoContainer.classList.add("invisible");
    setTimeout(() => {
      infoName.textContent = weatherData.name;
      info1.textContent = `Temperature: ${kelvinToFahrenheit(
        weatherData.main.temp_min
      )}°F - ${kelvinToFahrenheit(weatherData.main.temp_max)}°F`;
      info2.textContent = `Weather: ${weatherData.weather[0].main}`;
      info3.textContent = `Description: ${weatherData.weather[0].description}`;
      info4.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      console.log(weatherData);
      input.value = "";
      loader.classList.add("invisible");
      infoContainer.classList.remove("invisible");
    }, Math.floor(Math.random() * 500) + 300);
  }
};

button.addEventListener("click", getQuery);
