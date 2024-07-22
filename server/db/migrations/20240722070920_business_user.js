export async function up(knex) {
    await knex.schema.createTable('business_user', function(table) {
      table.increments('id').primary();
      table.string('business').notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('business_user');
  }
