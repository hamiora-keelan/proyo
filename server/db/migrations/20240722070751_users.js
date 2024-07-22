export async function up(knex) {
    await knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('phone').unique();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('users');
  }
