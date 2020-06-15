<p align="center">

  # NodeJS Reflect Metada
  
  This app is like the features of an common ORM, but only the _findAll_ and  _create_ methods. The app uses _decorations_ in   the declarations of  _models_ .

</p>

## 👨🏼‍💻 Development Contact

David Nascimento

* [Github](https://github.com/david32145)
* [nascimento32145@gmail.com](https://gmail.com)

## 🚀 Technologies

* ts-node-dev; 
* dotenv; 
* typescript; 
* reflect-metadat; 
* knex; 
* mysql; 

## 🎌 What I've learned

* The reflect api; 
* Environment vars; 
* Typescript decorations; 
* How doing an ORM 😅.

## 🎥 How Usage

With `decoration` you can declarate the model like this:

``` ts
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

User
  .findAll()
  .then(console.log)
```

You can be view the full example into `src/index.ts` .

## ✋🏻 Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/pt-BR/docs/install)
* [SQL Database](https://www.mysql.com/)

## 🔥 Install and Running

1. Config you environment;
2. Git clone `git clone https://github.com/david32145/nodejs-reflect-metadata` ; 
3. Run `yarn install` or `npm install` for install dependencies;  
4. Copy .env.example to .env and fill with your config. Below an example of `.env` ; 

``` env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=reflect_matadata
DB_USER=root
DB_PASS=root
```
5. Run `yarn migration:up` or `npm run migration:up` for up database migrations;
6. Run `yarn dev` or `npm run dev` 
7. Edit `src/index.ts` and start the game.
