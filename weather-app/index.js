const img = document.querySelector("img");
const button = document.getElementById("btn");
const input = document.getElementById("queryInput");
const elData = document.getElementById("data");
const loader = document.getElementById("loader");

const getQuery = async () => {
  let query = input.value;

  if (query === "") {
    alert("please enter a city name!");
  } else {
    const key = "f2eefb03b996645303c282901097b8c1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`;
    const response = await fetch(apiUrl, { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);
    input.value = "";
  }
};

button.addEventListener("click", getQuery);
