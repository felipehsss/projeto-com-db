const fs = require('fs');

const dados = {
  configs: [
    { nome_aplicação: 'meu App', versao: "1.0.0", Debug_mode: true, porta: 3000 }
  ]
};






fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) {
    console.log('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    const dados = JSON.parse(data);
    dados.configs.forEach(config => {
      console.log(`Nome aplicação: ${config.nome_aplicação},\n versao: ${config.versao},\n Debug mode: ${config.Debug_mode},\n Porta: ${config.porta}`);
    });
  } catch (error) {
    console.log('Erro ao analisar o JSON:', error)
  }
})

