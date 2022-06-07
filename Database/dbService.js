const mysql = require("mysql2")
const dotenv = require("dotenv")
const { response } = require("express")
let instance = null
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
})

class DbService {
  static getDbServiceInstance() {
    return instance? instance : new DbService()
  }

  async queryTodosCards() {
    try {
      const resultado = await new Promise((resolve, reject) => {
        const pesquisa = "SELECT * FROM usuario"
  
        connection.execute(pesquisa, (err, results) => {
            // Retorna o erro com a query se der alguma coisa
            if(err) reject(new Error(err.message))
            console.log(`ta vindo de dentro da query principal: ${JSON.stringify(results)}`)
            resolve(results)
          }
        )      
      })
      return resultado
    } 
    catch(error) {

      console.log(error)
    }
  }
}



// async function queryTodosCards() {
//   const pesquisa = "SELECT * FROM usuario"

//   return await connection.execute(pesquisa, (err, results) => {
//     // Retorna o erro com a query se der alguma coisa
//     if(err) reject(new Error(err.message))
//     resolve(JSON.stringify(results)) 

//   })
// }



// function teste() {
//     connection.execute(
//     'SELECT * FROM usuario',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//     }
//   )
// }

module.exports = {DbService}