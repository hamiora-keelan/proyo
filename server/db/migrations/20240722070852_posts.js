export async function up(knex) {
    await knex.schema.createTable('posts', function(table) {
      table.increments('id').primary();
      table.integer('sub_title_id').unsigned().notNullable().references('id').inTable('sub_title');
      table.text('body').notNullable().comment('Content of the post');
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.string('status').notNullable();
      table.string('media');
      table.boolean('is_media').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('posts');
  }