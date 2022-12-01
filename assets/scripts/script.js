// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid='bcef8eb900037803ff40ff7ef6270182';

// let cityId = 'london';
function getApi(cityId) {
  fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + cityId + '&appid=bcef8eb900037803ff40ff7ef6270182')
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      let lat = data[0].lat;
      let lon = data[0].lon;
      console.log(lat, lon);
      getWeather(lat, lon);
      getFutureWeather(lat, lon);

    })
}

function getWeather(lat, lon) {
  console.log(lat, 'The weather');
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bcef8eb900037803ff40ff7ef6270182&unit=imperial`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      // console.log(data, 'The weather');
      const currentWeatherEl = document.getElementById('currentWeather');
      const currentCityEl = document.getElementById('currentTemp');
      currentCityEl.innerHTML = data.main.temp;
      const currentHumidityEl = document.getElementById('currentHumidity');
      currentHumidity.innerHTML = data.main.humidity;
      const currentWind = document.getElementById('currentWind');
      currentWind.innerHTML = data.wind.speed;



    })
}

function getFutureWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=bcef8eb900037803ff40ff7ef6270182`)
    .then(function response(response) {
      console.log(response);
      return response.json();
  })
  .then(function (data) {
console.log(data);
  });
  
}


// getApi();
const searchButton = document.getElementById('cityButton');
searchButton.addEventListener('click', function (e) {
  e.preventDefault();
  let city = document.getElementById('cityInput').value;
  getApi(city);
})