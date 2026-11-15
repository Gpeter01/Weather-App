
export { displayForm, displaySVG, clearDialog, closeDialog }

const dialog = document.querySelector('dialog');

function createForm() {
  dialog.innerHTML = `
  <div class="button-container">
    <button type="button">Cancel</button>
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
  <button type="button" class='submit'>Submit</button>`;
}

function addFormStyle() {
  dialog.classList.add('form');
  dialog.classList.remove('loader');
}

function addSpinningSVGStyle() {  
  dialog.classList.remove('form');
  dialog.classList.add('loader');
}

function createSpinningSVG() {
  dialog.innerHTML = `
  <svg viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="50"/>
  </svg>
  <p>Wait a moment</p>`;
}

function closeDialog() {
  dialog.close();
}

function clearDialog() {
  closeDialog();
  dialog.innerHtml = '';
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
