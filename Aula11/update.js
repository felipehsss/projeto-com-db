const db = require('./conexao');

const clienteAtualizado = {
  nome: 'John Doe',
  email: 'Johndoe@gmail.com'
}

db.query('UPDATE clientes SET ? WHERE id = ?', [clienteAtualizado, 16], (err, results) => {
  if (err) {
    console.error('ERRO ao atualizar dados: ', err)
    return;
  }
  console.log('Dados atualizados com sucesso!!! Linhas afetadas: ', results.affectedRows)
  db.end();
})
