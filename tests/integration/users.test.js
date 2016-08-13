import test from 'tape'
import request from 'supertest'

import app from '../../server/index'

test('/users returns an array', t => {
  const expected = true
  request(app)
    .get('/api/users')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actual = Array.isArray(res.body)
      t.equal(err, null)
      t.equal(actual, expected)
      t.end()
    })
})

// Prerequisite: requires seed to have run!
test('/user/:id returns the correct ', t => {
  const expected = {
    id: 99901, 
    name: 'Ambitious Aardvark', 
    email: 'aardvark@example.org'
  }
  request(app)
    .get(`/api/users/${expected.id}`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actual = res.body
      t.equal(err, null)
      t.deepEqual(actual, expected)
      t.end()
    })
})

test.onFinish(() => {
  process.exit(0)
})
