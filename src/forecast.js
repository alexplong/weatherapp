/** @format */
class Forecast {
  constructor() {
    this.key = "RCJSlbF5C4E1REu3ddXG2GtvD1UMsUIY"; // Accuweather
    this.fivedayindicesURI =
      "http://dataservice.accuweather.com/indices/v1/daily/5day/";
    this.fivedayforecastURI =
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";

    this.OpenWeatherkey = "6ff23805c07d1d4e0d88ffa4c9b4ff52"; // OpenWeather
    this.OpenWeatherAPI = "https://api.openweathermap.org/data/2.5/weather";
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const currWeather = await this.currentConditions(cityDets.Key);
    const fiveDayWeather = await this.fiveDayForecast(cityDets.Key);
    const fiveDayIndex = await this.fiveDayIndices(cityDets.Key);
    const currentWeatherData = await this.currentData(
      cityDets.GeoPosition["Latitude"],
      cityDets.GeoPosition["Longitude"]
    );
    return {
      cityDets,
      currWeather,
      fiveDayWeather,
      fiveDayIndex,
      currentWeatherData,
    }; // give object header name of variable and fill in with variable
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async currentConditions(cityid) {
    const query = `${cityid}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
  async fiveDayForecast(cityid) {
    const query = `${cityid}?apikey=${this.key}`;
    const response = await fetch(this.fivedayforecastURI + query);
    const data = await response.json();
    console.log(data);
    return data;
  }
  async fiveDayIndices(cityid) {
    const query = `${cityid}?apikey=${this.key}`;
    const response = await fetch(this.fivedayindicesURI + query);
    const data = await response.json();
    return data;
  }
  async currentData(lat, lon) {
    const query = `?lat=${lat}&lon=${lon}&appid=${this.OpenWeatherkey}&units=imperial`;
    const response = await fetch(this.OpenWeatherAPI + query);
    const data = await response.json();
    return data;
  }
}

export { Forecast };
