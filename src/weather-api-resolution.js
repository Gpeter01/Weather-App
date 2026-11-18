import { createWeatherBody } from "./dom-weather-content.js";
import { clearDialog, displaySVG } from "./dialog-content.js";
import { state } from "./state.js";
import { measureSystem } from "./measurement-system.js";
import { pushStateToStorage } from "./storage.js";

// Let's check something out and see just what the visual weather api has in store for us

export function renderWeatherBody() {
  if (!state.isUserInputValid) {
    return;
  }
  weatherApiRes();
  displaySVG();
}

export async function weatherApiRes() {
  const { city, country, system } = state;
  const location = encodeURIComponent(`${city}, ${country}`);
  const weatherApi = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/today?unitGroup=' + system + '&include=current';
  const response = await fetch(weatherApi);
  
  if (!response.ok) {
    console.log(response);
    console.log(response.status);
    // here it is here, I am still working on it though, but this does work
    clearDialog();
    return;
    // I'd also stop the spinner here, ideally before displaying the error in question
  }
  
  console.log(state);
  
  pushStateToStorage();
  const responseJSON = await response.json();
  console.log(responseJSON);
  createWeatherBody(responseJSON, decideMeasuringSystem(system));
  clearDialog();
  return;
}

function decideMeasuringSystem(currentSystem) {
  return { system: measureSystem[currentSystem], systemName: currentSystem }
}

// Imma get rid of this once I am sure everything is working correctly
const mainApi = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos/today?unitGroup=metric&include=current';