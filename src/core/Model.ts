import { getTableName, getTableColumns, mapRowToModel } from "../utils/table";

import Database from "./Database"

export interface Field {
  key: string
  column: string
  autoIncrement: boolean
}

export type Model = Function

class Repository {
  public static async findAll<T extends Repository>(this: { new (): T }): Promise<T[]> {
    const tableName = getTableName(this)   
    const rows = await Database<T>(tableName)
    return rows.map(row => mapRowToModel(row as Record<string, string>, this))
  }

  public static async create<T extends Repository>(this: { new (): T }, obj: T): Promise<void> {
    const tableName = getTableName(this)    
    const fields = getTableColumns(this)
    const keyVal: Record<string, T[keyof T]> = {}
    fields.forEach(field => {
      if(!field.autoIncrement) {
        const keyOption = field.key as keyof T
        const value = obj[keyOption]
        keyVal[field.column] = value
      }
    })
    await Database(tableName).insert(keyVal)
  }
}

export function Table(tableName?: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata("@table", tableName, constructor.prototype)
  }
}

export function Column(column?: string, autoIncrement = false): PropertyDecorator {
  return (target, key) => {
    const fields = (Reflect.getOwnMetadata('@fields', target) || []) as Field[];
    const hasField = fields.find(field => String(field.key) === String(key))
    if (!hasField) {
      fields.push({
        key: String(key),
        column: column || key.toString().toLowerCase(),
        autoIncrement
      })
    }
    Reflect.defineMetadata('@fields', fields, target)
  }
}

export default Repository