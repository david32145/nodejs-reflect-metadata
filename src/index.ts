import "reflect-metadata"
import Repository, {Table, Column} from "./core/Model"

@Table("users")
class User {
  @Column("id")
  private _id!: number
  @Column("name")
  private _name!: string
  @Column("email")
  private _email!: string
  @Column("descrition")
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

  public test() {
    return "bosta"
  }

  public get description() : string {
    return this._description
  }
}

Repository.findAll(User)