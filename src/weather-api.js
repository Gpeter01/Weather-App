import { createWeatherBody } from "./dom-weather-content.js";
import { clearDialog } from "./dialog-content.js";

export { weatherApiRes } 

// Let's check something out and see just what the visual weather api has in store for us

async function weatherApiRes(city, country, measureSystem) {
  const location = encodeURIComponent(`${city}, ${country}`);
  const weatherApi = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/today?unitGroup=' + measureSystem + '&include=current';
  const response = await fetch(weatherApi);

  if (!response.ok) {
    console.log(response);
    // here it is here, I am still working on it though, but this does work
    clearDialog();
    return;
    // I'd also stop the spinner here, ideally before displaying the error in question
  }

  const responseJSON = await response.json();
  createWeatherBody(responseJSON);
  clearDialog();
  return;
}

const mainApi = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos/today?unitGroup=metric&include=current';