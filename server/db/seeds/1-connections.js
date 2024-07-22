export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('connections').del();
  await knex('connections').insert([
    { id: 1, connecting_user_id: 1, connected_user_id: 2 },
    { id: 2, connecting_user_id: 2, connected_user_id: 1 }
  ]);
};