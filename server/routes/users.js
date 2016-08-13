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
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

router.get('/:id', (req, res) => {
  knex('users')
    .select()
    .where('id', req.params.id)
    .then(user => {
      if (user.length === 0) {
        res.sendStatus(404)
      }
      res.json(user[0])
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

module.exports = router
