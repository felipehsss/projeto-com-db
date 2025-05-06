const fs = require('fs');

const dados = {
  nome: 'Felipe',
  idade: 17,
  cidade: 'São Caetano do sul'
};

const jsonData = JSON.stringify(dados, null, 2);

fs.writeFile('dados2.json', jsonData, "utf8", (err) => {
  if(err){
    console.log('Erro ao escrever arquivo: ', err);
    return;
  }
  console.log('Dados gravados com sucesso no arquivo!!!');
})