export async function up(knex) {
    await knex.schema.createTable('career', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.string('experience').notNullable();
      table.text('body');
      table.integer('business_id').unsigned().references('id').inTable('business_user');
      table.string('media');
      table.boolean('is_media').defaultTo(false);
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('career');
  }