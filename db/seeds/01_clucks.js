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
      
      const extraDataCreatedByOwner = 
      [
        {
          username: 'Julie',
          content: 'Nobody is having chicken for dinner! This is a chicken app! \r\n' +
            'Remember? @Summer 🥺\r\n' +
            '#chickeniscute',
          image_url: 'https://i.gifer.com/E1tD.gif',
        },
        {
          username: 'Summer',
          content: "Finally finished the quiz! 🥳 I'm going to have spicy chicken pot for dinner! Yummy 😋",
          image_url: 'https://i.gifer.com/7HKP.gif',
        },
        {
          username: 'Ivan',
          content: 'I love this LV bag!! #louisvuitton #fashion #luxury #2022summer',
          image_url: 'https://www.designscene.net/wp-content/uploads/2022/04/Miranda-Kerr-LOUIS-VUITTON-Capucines-Bag-00.jpg',
        },
        {
          username: 'Germanshepherd_heaven1',
          content: 'Such Adorable puppy\r\nRate this cuteness out of 10😍😘\r\n#puppy #dog',
          image_url: 'https://pbs.twimg.com/media/FW6BiaoaQAAdgm-?format=png&name=small',
        },
        {
          username: 'Pug Lover',
          content: 'Such cute eyes😍\r\nWho love this cutie\r\n#dog #puppy ',
          image_url: 'https://pbs.twimg.com/media/FW5o9M_acAEc6Us?format=jpg&name=small',
        },
        {
          username: 'Justin Bieber',
          content: 'Baby Baby Baby Ohh~~~',
          image_url: 'https://thumbs.gfycat.com/SpottedFavoriteAmericangoldfinch-max-1mb.gif',
        },
        {
          username: 'Student2',
          content: 'Thank god. This quiz is easier than the express assignment. ',
          image_url: 'https://thumbs.gfycat.com/DenseIncompatibleHydatidtapeworm-size_restricted.gif',
        },
        {
          username: 'Julie',
          content: "It's such a beautiful day! It's a shame that some people need to stay at home and take the quiz lol.",
          image_url: 'https://whoissamjarvis.files.wordpress.com/2016/06/anistoncry.gif',
        },
        {
          username: 'Summer',
          content: 'Can I post a cluck without an image?',
          image_url: '',
        },
        {
          username: 'Summer',
          content: 'Maple bacon pizza is the best!',
          image_url: 'https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.smokey-maple-bacon.aba60247a0c4b5716ee2230e19ae3f00.1.jpg',
        },
        {
          username: 'Summer',
          content: "I'm working on the quiz now.",
          image_url: 'https://images.coplusk.net/project_images/208626/image/2019-11-27-210127-burger.jpg',
        },
      ];

      clucks.push(...extraDataCreatedByOwner);

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
