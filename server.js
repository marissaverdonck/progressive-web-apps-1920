const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.send('Hello World!')
    //   fetch('')
})

app.get('/overview', (req, res) => {

  //   fetch('')
  res.render('overview')

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))