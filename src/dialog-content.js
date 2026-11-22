
import { svg } from "./assets/svg-assets.js";
export { displayForm, displaySVG, clearDialog, closeDialog, displayApiErrorResponse };

const dialog = document.querySelector('dialog');


// I need to deal with a bug here, I wonder if the values in this case the classNames of the dialogs are being
// changed, this could become a problem, if you think about it.

function createForm() {
  dialog.innerHTML = `
  <div class="button-container">
    <button type="button" data-action='exit'><span>${svg.cancel}</span></button>
  </div>
  <h3>Find the weather at a location of your choice</h2>
  <label for="city">Enter a city:
  <input type="text" data-input='city' name='city' class="city" placeholder='London' minlength='0' required>
  </label>
  <label for="country">Enter a country/state:
  <input type="text" data-input='country' name="country" class="country" placeholder='UK' minlength='0' required>
  </label>
  <label for="system">Choose a temperature scale:
  <select name="system" class="system" required>
  <option value="null">Select</option>
  <option value="us">Fahrenheit</option>
  <option value="metric">Celcius</option>
  </select>
  </label>
  <p class='invalid-input'></p>
  <button type="button" class='submit' data-action='submit'>Submit</button>`;

  setFocus('input.city');
}

function createApiErrorResponse(error) {
  dialog.innerHTML = `
  <div class="button-container">
    <button type="button" data-action='exit'><span>${svg.cancel}</span></button>
  </div>
  <p class='error'>${error}</p>`;
  setFocus('.button-container button');
}

function addFormStyle() {
  dialog.classList.add('form');
}

function addSpinningSVGStyle() {  
  dialog.classList.add('loader');
}

function createSpinningSVG() {
  dialog.innerHTML = `
  <div class='svg-container'>
  <svg viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="80"/>
  </svg>
  </div>
  <p>Wait a moment</p>`;
}

function closeDialog() {
  dialog.close();
  removeDialogStyle();
}

function clearDialog() {
  dialog.innerHTML = '';
  closeDialog();
}

function removeDialogStyle() {
  dialog.classList.remove('form');
  dialog.classList.remove('loader');
}

function openDialog() {
  dialog.showModal();
}

function displayForm() {
  openDialog();
  createForm();
  addFormStyle();
}

function displaySVG() {
  openDialog();
  createSpinningSVG();
  addSpinningSVGStyle();
}

function displayApiErrorResponse(error) {
  openDialog();
  createApiErrorResponse(error);
  addFormStyle();
}

function setFocus(selector) {
  const currentFocus = document.querySelector(selector);
  currentFocus.focus();
}