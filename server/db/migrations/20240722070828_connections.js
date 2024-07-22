export async function up(knex) {
    await knex.schema.createTable('connections', function(table) {
      table.increments('id').primary();
      table.integer('connecting_user_id').unsigned().notNullable().references('id').inTable('users');
      table.integer('connected_user_id').unsigned().notNullable().references('id').inTable('users');
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTableIfExists('connections');
  }