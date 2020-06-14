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

export function mapRowToModel<T>(row: Record<string, string>, model: Model): T {
  const colums = Object.keys(row)
  const fields = getTableColumns(model)
  const obj = Object.create(model.prototype)
  const getKey = (column: string) => fields.find(field => field.column === column)?.key
  colums.forEach(column => {
    const propertyKey = getKey(column)
    if(propertyKey) {
      obj[propertyKey] = row[column]
    }
  })
  return obj as T
}