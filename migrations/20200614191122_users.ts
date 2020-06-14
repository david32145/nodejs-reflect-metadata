import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("users", table => {
    table.increments("id")
    table.string("name")
    table.string("email")
    table.string("description")
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("users")
}

