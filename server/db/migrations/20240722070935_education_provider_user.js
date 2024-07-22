export async function up(knex) {
    await knex.schema.createTable('education_provider_user', function(table) {
      table.increments('id').primary();
      table.string('provider').notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('education_provider_user');
  }