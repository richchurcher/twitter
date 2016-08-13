const bodyParser = require('body-parser')
const express = require('express')

const users = require('./routes/users')

const PORT = 3000

const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.use('/api/users', users)

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

module.exports = app
