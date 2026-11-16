export { measureSystem, appCurrentCondtionsDataQueries }

// Measuring System
const metric = {
  precip: 'mm',
  pressure: 'mb/hPa',
  snowdepth: 'cm',
  temp: '°C',
  visibility: 'km',
  wind: {
    winddir: '°',
    windgust: 'kph',
    windspeed: 'kph',
  },
};

const imperial = {
  precip: 'in',
  pressure: 'mb/hPa',
  snowdepth: 'in',
  temp: '°F',
  visibility: 'mi',
  wind: {
    winddir: '°',
    windgust: 'mph',
    windspeed: 'mph',
  },
};

const measureSystem = { metric: metric, us: imperial };

// This is a troubleshooting array to catch values that sometimes may turn out as undefined in certain locations
const appCurrentCondtionsDataQueries = [
  'temp', 
  'feelslike',
  'humidity',
  'windgust',
  'windspeed',
  'winddir',
  'precip',
  'precipprob',
  'pressure',
  'visibility',
]