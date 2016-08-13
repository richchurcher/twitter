exports.up = (knex, Promise) => {
  return knex.schema.createTable('tweets', (table) => {
    table.increments('id').primary()
    table.string('content')
    table.integer('user_id').references('id').inTable('users')
      .onDelete('cascade')
      .onUpdate('cascade')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tweets')
}
