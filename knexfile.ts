import path from "path"

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      port: '13306',
      host: 'localhost',
      database: 'reflect_matadata',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, "migrations")
    }
  },
};
