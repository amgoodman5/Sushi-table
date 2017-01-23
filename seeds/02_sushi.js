exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "sushi"; ALTER SEQUENCE users_id_seq RESTART WITH 13;')
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('sushi').insert({
          id: 1,
          sushi_name: 'Taki',
          sushi_type: 'Roll',
          sushi_fish:'Octapus',
          sushi_difficulty:'easy',
          users_id:1
        }),
        knex('sushi').insert({
          id: 2,
          sushi_name: 'Salmon',
          sushi_type: 'Roll',
          sushi_fish:'Salmon',
          sushi_difficulty:'easy',
          users_id:1
        }),
        knex('sushi').insert({
          id: 3,
          sushi_name: 'Uni',
          sushi_type: 'Nagiri',
          sushi_fish:'Sea Urchant',
          sushi_difficulty:' hard',
          users_id:2
        }),
        knex('sushi').insert({
          id: 4,
          sushi_name: 'Mackrel',
          sushi_type: 'Nagiri',
          sushi_fish:'Mackrel',
          sushi_difficulty:'easy',
          users_id:2
        }),
        knex('sushi').insert({
          id: 5,
          sushi_name: 'Lobster',
          sushi_type: 'Roll',
          sushi_fish:'Lobster',
          sushi_difficulty:'hard',
          users_id:1
        })

      ]);
    });
};
