const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');
const obaData = require('./modules/obaapi')
const weatherData = require('./modules/weatherApi')
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');





app.get('/', (req, res) => {
  weatherData.getWeather()
    .then(function(data) {
      console.log(data)
    })
  res.render('index')

})

app.get('/results', (req, res) => {
  res.render('results')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))