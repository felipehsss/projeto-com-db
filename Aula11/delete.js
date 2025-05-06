const db = require('./conexao');

db.query('DELETE FROM clientes WHERE id = ?',[6],(err,results) =>{
  if(err){
    console.error('Erro ao deletar dados: ',err);
    return;
  }
  console.log('Ddos deletados com sucesso! Linhas afetadas: ', results.affectedRows);
  db.end();
})