export { measureSystem }

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