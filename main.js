const searchBtn = document.querySelector('#search-btn');
const inputBtn = document.querySelector('#fcity-name');

function apiData(cityName) {
  fetch(`http://api.weatherapi.com/v1/current.json?key=6c2dfad1edbf4bc78de145717230912&q=${cityName}&aqi=yes
  `);
}

searchBtn.addEventListener('click', () => {
  console.log(inputBtn.value);
});
