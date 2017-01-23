exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 1;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    id: 1,
                    chef_name: 'Aaron',
                    email: 'amgoodman5@gmail.com',
                    password: 'aaron',
                }),
                knex('users').insert({
                    id: 2,
                    chef_name: 'Kristin',
                    email: 'Krissy@gmail.com',
                    password: 'krissy',
                }),

            ]);
        });
};
