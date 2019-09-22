exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
    table.increments();
    table.string('title');
    table.string('body');
    table.string('author');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
