export async function up(knex) {
    await knex.schema.createTable('projects', function(table) {
      table.increments('id').primary();
      table.integer('project_type_id').unsigned().notNullable().references('id').inTable('project_type_id');
      table.string('media');
      table.boolean('is_media').defaultTo(false);
      table.string('link');
      table.string('hyperlink');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('projects');
  }