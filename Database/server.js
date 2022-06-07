const express = require("express")
const app = express()
const dbService = require("./dbService")


const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/getAll', (request, response) => {
  console.log("Ta rodando aqui?")
  const dbzin = new dbService.DbService()  
})


app.listen(process.env.PORT, () => console.log("App is running"))