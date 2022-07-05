const faker = require('faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clucks').del()
    .then(function(){
      const clucks = [];
      for (let i = 1; i <= 10; i++) {
        clucks.push({
          username: faker.internet.userName(),
          content: faker.company.catchPhrase(),
          image_url: faker.image.imageUrl(640, 480, 'fashion', true)
        })
      }
      return knex('clucks').insert(clucks)
    })
};
