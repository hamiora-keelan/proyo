export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('education').del();
  await knex('education').insert([
    { id: 1, user_id: 1, university: 'University A', period: '2020-06-01', body: 'Studied Computer Science.', education_provider_id: 1 },
    { id: 2, user_id: 2, university: 'Institute B', period: '2019-06-01', body: 'Studied Business Management.', education_provider_id: 2 }
  ]);
};