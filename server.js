const express = require('express')
const app = express()
const port = 3000
const PORT = process.env.PORT || 5000
const fetch = require('node-fetch');
const dataHelper = require('./modules/data-helper')
const weatherApi = require('./modules/weatherApi')
const skiLocations = require('./modules/skiLocationApi')

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60)
  next()
})
app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => {
  dataHelper.getWeatherSkiLocations(skiLocations)
    .then((weatherData) => {
      console.log(skiLocations.skiLocations[0].georeferencing._lat)
      res.render('index', {
        weatherData,
        skiLocations
      })
    })
})


app.get('/detail/:name/:lat/:lon', (req, res) => {
  // Params:Amsterdam test
  // http://localhost:3000/detail/52.379189/4.899431
  const name = req.params.name
  const lat = req.params.lat
  const lon = req.params.lon
  weatherApi.getWeather(lat, lon)
    .then((weatherData) => {
      const weatherDailyData = dataHelper.weatherConvertTime(weatherData)
      return ([weatherDailyData, weatherData])
    })
    .then(([weatherDailyData, weatherData]) => {
      res.render('detail', {
        weatherDailyData,
        weatherData,
        name

      })
    })
})

app.get('/offline', (req, res) => {
  res.render('offline')
})

// })

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))