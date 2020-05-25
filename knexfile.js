require('dotenv').config({ path: `${__dirname}/.env` });
const dbUrl = process.env.DATABASE_URL;
let connection = dbUrl;
if (!dbUrl) {
  const {
    DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_HOST, DATABASE_PORT,
  } = process.env;
  connection = `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
}

const dbConfig = {
  client: 'postgresql',
  connection: dbUrl ? `${connection}?ssl=true` : connection, // ssl required by heroku
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + '/tmp',
  },
};

module.exports = dbConfig;
