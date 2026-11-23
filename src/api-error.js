export { getApiErrorValues };

// API ERROR HANDLING
const apiErrorValues = {
  404: '404: NOT FOUND',
  401: '401: UNAUTHORIZED',
  400: '400: BAD REQUEST',
  429: '429: Limit exceeded, try again later',
  500: '500: Internal server error',
  408: '408: Request Timeout',
  504: '504: Gateway Timeout',
  522: '522: Connection Timeout',
  524: '524: Connection Timeout',
}

function getApiErrorValues(error) {
  if (apiErrorValues[error] == undefined) return 'AN ERROR OCCURRED';
  return apiErrorValues[error];
}