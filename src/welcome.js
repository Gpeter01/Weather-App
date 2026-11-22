import { weatherApiRes } from "./weather-api-resolution.js";
import { state, getStateFromStorage } from "./state.js";
import { displaySVG } from "./dialog-content.js";

export function createWelcomeBody() {
  getStateFromStorage();
  if (state.isWeatherDataInStorage) getPreviousWeatherContent();
  
  const mainContainer = document.querySelector('main');
  const welcomeContainer = document.createElement('div');
  const welcomeText = document.createElement('p');

  welcomeText.textContent = 'Welcome to WeatherMe, Enjoy your stay';
  welcomeContainer.appendChild(welcomeText);
  mainContainer.appendChild(welcomeContainer);

  welcomeText.classList.add('welcome');
  welcomeContainer.classList.add('parent', 'welcome-glass-container');
  mainContainer.classList.add('welcome-container');

  setHeaderButtonFocus();
}

function setHeaderButtonFocus() {
  const button = document.querySelector('header button');
  button.focus();
}

function getPreviousWeatherContent() {
  weatherApiRes();
  displaySVG();
}