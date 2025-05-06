const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.log('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    const dados = JSON.parse(data);
    console.log(dados.nome);
    // pode ser manipulado das duas maneiras
    // console.log(dados['nome']);
    console.log(dados.endereço.rua);

    console.log(dados.telefones[0]);

    dados.telefones.forEach(telefone => {
     console.log(`Telefone: ${telefone}`); 
    });
  } catch (error) {
    console.log('Erro ao analisar o JSON:', error)
  }
})