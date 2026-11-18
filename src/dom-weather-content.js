import { sortNullResponse } from "./sort.js";
import cloudyDay from './assets/weather-videos/cloudy.webm';
import clearDay from './assets/weather-videos/clear-day.webm';
import clearNight from './assets/weather-videos/clear-night.webm';
import foggyDay from './assets/weather-videos/fog.webm';
import partlyCloudyNight from './assets/weather-videos/partly-cloudy-night.webm';
import rainyDay from './assets/weather-videos/rain.webm';
import snowyDay from './assets/weather-videos/snow.webm';
import windyDay from './assets/weather-videos/windy.webm';

const mainContainer = document.querySelector('main');

function createResolvedLocationAdress(location) {
  const mainLocationContainer = document.createElement('div');
  const mainLocationHeader = document.createElement('p');

  mainLocationContainer.appendChild(mainLocationHeader);

  mainLocationHeader.textContent = location;

  mainLocationContainer.classList.add('parent', 'flex-column-child');
  mainLocationHeader.classList.add('location');

  mainContainer.appendChild(mainLocationContainer);
}

function createTempContent(temp, unit) {
  const tempContainer = document.createElement('div');
  const tempHeader = document.createElement('p');
  const tempValue = document.createElement('p');

  tempContainer.appendChild(tempHeader);
  tempContainer.appendChild(tempValue);

  tempHeader.textContent = `Temperature (${unit})`;
  tempValue.textContent = temp + '°';

  // add class names
  tempContainer.classList.add('flex-column-child', 'parent', 'temp-container');
  tempHeader.classList.add('info-header');
  tempValue.classList.add('temp');

  mainContainer.appendChild(tempContainer);
  // more work is to be done on all this to make it a whole lot better and visually appealing
  // I then need to append to the weather container/body
}

function createFeelsLike(feelsLike, unit) {
  const feelsLikeContainer = document.createElement('div');
  const feelsLikeHeader = document.createElement('p');
  const feelsLikeValue = document.createElement('p');

  feelsLikeContainer.appendChild(feelsLikeHeader);
  feelsLikeContainer.appendChild(feelsLikeValue);

  feelsLikeHeader.textContent =`Feels Like (${unit})`;
  feelsLikeValue.textContent = feelsLike + '°';

  feelsLikeContainer.classList.add('flex-column-child', 'parent');
  feelsLikeHeader.classList.add('info-header');
  feelsLikeValue.classList.add('info-value');

  mainContainer.appendChild(feelsLikeContainer);

}

function createLocationContent(longitude, latitude) {
  const container = document.createElement('div');
  const locationContainer = document.createElement('div');
  const longitudeContainer = document.createElement('div');
  const latitudeContainer = document.createElement('div');
  const latitudeHeader = document.createElement('p');
  const latitudeValue = document.createElement('p');
  const longitudeHeader = document.createElement('p');
  const longitudeValue = document.createElement('p');
  const title = document.createElement('p');

  longitudeHeader.textContent = `Longitude`;
  longitudeValue.textContent = longitude;

  latitudeHeader.textContent = `Latitude`;
  latitudeValue.textContent = latitude;

  title.textContent = 'Location';

  container.classList.add('parent');
  locationContainer.classList.add('flex-row-parent');
  longitudeContainer.classList.add('flex-column-child');
  latitudeContainer.classList.add('flex-column-child');
  latitudeHeader.classList.add('info-header');
  latitudeValue.classList.add('info-value');
  longitudeHeader.classList.add('info-header');
  longitudeValue.classList.add('info-value');
  title.classList.add('info-header', 'section-title');
  
  container.appendChild(title);
  container.appendChild(locationContainer);
  locationContainer.appendChild(longitudeContainer);
  longitudeContainer.appendChild(longitudeHeader);
  longitudeContainer.appendChild(longitudeValue);
  locationContainer.appendChild(latitudeContainer);
  latitudeContainer.appendChild(latitudeHeader);
  latitudeContainer.appendChild(latitudeValue);

  mainContainer.appendChild(container);
  //next step is to append to the body container or at least the weather container box
}

