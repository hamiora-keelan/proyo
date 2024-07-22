export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('business_user').del();
  await knex('business_user').insert([
    { id: 1, business: 'TechCorp' },
    { id: 2, business: 'HealthInc' }
  ]);
};