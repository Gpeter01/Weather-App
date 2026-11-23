export { state, pushToState, getStateFromStorage }

let state = {
  system: undefined,
  isStorageAvailable: false,
  isWeatherDataInStorage: false,
  isUserInputValid: false,
}

// This is a helper, an API at this point 
function pushToState(key, prop) {
  state[key] = prop;
}

function getStateFromStorage() {
  if (!state.isStorageAvailable) return;
  if (localStorage.getItem('state') === null) return;
  try {
    const parsedState =  JSON.parse(localStorage.getItem('state'));
    state = parsedState;
    state.isUserInputValid = false;
  } catch {
    localStorage.removeItem('state');
    return;
  }
}