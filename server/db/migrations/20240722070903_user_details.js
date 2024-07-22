export async function up(knex) {
    await knex.schema.createTable('user_details', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.string('bio');
      table.string('profile_pic');
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('user_details');
  }