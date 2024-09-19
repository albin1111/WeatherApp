import { weatherIcons } from "./icons";
import { convertUnixToTime } from "./timeUtil";

export const fetchWeatherData = async (city) => {
  if (city === "") return error;

  const allIcons = {
    // clear sky
    "01d": weatherIcons.clear_sky,
    "01n": weatherIcons.clear_sky,
    // few clouds
    "02d": weatherIcons.few_clouds,
    "02n": weatherIcons.few_clouds,
    // scattered clouds
    "03d": weatherIcons.scattered_clouds,
    "03n": weatherIcons.scattered_clouds,
    // broken clouds
    "04d": weatherIcons.broken_clouds,
    "04n": weatherIcons.broken_clouds,
    // shower rain
    "09d": weatherIcons.shower_rain,
    "09n": weatherIcons.broken_clouds,
    // rain
    "10d": weatherIcons.rain,
    "10n": weatherIcons.rain,
    // thunderstorm
    "11d": weatherIcons.thunderstorm,
    "11n": weatherIcons.thunderstorm,
    // snow
    "13d": weatherIcons.snow,
    "13n": weatherIcons.snow,
    // mist
    "50d": weatherIcons.mist,
    "50n": weatherIcons.mist,
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    const icon = allIcons[data.weather[0].icon]
    return {
      feels_like: Math.floor(data.main.feels_like),
      grnd_level: data.main.grnd_level,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      sea_level: data.main.sea_level,
      temp: Math.floor(data.main.temp),
      temp_max: Math.floor(data.main.temp_max),
      temp_min: Math.floor(data.main.temp_min),

      location: data.name,

      country: data.sys.country,
      sunrise: convertUnixToTime(data.sys.sunrise),
      sunset: convertUnixToTime(data.sys.sunset),

      weather: data.weather[0].main,
      description: data.weather[0].description,

      wind: data.wind.speed,
      icon: icon,

      lat: data.coord.lat,
      lon: data.coord.lon,

      timezone: data.timezone,
    };

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchForecastData = async (city) => {


  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
    const response = await fetch(url)
    const data = await response.json()
    console.log('forecast data', data);

  } catch (error) {
    // console.log(error);
    // return null;
  }
}