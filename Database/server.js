const express = require("express")
const app = express()

const dbServer = require("./dbService")

const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// create
app.post("/insert", (resquest, response) => {

})


app.get("/getAll", (request, response) => {
  response.json({
    success: true,

  })
})


app.listen(process.env.PORT, () => console.log("App is running"))