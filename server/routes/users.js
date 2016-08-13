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

router.post('/', (req, res) => {
  knex('users')
    .insert(req.body)
    .then(id => {
      // SQLite doesn't support the `returning` function in Knex
      // If we want to return the newly created resource, we have
      // to go get it
      knex('users')
        .select()
        .where({ id: id[0] })
        .then(user => {
          res.status(201).json(user[0])
        })
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

router.put('/:id', (req, res) => {
  knex('users')
    .update(req.body)
    .where('id', req.params.id)
    .then(result => {
      if (result === 0) {
        return res.sendStatus(404)
      }
      res.sendStatus(204)
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})
module.exports = router
