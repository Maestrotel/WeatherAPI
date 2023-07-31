'use strict';
// ---------------------------------------------------------------------
// import dotenv from 'dotenv';
// import { join } from 'path';
// const envPath = join(__dirname, '..', '.env');
// dotenv.config({ path: envPath });
// const dotenv = require('dotenv');

// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }

// dotenv.config();

// const { API_KEY } = process.env;
// console.log(API_KEY);
// ----------------------------------------------------------------------------
const weatherBlock = document.querySelector('#weather');

async function loadWeather() {
  weatherBlock.innerHTML = `
  <div class="weather__loading">
    <img src="/assets/loading.gif" alt="Loading..." />
  </div>`;

  const server =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=af458df7fed01c2ab7d49f4144863696';
  const response = await fetch(server, { method: 'GET' });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  // console.log(data);

  const time = Date.now() + 1000 * (data.timezone / 3600);
  const millitime = new Date(time);
  const dateFormat = millitime.toLocaleString();

  const location = data.name;
  const locationCountry = data.sys.country;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `
    <div class="weather__header">
      <div class="weather__main">
        <div class="weather__time">${dateFormat}</div>
        <div class="weather__city">${location}<span class="weather__country">, ${locationCountry}</span></div>
      </div>
      <div class="weather__condition">
        <div class="weather__icon">
          <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}</div>
        </div>
        <div class="weather__status">${weatherStatus}</div>
      </div>
    </div>
    <div class="weather__temp">Temp: <span class="weather__digits">${temp}</span> &#8451;</div>
    <div class="weather__feels-like">Feels like: <span class="weather__digits">${feelsLike}</span> &#8451;</div>
    <div class="weather__humidity">Humidity: <span class="weather__digits">${humidity}</span> %</div>
    `;

  weatherBlock.innerHTML = template;
}

if (weatherBlock) {
  loadWeather();
}

VanillaTilt.init(document.querySelectorAll('.weather'), {
  max: 25,
  speed: 400,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  perspective: 500,
  transition: true,
});
