const db = require('./conexao');

const novoCliente = {
  nome: 'Rdrigo Alvarez',
  email:'rodrigu.alvarez@docente.senai.br',
  endereco:'R. Boa Vistaa, 825'
}

// ('INSERT INTO clientes(nome,email,enderco) VALUES (?,?,?)',[novoCliente.nome,[])
db.query('INSERT INTO clientes SET ?', novoCliente, (err, results) => {

  if (err) {
  console.error('Erro ao inserir dados: ', err);
  return;
}
console.log('Dados inseridos com sucesso!!! Id do novo cliente ', results.insertId);
db.end();

});


