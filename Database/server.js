const express = require("express")
const app = express()
const dbService = require("./dbService")


const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))




app.get('/getAll', (request, response) => {
  const classeBanco = new dbService.DbService()
  const resultado = classeBanco.queryTodosCards()
  // console.log(resultado)

  resultado
    .then(data => response.json({ data: data }))
    .catch(erro => console.log(erro))
})




app.get('/getPalestra/:idPesquisa', (request, response) => {
  const { idPesquisa } = request.params

  const classeBanco = new dbService.DbService()
  const resultado = classeBanco.queryPalestra(idPesquisa)

  resultado
    .then(data => response.json({ data: data }))
    .catch(erro => console.log(erro))
})




app.post('/insert', (request, response) => {
  console.log("Inseri inscricao pela primeira vez")
  const classeBanco = new dbService.DbService()
  const resultado = classeBanco.insertUsuario(request.body)


  resultado
    .then(classeBanco.vinculaPalestraUsuario([request.body["iptCpf"], request.body["id_palestra"]]))
    .then(data => response.json({ data: data }))
    .catch(erro => console.log(erro))
})




app.get('/getInscricao/:idPesquisa', (request, response) => {
  const { idPesquisa } = request.params

  const classeBanco = new dbService.DbService()
  const resultado = classeBanco.queryInscricao(idPesquisa)

  resultado
    .then(data => response.json({ data: data }))
    .catch(erro => console.log(erro))
})




app.patch('/update', (request, response) => {
  console.log("Executei update")
  console.log(request.body)

  const { cpf, palestra } = request.body
  const classeBanco = new dbService.DbService()

  const resultado = classeBanco.atualizaInscricao(cpf, palestra)
  resultado
    .then(data => response.json({ data: data }))
    .catch(erro => console.log(erro))
}) 

app.listen(process.env.PORT, () => console.log("App is running"))