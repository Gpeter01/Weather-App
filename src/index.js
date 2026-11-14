// Let's check something out and see just what the visual api has in store for us
async function api () {
  const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos/today?unitGroup=metric&include=hours,current');
  const responseJSON = await response.json();
  console.log(responseJSON);
}
api();