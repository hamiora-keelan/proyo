export async function up(knex) {
    await knex.schema.createTable('project_type_id', function(table) {
      table.increments('id').primary();
      table.string('type').notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('project_type_id');
  }