import Model from "./core/Model"

class User {
  private _id!: number
  private _name!: string
  private _email!: string
  private _description!: string

  public get id() : number {
    return this._id
  }

  public get name() : string {
    return this._name
  }
  
  public get email() : string {
    return this._email
  }

  public get description() : string {
    return this._description
  }
}