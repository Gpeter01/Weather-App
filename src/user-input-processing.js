import { pushToState, state } from "./state.js";

export { getLocation, getMeasureSystem, getCheckBoxValue }

function getLocation() {
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  // I'd need to do some processing here first
  pushToState('city', city.value);
  pushToState('country', country.value);
}

function getMeasureSystem() {
  const measureSystem = document.querySelector('dialog .system');
  // some processing is to be also done here, just to prevent errors from getting into the state
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

// run validity check
// start the loader spinner thingy
// query api --- this is it below here