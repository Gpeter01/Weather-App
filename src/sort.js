export { sortNullResponse }

function sortNullResponse(response) {
  const currentConditionsKeys  = Object.keys(response.currentConditions);
  currentConditionsKeys.forEach((key) => {
      response.currentConditions[key] = response.currentConditions[key] ?? 'null';
  })
  return response;
}