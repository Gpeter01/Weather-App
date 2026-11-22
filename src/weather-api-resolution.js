import { createWeatherBody } from "./dom-weather-content.js";
import { clearDialog, displaySVG, displayApiErrorResponse } from "./dialog-content.js";
import { state } from "./state.js";
import { measureSystem } from "./measurement-system.js";
import { pushStateToStorage } from "./storage.js";
import { apiErrorValues } from "./api-error.js";

// Let's check something out and see just what the visual weather api has in store for us

export function renderWeatherBody() {
  if (!state.isUserInputValid) return;
  weatherApiRes();
  displaySVG();
}

export async function weatherApiRes() {
  try {
    const { city, country, system } = state;
    const location = encodeURIComponent(`${city}, ${country}`);
    const weatherApi = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '/today?unitGroup=' + system + '&include=current';
    const response = await fetch(weatherApi);
    if (!response.ok) {
      clearDialog();
      displayApiErrorResponse(apiErrorValues[response.status]);
      return;
    }
    pushStateToStorage();
    const responseJSON = await response.json();
    createWeatherBody(responseJSON, decideMeasuringSystem(system));
    clearDialog();
    return;
  } catch (error) {
    clearDialog();
    displayApiErrorResponse('An error occured');
  }
}

function decideMeasuringSystem(currentSystem) {
  return { system: measureSystem[currentSystem], systemName: currentSystem }
}