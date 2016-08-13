const express = require('express')
const development = require('../../knexfile').development
const knex = require('knex')(development)

const router = express.Router()

router.get('/', (req, res) => {
  knex('tweets')
    .join('users', 'tweets.user_id', 'users.id')
    .select('name', 'content')
    .then(tweets => {
      res.json(tweets)
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

router.get('/:id', (req, res) => {
  knex('tweets')
    .join('users', 'tweets.user_id', 'users.id')
    .select('tweets.id as id', 'name', 'content')
    .where('tweets.id', parseInt(req.params.id, 10))
    .then(tweet => {
      if (tweet.length === 0) {
        return res.sendStatus(404)
      }
      res.json(tweet[0])
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

module.exports = router
