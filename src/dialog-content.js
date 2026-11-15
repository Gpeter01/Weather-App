
export { displayForm, displaySVG, clearDialog, closeDialog }

const dialog = document.querySelector('dialog');

function createForm() {
  dialog.innerHTML = `
  <div class="button-container">
    <button type="button" data-action='exit'>Cancel</button>
  </div>
  <h3>Find the weather at a location of your choice</h2>
  <label for="city">Enter a city:
    <input type="text" name='city' class="city" placeholder='London' required>
  </label>
  <label for="country">Enter a country:
    <input type="text" name="country" class="country" placeholder='UK' required>
  </label>
  <label for="system">Choose a measure system:
    <select name="system" class="system" required>
      <option value="us">Imperial</option>
      <option value="metric">Metric</option>
    </select>
  </label>
  <button type="button" class='submit' data-action='submit'>Submit</button>`;
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
  createForm();
  addFormStyle();
  openDialog();
}

function displaySVG() {
  createSpinningSVG();
  addSpinningSVGStyle();
  openDialog();
}
