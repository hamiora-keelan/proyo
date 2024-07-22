export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sub_title').del();
  await knex('sub_title').insert([
    { id: 1, sub_title: 'Introduction' },
    { id: 2, sub_title: 'Conclusion' }
  ]);
};