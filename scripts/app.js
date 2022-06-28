/** @format */

//app/
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");

const forecast = new Forecast();

// there are 44-image icon types from accuweather

const updateUI = (data) => {
  console.log(data);
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  // destructure properties - does same as above. Also similar to creation of shorthand notation
  const { cityDets, weather } = data;

  // update details template
  details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

  // update night & day
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }

  time.setAttribute("src", timeSrc);

  // remove d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city value and reset after submit
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the UI with new city
  forecast
    .updateCity(city)
    .then((data) => updateUI(data))
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