function createHumidityContent(humidity) {
  const humidityContainer = document.createElement('div');
  const humidityHeader = document.createElement('p');
  const humidityValue = document.createElement('p');

  humidityContainer.appendChild(humidityHeader);
  humidityContainer.appendChild(humidityValue);

  humidityHeader.textContent = `Relative Humidity (%)`;
  humidityValue.textContent = humidity;

  humidityContainer.classList.add('flex-column-child', 'parent');
  humidityHeader.classList.add('info-header');
  humidityValue.classList.add('info-value');

  mainContainer.appendChild(humidityContainer);
  // append to the body container
}

function createWindContent(windgust, windspeed, winddir, windUnit) {
  const container = document.createElement('div');
  const windContainer = document.createElement('div');
  const windGustContainer = document.createElement('div');
  const windSpeedContainer = document.createElement('div');
  const windDirContainer = document.createElement('div');

  const windGustHeader = document.createElement('p');
  const windGustValue = document.createElement('p');
  const windSpeedHeader = document.createElement('p');
  const windSpeedValue = document.createElement('p');
  const windDirHeader = document.createElement('p');
  const windDirValue = document.createElement('p');
  const title = document.createElement('p');

  windGustHeader.innerHTML = `Wind Gust Speed (${windUnit.windgust})`;
  windSpeedHeader.innerHTML = `Wind Speed (${windUnit.windspeed})`;
  windDirHeader.innerHTML = `Wind Direction (${windUnit.winddir})`;

  windGustValue.textContent = windgust;
  windSpeedValue.textContent = windspeed;
  windDirValue.textContent = winddir;

  title.textContent = 'Wind';

  container.classList.add('parent');
  windContainer.classList.add('flex-row-parent');
  windGustContainer.classList.add('flex-column-child');
  windSpeedContainer.classList.add('flex-column-child');
  windDirContainer.classList.add('flex-column-child');
  windGustHeader.classList.add('info-header');
  windSpeedHeader.classList.add('info-header');
  windDirHeader.classList.add('info-header');
  windGustValue.classList.add('info-value');
  windSpeedValue.classList.add('info-value');
  windDirValue.classList.add('info-value');
  title.classList.add('info-header', 'section-title');

  container.appendChild(title);
  container.appendChild(windContainer);
  windContainer.appendChild(windGustContainer);
  windGustContainer.appendChild(windGustHeader);
  windGustContainer.appendChild(windGustValue);
  windContainer.appendChild(windSpeedContainer);
  windSpeedContainer.appendChild(windSpeedHeader);
  windSpeedContainer.appendChild(windSpeedValue);
  windContainer.appendChild(windDirContainer);
  windDirContainer.appendChild(windDirHeader);
  windDirContainer.appendChild(windDirValue);

  // append to body container then
  mainContainer.appendChild(container);
}

function createPrecipContent(precip, precipProb, unit) {
  const container = document.createElement('div');
  const precipContainer = document.createElement('div');
  const precipProbContainer = document.createElement('div');

  const precipHeader = document.createElement('p');
  const precipValue = document.createElement('p');
  const precipProbHeader = document.createElement('p');
  const precipProbValue = document.createElement('p');

  precipHeader.textContent = `Precipitation (${unit})`;
  precipValue.textContent = precip;

  precipProbHeader.textContent = `Precipitation Probability (%)`;
  precipProbValue.textContent = precipProb;

  container.classList.add('flex-row-parent', 'parent');
  precipContainer.classList.add('flex-column-child');
  precipProbContainer.classList.add('flex-column-child');
  precipHeader.classList.add('info-header');
  precipProbHeader.classList.add('info-header');
  precipProbValue.classList.add('info-value');
  precipValue.classList.add('info-value');

  container.appendChild(precipContainer);
  precipContainer.appendChild(precipHeader);
  precipContainer.appendChild(precipValue);
  container.appendChild(precipProbContainer);
  precipProbContainer.appendChild(precipProbHeader);
  precipProbContainer.appendChild(precipProbValue);

  //append to body of container
  mainContainer.appendChild(container)
}

