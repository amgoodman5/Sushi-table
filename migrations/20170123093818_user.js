
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments(),
    table.text('chef_name');
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
