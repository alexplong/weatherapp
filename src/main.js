/** @format */
import { Forecast } from "./forecast.js";
import render from "./render.js";

const cityForm = document.querySelector("form");
const forecast = new Forecast();

// 44-image icon types from Accuweather

cityForm.addEventListener("submit", (event) => {
  e.preventDefault();

  // get city value and reset after submit
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the UI with new city
  forecast
    .updateCity(city)
    .then((data) => render(data))
    .catch((err) => console.log(err));

  localStorage.setItem("city", city); //save to localStorage
});

// if (localStorage.getItem("city")) {
//   //load preset if (localStorage)
//   forecast
//     .updateCity(localStorage.getItem("city"))
//     .then((data) => updateUI(data))
//     .catch((err) => console.log(err));
// }
