import { state } from "./state.js"

export { pushStateToStorage, checkStorageAvailability };

function pushStateToStorage() {
  if (!state.isStorageAvailable) {
    return;
  }
  state.isWeatherDataInStorage = true;
  localStorage.setItem('state', JSON.stringify(state));
}

function checkStorageAvailability() {
  try {
    const experiment = 't minus one';
    window.localStorage.setItem(experiment, experiment);
    window.localStorage.removeItem(experiment);
    state.isStorageAvailable = true;
    return;
  } catch (error) {
    state.isStorageAvailable = false;
    return;
  }
}