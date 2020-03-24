const fetch = require('node-fetch');

function getWeather(lat, lon, name) {
  //   const cors = 'https://cors-anywhere.herokuapp.com/'
  const url = 'https://api.darksky.net/forecast/'
  const key = '43d7f14e28e4ad05109359319da1a156'
  const key2 = '6b0215f3cade32440e76bd5a8c70e909'
  const key3 = '41b9df401599f007aff98cfa0c66811d'
    // units is voor celsius en km
  const units = '?units=si'

  const weatherData = fetch(`${url}${key}/${lat},${lon}${units}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data
    });

  return weatherData
}

module.exports = { getWeather }