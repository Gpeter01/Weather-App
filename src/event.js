import { getLocation, getMeasureSystem } from "./user-input-processing.js";
import { weatherApiRes } from "./weather-api.js";
import { closeDialog, displayForm, displaySVG} from "./dialog-content.js";

export { getDialogClick, openFormDialog }

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
    const { city, country } = getLocation();
    const measureSystem = getMeasureSystem();

    weatherApiRes(city, country, measureSystem);
    displaySVG();
    // run validity check
    // start the loader spinner thingy
    // query api --- this is it below here
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