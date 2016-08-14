exports.seed = (knex, Promise) => {
  return knex('followers').del()
    .then(() => {
      return Promise.all([
        knex('followers').insert({id: 77701, user_id: 99904, follower_id: 99905}),
        knex('followers').insert({id: 77702, user_id: 99903, follower_id: 99906}),
        knex('followers').insert({id: 77703, user_id: 99907, follower_id: 99903}),
        knex('followers').insert({id: 77704, user_id: 99906, follower_id: 99903}),
        knex('followers').insert({id: 77705, user_id: 99906, follower_id: 99909}),
        knex('followers').insert({id: 77706, user_id: 99906, follower_id: 99919}),
        knex('followers').insert({id: 77707, user_id: 99906, follower_id: 99912}),
        knex('followers').insert({id: 77708, user_id: 99906, follower_id: 99913}),
        knex('followers').insert({id: 77709, user_id: 99906, follower_id: 99916}),
        knex('followers').insert({id: 77710, user_id: 99906, follower_id: 99917})
      ])
    })
}
