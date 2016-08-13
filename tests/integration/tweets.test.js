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
    content: 'More tweeting.',
    id: 88809,
    user_id: 99905,
    username: 'Exuberant Elephant'
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

test('PUT /tweets/:id modifies a tweet', t => {
  const expected = 'I have nothing to say, therefore I must say it.'
  request(app)
    .get('/api/tweets')
    .end((err, res) => {
      const modified = res.body[0]
      modified.content = expected
      delete modified.username
      request(app)
        .put(`/api/tweets/${modified.id}`)
        .send(modified)
        .expect(204)
        .end((err, res) => {
          t.equal(err, null)
          t.end()
        })
    })
})

test.onFinish(() => {
  process.exit(0)
})
