const fs = require('fs')
const http = require("http")
const port = 3000

const server = http.createServer((req, res) => {
  
  res.writeHead(200, {'Content-type': 'text/html'})
  
  fs.readFile('Pages/index.html', function(error, data){
    if(error) {
      res.writeHead(404)
      res.writeHead("Erro ao carregar o arquivo.")
    } else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(port, function(error) {
  if(error) {
    console.log("O servidor nao abriu.", error)
  } else {
    console.log("server aberto na porta " + port)
  }
})

