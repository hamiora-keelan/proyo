export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('projects').del();
  await knex('projects').insert([
    { id: 1, project_type_id: 1, user_id: 1, link: 'http://example.com/project1', hyperlink: 'Project 1' },
    { id: 2, project_type_id: 2, user_id: 2, link: 'http://example.com/project2', hyperlink: 'Project 2' }
  ]);
};