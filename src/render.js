/** @format */

import { weatherIcon, dayIcon } from "./image.call.js";

// cache DOM
const time = document.querySelector(".day-image");
const icon = document.querySelector(".weather-image");

const render = (CityData) => {
  // const cityDets = data.cityDets;  // can be simplified
  // const weather = data.weather;    // similar to creation of shorthand notation
  const { cityDets, currWeather, fiveDayWeather, currentWeatherData } =
    CityData; // destructure properties

  // update details template
  const currentConditions = {
    city: cityDets.EnglishName,
    currentWeather: currWeather.WeatherText,
    currentTempC: currWeather.Temperature.Metric.Value,
    currentTempF: currWeather.Temperature.Imperial.Value,
  };

  const detailedConditions = {
    temp: currentWeatherData.main["temp"],
    feels_like: currentWeatherData.main["feels_like"],
    temp_min: currentWeatherData.main["temp_min"],
    temp_max: currentWeatherData.main["temp_max"],
    humidity: currentWeatherData.main["humidity"],
  };

  // forecastCard.forEach((card, index) => {
  //   let daily = {
  //     date: fiveDayWeather["DailyForecasts"][index]["Date"],
  //     dayIcon: fiveDayWeather["DailyForecasts"][index].Day["Icon"],
  //     dayPhrase: fiveDayWeather["DailyForecasts"][index].Day["IconPhrase"],
  //     nightIcon: fiveDayWeather["DailyForecasts"][index].Night["Icon"],
  //     nightPhrase: fiveDayWeather["DailyForecasts"][index].Night["IconPhrase"],
  //     tempLowF:
  //       fiveDayWeather["DailyForecasts"][index].Temperature["Minimum"].Value,
  //     tempHighF:
  //       fiveDayWeather["DailyForecasts"][index].Temperature["Maximum"].Value,
  //   };

  //   let temp = document.createElement("span");
  //   temp.textContent = `Low: ${daily["tempLowF"]} - High: ${daily["tempHighF"]}`;

  //   card.append(temp);
  // });

  // icon.setAttribute("src", weatherIcon(currWeather.WeatherIcon));
  // time.setAttribute("src", dayIcon(currWeather.IsDayTime));
};

export default render;
