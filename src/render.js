/** @format */
// cache DOM
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".day-image");
const icon = document.querySelector(".weather-image");
const forecastCard = document.querySelectorAll(".forecast");

const render = (CityData) => {
  // const cityDets = data.cityDets;  // can be simplified
  // const weather = data.weather;    // similar to creation of shorthand notation
  const { cityDets, currWeather, fiveDayWeather } = CityData; // destructure properties

  // update details template
  details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${currWeather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${currWeather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

  forecastCard.forEach((card, index) => {
    let daily = {
      dayIcon: fiveDayWeather["DailyForecasts"][index].Day["Icon"],
      dayPhrase: fiveDayWeather["DailyForecasts"][index].Day["IconPhrase"],
      nightIcon: fiveDayWeather["DailyForecasts"][index].Night["Icon"],
      nightPhrase: fiveDayWeather["DailyForecasts"][index].Night["IconPhrase"],
      tempLow:
        fiveDayWeather["DailyForecasts"][index].Temperature["Minimum"].Value,
      tempHigh:
        fiveDayWeather["DailyForecasts"][index].Temperature["Maximum"].Value,
    };

    let temp = document.createElement("span");
    // let icon = document.createElement("img");
    temp.textContent = `Low: ${daily["tempLow"]} - High: ${daily["tempHigh"]}`;
    icon.setAttribute("src", `accuweather_icons/0${daily["dayIcon"]}-s.png`);

    card.append(temp);
    // console.log(fiveDayWeather["DailyForecasts"][index]);
  });

  // update night & day
  // const iconSrc = `accuweather_icons/0${currWeather.WeatherIcon}-s.png`;
  // icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (currWeather.IsDayTime) {
    timeSrc = "accuweather_icons/day.svg";
  } else {
    timeSrc = "accuweather_icons/night.svg";
  }

  time.setAttribute("src", timeSrc);

  // remove d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

export default render;
