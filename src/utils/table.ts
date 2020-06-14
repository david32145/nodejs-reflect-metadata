import { Model, Field } from "../core/Model"

export function getTableName(model: Model): string {
  const tableName = Reflect.getMetadata("@table", model.prototype)
  if(tableName) {
    return tableName
  }
  
  return model
    .toString()
    .split ('(' || /s+/)[0].split (' ' || /s+/)[1]
    .toLowerCase()
}

export function getTableColumns(model: Model): Field [] {
  const keys = Object.getOwnPropertyNames(model.prototype)
  const fields: Field[] = (Reflect.getOwnMetadata('@fields', model.prototype) || []) as Field[];
  return fields
}