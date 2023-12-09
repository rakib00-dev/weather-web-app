const searchBtn = document.querySelector('#search-btn');
const inputBtn = document.querySelector('#enter-city');

const city = document.querySelector('#city-name');
const cityTime = document.querySelector('#city-time');
const cityTem = document.querySelector('#city-temp');

async function apiData(cityName) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=6c2dfad1edbf4bc78de145717230912&q=${cityName}&aqi=yes
  `);
  return await promise.json();
}

searchBtn.addEventListener('click', async () => {
  const value = inputBtn.value;
  const result = await apiData(value);
  console.log(result);
  city.innerText = `${result.location.country}, ${result.location.name}`;
});
