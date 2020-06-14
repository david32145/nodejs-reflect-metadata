import "reflect-metadata"
import Repository, {Table, Column} from "./core/Model"

@Table("users")
class User extends Repository{
  @Column("id", true)
  public id!: number
  @Column("name")
  public name!: string
  @Column("email")
  public email!: string
  @Column("description")
  public description!: string

  public toJSON(): Object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      description: this.description
    }
  }
}

@Table("products")
class Product extends Repository {
  @Column("id", true)
  public id!: number
  @Column("title")
  public title!: string
  @Column("price")
  public price!: number

  public toJSON(): Object {
    return {
      id: this.id,
      title: this.title,
      price: this.price,
    }
  }
}



async function main(): Promise<void> {
  const users = await User.findAll()
  users.forEach(user => {
    if(user instanceof User) {
      console.log(user.toJSON())
    }
  })

  // const newUser = new User()
  // newUser.name = "Daniela"
  // newUser.email = "dani@gmail.com"
  // newUser.description = "Daniela description"

  // // await User.create(newUser)

  // const newProduct = new Product()
  // newProduct.title = "Product 1"
  // newProduct.price = 12.9
  // await Product.create(newProduct)

  const products = await Product.findAll()
  products.forEach(product => {
    if(product instanceof Product) {
      console.log(product.toJSON())
    }
  })
}

main()
  .then(console.log)
  .catch(console.error)