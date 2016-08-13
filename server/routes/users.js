const express = require('express')
const development = require('../../knexfile').development
const knex = require('knex')(development)

const router = express.Router()

router.get('/', (req, res) => {
  knex('users')
    .select()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
