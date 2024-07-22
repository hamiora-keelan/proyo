export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('education_provider_user').del();
  await knex('education_provider_user').insert([
    { id: 1, provider: 'University A' },
    { id: 2, provider: 'Institute B' }
  ]);
};