import { getLocation, getMeasureSystem, getCheckBoxValue, submissionVerification, checkCityInputValidity, checkCountryInputValidity } from "./user-input-processing.js";
import { renderWeatherBody } from "./weather-api-resolution.js";
import { closeDialog, displayForm } from "./dialog-content.js";

export { getDialogClick, openFormDialog, getCheckBoxClick, checkUserInputValidity }

function getDialogClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  if (button.dataset.action === 'exit') {
    closeDialog();
    return;
  }
  if (button.dataset.action === 'submit') {
    submissionVerification();
    getLocation();
    getMeasureSystem();
    renderWeatherBody();
    return;
  }
}

function checkUserInputValidity(event) {
  const input = event.target.closest('input');
  if (!input) return;
  if (input.dataset.input == 'city') {
    checkCityInputValidity();
    return;
  }
  if (input.dataset.input == 'country') {
    checkCountryInputValidity();
    return;
  }
}

function openFormDialog(event) {
  const button = event.target.closest(`[data-action='form']`);
  if (!button) return;
  displayForm();
}

function getCheckBoxClick(event) {
  const checkBox = event.target.closest(`[type='radio']`);
  if (!checkBox) return;
  getCheckBoxValue(checkBox);
  renderWeatherBody();
}