function createPressureContent(pressure, unit) {
  const pressureContainer = document.createElement('div');
  const pressureHeader = document.createElement('p');
  const pressureValue = document.createElement('p');

  pressureHeader.innerHTML = `Sea-level Atmospheric Pressure (${unit})`;
  pressureValue.textContent = pressure;

  pressureContainer.classList.add('flex-column-child', 'parent');
  pressureHeader.classList.add('info-header');
  pressureValue.classList.add('info-value');
  
  pressureContainer.appendChild(pressureHeader);
  pressureContainer.appendChild(pressureValue);
  // append to body of container
  mainContainer.appendChild(pressureContainer);
}

function createVisibContent(visibility, unit) {
  const visibContainer = document.createElement('div');
  const visibHeader = document.createElement('p');
  const visibValue = document.createElement('p');
  
  visibHeader.innerHTML = `Visiblity (${unit})`;
  visibValue.textContent = visibility;
  
  visibContainer.appendChild(visibHeader);
  visibContainer.appendChild(visibValue);
  
  visibContainer.classList.add('flex-column-child', 'parent');
  visibHeader.classList.add('info-header');
  visibValue.classList.add('info-value');
  // append to body of container
  mainContainer.appendChild(visibContainer);
}

function createConditionsContent(conditions) {
  const conditionsContainer = document.createElement('div');
  const conditionsHeader = document.createElement('p');
  const conditionsValue = document.createElement('p');
  
  conditionsHeader.innerHTML = `Conditions`;
  conditionsValue.textContent = conditions;
  
  conditionsContainer.appendChild(conditionsHeader);
  conditionsContainer.appendChild(conditionsValue);
  
  conditionsContainer.classList.add('flex-column-child', 'parent');
  conditionsHeader.classList.add('info-header');
  conditionsValue.classList.add('info-value');
  // append to body of container
  mainContainer.appendChild(conditionsContainer);
}

function createAdditionalInfo(aqius, cloudcover, snowdepth, snowDepthUnit) {
  const container = document.createElement('div');
  const additionalInfoContainer = document.createElement('div');
  // I am adding containers for snowdepth, aqius and cloudcover
  const aqiusContainer = document.createElement('div');
  const cloudCoverContainer = document.createElement('div');
  const snowdDepthContainer = document.createElement('div');

  const aqiusHeader = document.createElement('p');
  const aqiusValue = document.createElement('p');
  const cloudCoverHeader = document.createElement('p');
  const cloudCoverValue = document.createElement('p');
  const snowDepthHeader = document.createElement('p');
  const snowDepthValue = document.createElement('p');

  const title = document.createElement('p');

  aqiusHeader.textContent = 'Air Quality Index (AQI)';
  cloudCoverHeader.textContent = 'Cloud Cover (%)';
  snowDepthHeader.textContent = `Snow Depth (${snowDepthUnit})`;
  title.textContent = 'Additional Info';

  aqiusValue.textContent = aqius;
  cloudCoverValue.textContent = cloudcover;
  snowDepthValue.textContent = snowdepth;

  aqiusContainer.appendChild(aqiusHeader);
  aqiusContainer.appendChild(aqiusValue);

  cloudCoverContainer.appendChild(cloudCoverHeader);
  cloudCoverContainer.appendChild(cloudCoverValue);

  snowdDepthContainer.appendChild(snowDepthHeader);
  snowdDepthContainer.appendChild(snowDepthValue);

  additionalInfoContainer.appendChild(aqiusContainer);
  additionalInfoContainer.appendChild(cloudCoverContainer);
  additionalInfoContainer.appendChild(snowdDepthContainer);

  container.appendChild(title);
  container.appendChild(additionalInfoContainer);

  mainContainer.appendChild(container);

  container.classList.add('parent');
  additionalInfoContainer.classList.add('flex-row-parent');
  aqiusContainer.classList.add('flex-column-child');
  cloudCoverContainer.classList.add('flex-column-child');
  snowdDepthContainer.classList.add('flex-column-child');
  aqiusHeader.classList.add('info-header');
  aqiusValue.classList.add('info-value');
  cloudCoverHeader.classList.add('info-header');
  cloudCoverValue.classList.add('info-value');
  snowDepthHeader.classList.add('info-header');
  snowDepthValue.classList.add('info-value');
  title.classList.add('info-header', 'section-title');
}

