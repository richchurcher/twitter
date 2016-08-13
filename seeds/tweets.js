exports.seed = (knex, Promise) => {
  return knex('tweets').del()
    .then(() => {
      return Promise.all([
        knex('tweets').insert({id: 88801, content: 'A tweet.', user_id: 99901}),
        knex('tweets').insert({id: 88802, content: 'Another tweet.', user_id: 99902}),
        knex('tweets').insert({id: 88803, content: 'More tweeting.', user_id: 99903}),
        knex('tweets').insert({id: 88804, content: 'More tweeting.', user_id: 99903}),
        knex('tweets').insert({id: 88805, content: 'More tweeting.', user_id: 99903}),
        knex('tweets').insert({id: 88806, content: 'More tweeting.', user_id: 99903}),
        knex('tweets').insert({id: 88807, content: 'More tweeting.', user_id: 99904}),
        knex('tweets').insert({id: 88808, content: 'More tweeting.', user_id: 99904}),
        knex('tweets').insert({id: 88809, content: 'More tweeting.', user_id: 99905})
      ])
    })
}
