export async function up(knex) {
    await knex.schema.createTable('skills', function(table) {
      table.increments('id').primary();
      table.string('skill').notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('skills');
  }