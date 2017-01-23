
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sushi', function(table) {
    table.increments();
    table.text('sushi_name').notNullable();
    table.text('sushi_type');
    table.text('sushi_fish');
    table.text('sushi_difficulty');
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sushi');
};
