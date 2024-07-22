export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_details').del();
  await knex('user_details').insert([
    { id: 1, user_id: 1, bio: 'Hello, I am John.', profile_pic: 'john_pic.jpg' },
    { id: 2, user_id: 2, bio: 'Hi, I am Jane.', profile_pic: 'jane_pic.jpg' }
  ]);
};