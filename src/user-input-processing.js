import { state } from "./state.js";
import { measureSystem } from "./storage.js";

export { getLocation, getMeasureSystem, decideMeasuringSystem }

function getLocation() {
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  return { city: city.value, country: country.value };
}

function getMeasureSystem() {
  const measureSystem = document.querySelector('.system');
  setMeasureSystemState(measureSystem.value)
  return measureSystem.value;
}

// This needs some more work to be done to make it even more correct
function setMeasureSystemState(value) {
  state.system = value;
}

function decideMeasuringSystem() {
  return measureSystem[state.system];
}