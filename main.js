const searchBtn = document.querySelector('#search-btn');
const inputBtn = document.querySelector('#enter-city');

const city = document.querySelector('#city-name');
const cityTime = document.querySelector('#city-time');
const cityTem1 = document.querySelector('#city-temp-c');
const cityTem2 = document.querySelector('#city-temp-f');

async function apiData(cityName) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=6c2dfad1edbf4bc78de145717230912&q=${cityName}&aqi=yes
  `);
  return await promise.json();
}

searchBtn.addEventListener('click', async () => {
  const value = inputBtn.value;
  const result = await apiData(value);
  city.innerText = `${result.location.country}, ${result.location.name}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTem1.innerHTML = `${result.current.temp_c} &#176;C`;
  cityTem2.innerHTML = `${result.current.temp_f} &#176;f`;
});
