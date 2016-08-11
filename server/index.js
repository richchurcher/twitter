const bodyParser = require('body-parser')
const express = require('express')

const index = require('./routes/index')

const PORT = 3000

const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/api/', index)

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
