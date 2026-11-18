export { state, pushToState, getStateFromStorage }

let state = {
  system: undefined,
  isStorageAvailable: false,
  isWeatherDataInStorage: false,
  isUserInputValid: true,
}

// This is a helper, an API at this point 
function pushToState(key, prop) {
  state[key] = prop;
}

function getStateFromStorage() {
  if (!state.isStorageAvailable) {
    return;
  }
  if (localStorage.getItem('state') === null) {
    return;
  }

  state = JSON.parse(localStorage.getItem('state'));
}