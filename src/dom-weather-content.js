export { createWeatherBody };

function createTempContent(temp) {
  const tempContainer = document.createElement('div');
  const tempHeader = document.createElement('p');
  const tempValue = document.createElement('p');

  tempContainer.appendChild(tempHeader);
  tempContainer.appendChild(tempValue);

  tempHeader.textContent = 'Tempearature';
  tempValue.textContent = temp;

  
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

}

function createLocationContent(longitude, latitude) {
  const locationContainer = document.createElement('div');
  const longitudeContainer = document.createElement('div');
  const latitudeContainer = document.createElement('div');
  const latitudeHeader = document.createElement('p');
  const latitudeValue = document.createElement('p');
  const longitudeHeader = document.createElement('p');
  const longitudeValue = document.createElement('p');

  longitudeHeader.innerHTML = `<p>Longitude</p>`;
  longitudeValue.textContent = longitude;

  latitudeHeader.innerHTML = `<p>Latitude</p>`;
  latitudeValue.textContent = latitude;

  locationContainer.appendChild(longitudeContainer);
  longitudeContainer.appendChild(longitudeHeader);
  longitudeContainer.appendChild(longitudeValue);
  locationContainer.appendChild(latitudeContainer);
  latitudeContainer.appendChild(latitudeHeader);
  latitudeContainer.appendChild(latitudeValue);

  //next step is to append to the body container or at least the weather container box
}

function createHumidityContent(humidity) {
  const humidityContainer = document.createElement('div');
  const humidityHeader = document.createElement('p');
  const humidityValue = document.createElement('p');

  humidityContainer.appendChild(humidityHeader);
  humidityContainer.appendChild(humidityValue);

  humidityHeader.innerHTML = `<p>Humidity</p>`;
  humidityValue.textContent = humidity;

  // append to the body container
}

function createWindContent(windgust, windspeed, windair) {
  const windContainer = document.createElement('div');
  const windGustContainer = document.createElement('div');
  const windSpeedContainer = document.createElement('div');
  const windAirContainer = document.createElement('div');

  const windGustHeader = document.createElement('p');
  const windGustValue = document.createElement('p');
  const windSpeedHeader = document.createElement('p');
  const windSpeedValue = document.createElement('p');
  const windAirHeader = document.createElement('p');
  const windAirValue = document.createElement('p');

  windGustHeader.innerHTML = `<p>Wind Gust</p>`;
  windSpeedHeader.innerHTML = `<p>Wind Speed</p>`;
  windAirHeader.innerHTML = `<p>Wind Air</p>`;

  windGustValue.textContent = windgust;
  windSpeedValue.textContent = windspeed;
  windAirValue.textContent = windair;

  windContainer.appendChild(windGustContainer);
  windGustContainer.appendChild(windGustHeader);
  windGustContainer.appendChild(windGustValue);
  windContainer.appendChild(windSpeedContainer);
  windSpeedContainer.appendChild(windSpeedHeader);
  windSpeedContainer.appendChild(windSpeedValue);
  windContainer.appendChild(windAirContainer);
  windAirContainer.appendChild(windAirHeader);
  windAirContainer.appendChild(windAirValue);

  // append to body container then
}

function createPrecipContent(precip, precipProb) {
  const container = document.createElement('div');
  const precipContainer = document.createElement('div');
  const precipProbContainer = document.createElement('div');

  const precipHeader = document.createElement('p');
  const precipValue = document.createElement('p');
  const precipProbHeader = document.createElement('p');
  const precipProbValue = document.createElement('p');

  precipHeader.innerHTML = `<p>Precipitation</p>`;
  precipValue.textContent = precip;

  precipProbHeader.innerHTML = `<p>Precipitation Probability</p>`;
  precipProbValue.textContent = precipProb;

  container.appendChild(precipContainer);
  precipContainer.appendChild(precipHeader);
  precipContainer.appendChild(precipValue);
  container.appendChild(precipProbContainer);
  precipProbContainer.appendChild(precipProbHeader);
  precipProbContainer.appendChild(precipProbValue);

  //append to body of container
}

function createPressureContent(pressure) {
  const pressureContainer = document.createElement('div');
  const pressureHeader = document.createElement('p');
  const pressureValue = document.createElement('p');

  pressureHeader.innerHTML = `<p>Pressure</p>`;
  pressureValue.textContent = pressure;
  
  pressureContainer.appendChild(pressureHeader);
  pressureContainer.appendChild(pressureValue);
  // append to body of container
}

function createVisibContent(visibility) {
  const visibContainer = document.createElement('div');
  const visibHeader = document.createElement('p');
  const visibValue = document.createElement('p');

  visibHeader.innerHTML = `<p>Visiblity</p>`;
  visibValue.textContent = visibility;

  visibContainer.appendChild(visibHeader);
  visibContainer.appendChild(visibValue);
  
  // append to body of container
}

function createConditionsContent(conditions) {
  const conditionsContainer = document.createElement('div');
  const conditionsHeader = document.createElement('p');
  const conditionsValue = document.createElement('p');

  conditionsHeader.innerHTML = `<p>Conditions</p>`;
  conditionsValue.textContent = conditions;

  conditionsContainer.appendChild(conditionsHeader);
  conditionsContainer.appendChild(conditionsValue);
  
  // append to body of container
}

function createWeatherBody(weather) {
  let container;

  createTempContent(weather.currentConditions.temp);
  createFeelsLike(weather.currentConditions.feelsLike);
  createLocationContent(weather.longitude, weather.latitude);
  createHumidityContent(weather.currentConditions.humidity);
  createWindContent(weather.currentConditions.windgust, weather.currentConditions.windpseed, weather.currentConditions.windair);
  createPrecipContent(weather.currentConditions.precip, weather.currentConditions.precipprob);
  createPressureContent(weather.currentConditions.pressure);
  createVisibContent(weather.currentConditions.visibility);
  createConditionsContent(weather.currentConditions.conditions);
}
