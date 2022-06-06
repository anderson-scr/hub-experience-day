async function connect() {
  if(global.connection && global.connection.state !== "disconnected")
    return global.connection;
  
  const mysql = require("mysql2")
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'anderson',
    database: 'expday',
    password: "@Zg%kFKhNitK"
  });
  

  // console.log("Conectou no Banco")
  global.connection = connection
  return connection
}
connect()



async function queryUsuarios() {
  const conn = await connect()
  conn.execute(
  'SELECT * FROM usuario',

  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    const resultados = results
    return resultados
  }

)};
queryUsuarios();
