export { getLocation, getMeasureSystem }

function getLocation() {
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  return { city: city.value, country: country.value };
}

function getMeasureSystem() {
  const measureSystem = document.querySelector('.system');
  return measureSystem.value;
}