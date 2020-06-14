import { getTableName, getTableColumns } from "../utils/table";

export interface Field {
  key: string
  column: string
}

export type Model = Function

class Repository {
  public static findAll(model: Model) {
    const tableName = getTableName(model)
    const fields = getTableColumns(model)
    
  }
}

export function Table(tableName?: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata("@table", tableName, constructor.prototype)
  }
}

export function Column(column: string): PropertyDecorator {
  return (target, key) => {
    const fields = (Reflect.getOwnMetadata('@fields', target) || []) as Field[];
    const hasField = fields.find(field => String(field.key) === String(key))
    if (!hasField) {
      fields.push({
        key: String(key),
        column
      })
    }
    Reflect.defineMetadata('@fields', fields, target)
  }
}

export default Repository