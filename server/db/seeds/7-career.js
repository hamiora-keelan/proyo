export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('career').del();
  await knex('career').insert([
    { id: 1, user_id: 1, experience: '5 years', body: 'Worked as a software developer.', business_id: 1 },
    { id: 2, user_id: 2, experience: '3 years', body: 'Worked as a project manager.', business_id: 2 }
  ]);
};