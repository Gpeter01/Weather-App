export { createWelcomeBody }

function createWelcomeBody() {
  const mainContainer = document.querySelector('main');
  const welcomeContainer = document.createElement('div');
  const welcomeText = document.createElement('p');

  welcomeText.textContent = 'Welcome to WeatherMe, Enjoy your stay';
  welcomeContainer.appendChild(welcomeText);
  mainContainer.appendChild(welcomeContainer);

  welcomeText.classList.add('welcome');
  welcomeContainer.classList.add('parent', 'welcome-glass-container');
  mainContainer.classList.add('welcome-container');
}