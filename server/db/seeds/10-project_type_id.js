export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('project_type_id').del();
  await knex('project_type_id').insert([
    { id: 1, type: 'Personal' },
    { id: 2, type: 'Professional' }
  ]);
};