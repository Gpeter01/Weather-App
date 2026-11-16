import { appCurrentCondtionsDataQueries } from "./storage.js";
export { sortNullResponse }

function sortNullResponse(returnedJSON) {
  const response = sortUndefinedResponse(returnedJSON);
  const currentConditionsKeys  = Object.keys(response.currentConditions);
  currentConditionsKeys.forEach((key) => {
      response.currentConditions[key] = response.currentConditions[key] ?? 'null';
  })
  return response;
}

function sortUndefinedResponse(response) {
  appCurrentCondtionsDataQueries.forEach((query) => {
    response.currentConditions[query] !== undefined ? response.currentConditions[query] : response.currentConditions[query] = 'Not available';
  });
  return response;
}