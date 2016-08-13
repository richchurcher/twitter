import test from 'tape'
import request from 'supertest'

import app from '../../server/index'

test('/tweets returns an array', t => {
  const expected = true
  request(app)
    .get('/api/tweets')
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
test('/tweets/:id returns the correct tweet', t => {
  const expected = {
    id: 88801,
    content: 'A tweet.', 
    name: 'Ambitious Aardvark'
  }
  request(app)
    .get(`/api/tweets/${expected.id}`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actual = res.body
      t.equal(err, null)
      t.deepEqual(actual, expected)
      t.end()
    })
})

test('POST /tweets/:id adds a tweet', t => {
  const expected = {
    content: 'Dem moves like Jagger.',
    user_id: 99902
  }
  request(app)
    .post('/api/tweets')
    .send(expected)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      const actual = res.body
      t.equal(err, null)
      t.equal(actual.content, expected.content)
      t.equal(actual.user_id, expected.user_id)
      t.end()
    })
})

test.onFinish(() => {
  process.exit(0)
})
