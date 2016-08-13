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

test.onFinish(() => {
  process.exit(0)
})
