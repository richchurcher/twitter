const express = require('express')
const development = require('../../knexfile').development
const knex = require('knex')(development)

const router = express.Router()

router.get('/', (req, res) => {
  knex('tweets')
    .join('users', 'tweets.user_id', 'users.id')
    .select('tweets.id as id',
      'users.name as username',
      'tweets.user_id as user_id',
      'content')
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
    .select('tweets.id as id',
      'users.name as username',
      'tweets.user_id as user_id',
      'content')
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

router.post('/', (req, res) => {
  knex('users')
    .count('id as n')
    .where('id', req.body.user_id)
    .then((count) => {
      if (count[0].n === 0) {
        return res.sendStatus(404)
      }
      knex('tweets')
        .insert(req.body)
        .then((id) => {
          knex('tweets')
            .select()
            .where('id', id[0])
            .then(tweet => {
              res.status(201).json(tweet[0])
            })
        })
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

router.put('/:id', (req, res) => {
  knex('tweets')
    .update(req.body)
    .where('id', req.params.id)
    .then(result => {
      if (result === 0) {
        return res.sendStatus(404)
      }
      res.sendStatus(204)
    })
    //.catch(err => {
      //res.status(500).send(`DATABASE ERROR: ${err.message}`)
    //})
})

module.exports = router
