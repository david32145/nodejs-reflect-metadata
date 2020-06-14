import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("products", table => {
    table.increments("id")
    table.string("title")
    table.decimal("price")
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("products")
}

