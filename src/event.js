import { getLocation, getMeasureSystem, getCheckBoxValue } from "./user-input-processing.js";
import { renderWeatherBody } from "./weather-api-resolution.js";
import { closeDialog, displayForm } from "./dialog-content.js";

export { getDialogClick, openFormDialog, getCheckBoxClick }

function getDialogClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) {
    return;
  }
  if (button.dataset.action === 'exit') {
    closeDialog();
    return;
  }
  if (button.dataset.action === 'submit') {
    getLocation();
    getMeasureSystem();

    renderWeatherBody();
    return;
  }
}

function openFormDialog(event) {
  const button = event.target.closest(`[data-action='form']`);
  if (!button) {
    return;
  }
  displayForm();
}

function getCheckBoxClick(event) {
  const checkBox = event.target.closest(`[type='radio']`);
  if (!checkBox) {
    return;
  }

  getCheckBoxValue(checkBox);
  renderWeatherBody();
}