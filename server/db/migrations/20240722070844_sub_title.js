export async function up(knex) {
    await knex.schema.createTable('sub_title', function(table) {
      table.increments('id').primary();
      table.string('sub_title').notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('sub_title');
  }