const weatherApi = require('./weatherApi')
const skiLocations = require('./skiLocationApi')

// Set unix to Time
// bron: https://makitweb.com/convert-unix-timestamp-to-date-time-with-javascript/
function convertUnix(unixtimestamp) {
  const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(unixtimestamp * 1000);
  const year = date.getFullYear();
  const month = months_arr[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  // Display date time in MM-dd-yyyy h:m:s format
  const convdataTime = month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  const time = month + ',' + day;
  return time
}

//Give the hourly-data the regular time instead of unix time
function weatherConvertTime(data) {
  const unixFromWeather = data.daily.data
  const weatherDataTime = unixFromWeather.map(x => {
    const { time } = x

    return {...x, timestamp: convertUnix(time) }
  })
  return weatherDataTime
}


async function getWeatherSkiLocations(skiLocations) {
  const weatherArray = skiLocations.skiLocations.map(cur => {
    const lat = cur.georeferencing._lat
    const lon = cur.georeferencing._lng
    const name = cur.name.__cdata
    return weatherApi.getWeather(lat, lon, name)
  })
  const data = await Promise.all(weatherArray)
    // addNametoWeatherArray(data)
  return data
}






module.exports = { convertUnix, weatherConvertTime, getWeatherSkiLocations }