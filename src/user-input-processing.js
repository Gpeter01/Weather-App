import { pushToState, state } from "./state.js";

export { 
  getLocation, 
  getMeasureSystem, 
  getCheckBoxValue, 
  checkCityInputValidity, 
  checkCountryInputValidity, 
  checkMeasurementSystemValidity, 
  submitionVerification
};


function getLocation() {
  if (!state.isUserInputValid) return;
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  pushToState('city', city.value);
  pushToState('country', country.value);
}

function getMeasureSystem() {
  if (!state.isUserInputValid) return;
  const measureSystem = document.querySelector('dialog .system');
  pushToState('system', measureSystem.value);
}

function getCheckBoxValue(checkBox) {
  if (state.system == checkBox.value) {
    state.isUserInputValid = false;
    return;
  }
  pushToState('system', checkBox.value);
  state.isUserInputValid = true;
}

function checkCityInputValidity() {
  const city = document.querySelector('.city');
  const invalidInput = document.querySelector('.invalid-input');
  if (city.value.trim() == '') {
    invalidInput.textContent = 'Enter a city';
    return true;
  }
  if (city.checkValidity()) invalidInput.textContent ='';
  return false;
}

function checkCountryInputValidity() {
  const country = document.querySelector('.country');
  const invalidInput = document.querySelector('.invalid-input');
  if (country.value.trim() == '') {
    invalidInput.textContent = 'Enter a country';
    return true;
  }
  if (country.checkValidity()) invalidInput.textContent ='';
  return false;
}

function checkMeasurementSystemValidity() {
  const measureSystem = document.querySelector('dialog .system');
  const invalidInput = document.querySelector('.invalid-input');
  if (measureSystem.value == 'null') {
    invalidInput.textContent = 'Choose a temperature scale';
    return true;
  }
  if (measureSystem.checkValidity()) invalidInput.textContent ='';
  return false;
}

function submitionVerification() {
  if (checkCityInputValidity()) return;
  if (checkCountryInputValidity()) return;
  if (checkMeasurementSystemValidity()) return;
  state.isUserInputValid = true;
}