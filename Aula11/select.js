const db = require('./conexao');

db.query('SELECT * FROM clientes', (err, results, fields) => {
  if(err) {
    console.error('Erro ao executar a consulta: ',err);
    return;
  }
  console.log('Resultados da consulta: ', results);
  console.log('Campos da consulta', fields);

});

db.end((err)=>{
  if(err){
    console.error('Erro ao encerrar a conexão: ', err)
  }
  console.log('Conexão encerrada com sucesso!!!');
});

