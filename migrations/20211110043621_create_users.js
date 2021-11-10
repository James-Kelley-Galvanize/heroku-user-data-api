const { table } = require("console");

exports.up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
    table.increments('id');
    table.string('name');
    table.string('phone');
    table.string('address');
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
