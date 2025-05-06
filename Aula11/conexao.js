const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aulaRodrigo'
});

connection.connect((err)=>{
  if(err){
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão estabelecida com sucesso!!! ')
});

module.exports = connection;