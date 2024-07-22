export async function up(knex) {
    await knex.schema.createTable('education', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.string('university').notNullable();
      table.date('period');
      table.text('body');
      table.integer('education_provider_id').unsigned().references('id').inTable('education_provider_user');
      table.string('media');
      table.boolean('is_media').defaultTo(false);
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('education');
  }