export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    { id: 1, sub_title_id: 1, body: 'This is the first post.', user_id: 1, status: 'published' },
    { id: 2, sub_title_id: 2, body: 'This is the second post.', user_id: 2, status: 'draft' }
  ]);
};