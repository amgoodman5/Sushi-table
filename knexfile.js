// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sushi'
  },

  production: {
    client: 'pg',
    connection: process.env.PRODUCTION_URL + '?ssl=true'
  }
};
