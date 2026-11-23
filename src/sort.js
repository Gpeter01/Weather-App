export { sortNullResponse }

function sortNullResponse(returnedJSON) {
  // sort undefined responses first
  const response = sortUndefinedResponse(returnedJSON);
  const currentConditionsKeys  = Object.keys(response.currentConditions);
  currentConditionsKeys.forEach((key) => {
      response.currentConditions[key] = response.currentConditions[key] ?? 'null';
  })
  return response;
}

function sortUndefinedResponse(response) {
 // This is a troubleshooting array to catch values that sometimes may turn out as undefined in certain locations
 // precautions first, if you know what I mean
  const appCurrentConditionsDataQueries = [
    'aqius',
    'cloudcover', 
    'snowdepth', 
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
    'datetime',
  ]
  appCurrentConditionsDataQueries.forEach((query) => {
    response.currentConditions[query] !== undefined ? response.currentConditions[query] : response.currentConditions[query] = 'Not available';
  });
  return response;
}