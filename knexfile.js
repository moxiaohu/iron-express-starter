const dbUrl = process.env.DATABASE_URL; // Heroku related
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
  },
};

module.exports = dbConfig;
