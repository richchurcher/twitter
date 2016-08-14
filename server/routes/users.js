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
    .where('id', parseInt(req.params.id, 10))
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

router.get('/:id/followers', (req, res) => {
  knex('followers')
    .join('users', 'followers.follower_id', 'users.id')
    .select(
      'users.name as username',
      'users.id as user_id'
    )
    .where('user_id', req.params.id)
    .then(followers => {
      res.json(followers)
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

router.delete('/:id/followers/:fid', (req, res) => {
  knex('followers')
    .where('follower_id', req.params.fid)
    .del()
    .then(rows => {
      console.log(rows)
      if (rows === 0) {
        return res.sendStatus(404)
      }
      res.sendStatus(204)
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`)
    })
})

module.exports = router
