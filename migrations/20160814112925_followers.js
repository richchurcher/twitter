exports.up = (knex, Promise) => {
  return knex.schema.createTable('followers', table => {
    table.increments('id').primary()
    // NOTE: this is one of the few cases where ON DELETE CASCADE might make sense.
    // If a user is deleted, we don't want to keep records of follower relationships
    // that can no longer exist.
    table.integer('user_id').references('users.id')
      .onDelete('cascade')
      .onUpdate('cascade')
    table.integer('follower_id').references('users.id')
      .onDelete('cascade')
      .onUpdate('cascade')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('followers')
}
