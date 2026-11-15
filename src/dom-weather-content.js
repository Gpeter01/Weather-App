export { createWeatherBody };

// This is the container to have it all appended to
const mainContainer = document.querySelector('main');

function createTempContent(temp) {
  const tempContainer = document.createElement('div');
  const tempHeader = document.createElement('p');
  const tempValue = document.createElement('p');

  tempContainer.appendChild(tempHeader);
  tempContainer.appendChild(tempValue);

  tempHeader.textContent = 'Tempearature';
  tempValue.textContent = temp;

  // add class names
  tempContainer.classList.add('flex-column-child', 'parent', 'temp-container');
  tempHeader.classList.add('info-header');
  tempValue.classList.add('temp');

  mainContainer.appendChild(tempContainer);
  // more work is to be done on all this to make it a whole lot better and visually appealing
  // I then need to append to the weather container/body
}

function createFeelsLike(feelsLike) {
  const feelsLikeContainer = document.createElement('div');
  const feelsLikeHeader = document.createElement('p');
  const feelsLikeValue = document.createElement('p');

  feelsLikeContainer.appendChild(feelsLikeHeader);
  feelsLikeContainer.appendChild(feelsLikeValue);

  feelsLikeHeader.textContent = 'Feels Like';
  feelsLikeValue.textContent = feelsLike;

  feelsLikeContainer.classList.add('flex-column-child', 'parent');
  feelsLikeHeader.classList.add('info-header');
  feelsLikeValue.classList.add('info-value');

  mainContainer.appendChild(feelsLikeContainer);

}

function createLocationContent(longitude, latitude) {
  const locationContainer = document.createElement('div');
  const longitudeContainer = document.createElement('div');
  const latitudeContainer = document.createElement('div');
  const latitudeHeader = document.createElement('p');
  const latitudeValue = document.createElement('p');
  const longitudeHeader = document.createElement('p');
  const longitudeValue = document.createElement('p');

  longitudeHeader.textContent = `Longitude`;
  longitudeValue.textContent = longitude;

  latitudeHeader.textContent = `Latitude`;
  latitudeValue.textContent = latitude;

  locationContainer.classList.add('flex-row-parent', 'parent');
  longitudeContainer.classList.add('flex-column-child');
  latitudeContainer.classList.add('flex-column-child');
  latitudeHeader.classList.add('info-header');
  latitudeValue.classList.add('info-value');
  longitudeHeader.classList.add('info-header');
  longitudeValue.classList.add('info-value');

  locationContainer.appendChild(longitudeContainer);
  longitudeContainer.appendChild(longitudeHeader);
  longitudeContainer.appendChild(longitudeValue);
  locationContainer.appendChild(latitudeContainer);
  latitudeContainer.appendChild(latitudeHeader);
  latitudeContainer.appendChild(latitudeValue);

  mainContainer.appendChild(locationContainer);
  //next step is to append to the body container or at least the weather container box
}

function createHumidityContent(humidity) {
  const humidityContainer = document.createElement('div');
  const humidityHeader = document.createElement('p');
  const humidityValue = document.createElement('p');

  humidityContainer.appendChild(humidityHeader);
  humidityContainer.appendChild(humidityValue);

  humidityHeader.textContent = `Humidity`;
  humidityValue.textContent = humidity;

  humidityContainer.classList.add('flex-column-child', 'parent');
  humidityHeader.classList.add('info-header');
  humidityValue.classList.add('info-value');

  mainContainer.appendChild(humidityContainer);
  // append to the body container
}

function createWindContent(windgust, windspeed, winddir) {
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

  windGustHeader.innerHTML = `Wind Gust`;
  windSpeedHeader.innerHTML = `Wind Speed`;
  windDirHeader.innerHTML = `Wind Air`;

  windGustValue.textContent = windgust;
  windSpeedValue.textContent = windspeed;
  windDirValue.textContent = winddir;

  windContainer.classList.add('flex-row-parent', 'parent');
  windGustContainer.classList.add('flex-column-child');
  windSpeedContainer.classList.add('flex-column-child');
  windDirContainer.classList.add('flex-column-child');
  windGustHeader.classList.add('info-header');
  windSpeedHeader.classList.add('info-header');
  windDirHeader.classList.add('info-header');
  windGustValue.classList.add('info-value');
  windSpeedValue.classList.add('info-value');
  windDirValue.classList.add('info-value');

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
  mainContainer.appendChild(windContainer);
}

function createPrecipContent(precip, precipProb) {
  const container = document.createElement('div');
  const precipContainer = document.createElement('div');
  const precipProbContainer = document.createElement('div');

  const precipHeader = document.createElement('p');
  const precipValue = document.createElement('p');
  const precipProbHeader = document.createElement('p');
  const precipProbValue = document.createElement('p');

  precipHeader.textContent = `Precipitation`;
  precipValue.textContent = precip;

  precipProbHeader.textContent = `Precipitation Probability`;
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

function createPressureContent(pressure) {
  const pressureContainer = document.createElement('div');
  const pressureHeader = document.createElement('p');
  const pressureValue = document.createElement('p');

  pressureHeader.innerHTML = `Pressure`;
  pressureValue.textContent = pressure;

  pressureContainer.classList.add('flex-column-child', 'parent');
  pressureHeader.classList.add('info-header');
  pressureValue.classList.add('info-value');
  
  pressureContainer.appendChild(pressureHeader);
  pressureContainer.appendChild(pressureValue);
  // append to body of container
  mainContainer.appendChild(pressureContainer);
}

function createVisibContent(visibility) {
  const visibContainer = document.createElement('div');
  const visibHeader = document.createElement('p');
  const visibValue = document.createElement('p');
  
  visibHeader.innerHTML = `Visiblity`;
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

function createWeatherBody(weather) {
  createTempContent(weather.currentConditions.temp);
  createFeelsLike(weather.currentConditions.feelslike);
  createLocationContent(weather.longitude, weather.latitude);
  createHumidityContent(weather.currentConditions.humidity);
  createWindContent(weather.currentConditions.windgust, weather.currentConditions.windspeed, weather.currentConditions.winddir);
  createPrecipContent(weather.currentConditions.precip, weather.currentConditions.precipprob);
  createPressureContent(weather.currentConditions.pressure);
  createVisibContent(weather.currentConditions.visibility);
  createConditionsContent(weather.currentConditions.conditions);
}