function createNoteContent() {
  const disclaimerContainer = document.createElement('div');
  const noteOne = document.createElement('p');
  const noteTwo = document.createElement('p');

  noteOne.textContent = `
  Note: The video shown as the background here is not an actual representation of the current conditions of this location.`;
  noteTwo.textContent = `
  The scope of this project is limited for now but improvements are to be made to make it sophisticated enough to represent accurate weather conditions, stay tuned.`;

  disclaimerContainer.classList.add('parent', 'flex-column-child');
  disclaimerContainer.appendChild(noteOne);
  disclaimerContainer.appendChild(noteTwo);

  mainContainer.appendChild(disclaimerContainer);
}

function createBackgroundVideo(icon) {
  const backgroundVideo = {
    snow: snowyDay,
    rain: rainyDay,
    fog: foggyDay,
    wind: windyDay,
    cloudy: cloudyDay,
    'partly-cloudy-day': cloudyDay,
    'partly-cloudy-night': partlyCloudyNight,
    'clear-day': clearDay,
    'clear-night': clearNight,
  }
  const videoHTML = document.createElement('video');
  const source = document.createElement('source');

  source.src = backgroundVideo[icon];
  source.type = 'video/webm';

  videoHTML.autoplay = true;
  videoHTML.muted = true;
  videoHTML.loop = true;
  videoHTML.playsInline = true;

  videoHTML.appendChild(source);
  videoHTML.classList.add('background-video');
  
  mainContainer.appendChild(videoHTML);
}

function createCheckBox(name) {
  const container = document.createElement('div');
  container.innerHTML = `
  <label for='metric-system'>
    <input type="radio" class="metric-system" name="system" value="metric">
    Metric
  </label>
  <label for='imperial-system'>
    <input type="radio" class="imperial-system" name="system" value="us">
    Imperial
  </label>`;
  container.classList.add('parent', 'flex-column-child', 'checkbox');
  
  mainContainer.appendChild(container);
  
  const currentSystem = document.querySelector(`[type='radio'][value=${name}]`);
  currentSystem.checked = true;
}

function clearMainContainer() {
  mainContainer.innerHTML = '';
  styleMainContainer();
}

function styleMainContainer() {
  mainContainer.classList.remove('welcome-container');
  mainContainer.classList.add('main');
}

export function createWeatherBody(response, measureSystem) {
  const weather = sortNullResponse(response);
  const { system, systemName } = measureSystem;
  
  clearMainContainer();
  
  createBackgroundVideo(weather.currentConditions.icon);
  createResolvedLocationAdress(weather.resolvedAddress);
  createTempContent(weather.currentConditions.temp, system.temp);
  createFeelsLike(weather.currentConditions.feelslike, system.temp);
  createLocationContent(weather.longitude, weather.latitude);
  createHumidityContent(weather.currentConditions.humidity);
  createWindContent(weather.currentConditions.windgust, weather.currentConditions.windspeed, weather.currentConditions.winddir, system.wind);
  createPrecipContent(weather.currentConditions.precip, weather.currentConditions.precipprob, system.precip);
  createPressureContent(weather.currentConditions.pressure, system.pressure);
  createVisibContent(weather.currentConditions.visibility, system.visibility);
  createConditionsContent(weather.currentConditions.conditions);
  createAdditionalInfo(weather.currentConditions.aqius, weather.currentConditions.cloudcover, weather.currentConditions.snowdepth, system.snowdepth);
  createCheckBox(systemName);

  // Disclaimer
  createNoteContent();
}
