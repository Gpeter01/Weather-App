
export { displayForm, displaySVG, clearDialog, closeDialog }

const dialog = document.querySelector('dialog');

function createForm() {
  dialog.innerHTML = `
  <div class="buttonContainer">
    <button type="button">Cancel</button>
  </div>
  <h2>Find the weather at a location of your choice</h2>
  <label for="city">Enter a city:
    <input type="text" name='city' class="city" required>
  </label>
  <label for="country">Enter a country:
    <input type="text" name="country" class="country" required>
  </label>
  <label for="system">Choose a measure system:
    <select name="system" class="system" required>
      <option value="us">Imperial</option>
      <option value="metric">Metric</option>
    </select>
  </label>
  <button type="button">Submit</button>`;
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
  openDialog();
}

function displaySVG() {
  createSpinningSVG();
  openDialog();
}
