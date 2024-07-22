export async function users(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, username: 'john_doe', email: 'john.doe@example.com', phone: '1234567890' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', phone: '0987654321' }
  ]);
};
