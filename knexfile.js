// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cluckr',
      user:     'xiaojunlin',
      password: null
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds'
    }
  }
};
