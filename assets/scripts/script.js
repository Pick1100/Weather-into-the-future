// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid='bcef8eb900037803ff40ff7ef6270182';

let cityId = 'london';
function getApi() {
    fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + cityId + '&appid=bcef8eb900037803ff40ff7ef6270182')
      .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function(data){
        let lat = data[0].lat;
        let lon = data[0].lon;
        console.log(lat, lon);
        getWeather(lat, lon);
    })
  }
  function getWeather(lat, lon) {
    console.log(lat, 'The weather');
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bcef8eb900037803ff40ff7ef6270182&unit=imperial`)
    .then(function (response) {
      // console.log(response);
      return response.json();
  })
  .then(function(data){
      console.log(data, 'The weather');
      const testEl = document.getElementById('test');
      test.innerHTML = data;;

  })
  }
  getApi();
