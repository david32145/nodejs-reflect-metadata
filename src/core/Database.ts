import knex from "knex"
export default knex({
  client: 'mysql',
  connection: {
    port: 13306,
    host: 'localhost',
    database: 'reflect_matadata',
    user: 'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
})