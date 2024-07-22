export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('skills').del();
  await knex('skills').insert([
    { id: 1, skill: 'JavaScript', user_id: 1 },
    { id: 2, skill: 'Project Management', user_id: 2 }
  ]);
};