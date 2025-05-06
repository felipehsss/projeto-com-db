const fs = require('fs');

const dados = {
  produtos: [
    { nome: 'Produto A', preço: 10, Descrição: "Este é o Produto A", Categoria: "00A" },
    { nome: 'Produto B', preço: 20, Descrição: "Este é o Produto B", Categoria: "00B" },
    { nome: 'Produto C', preço: 30, Descrição: "Este é o Produto C", Categoria: "00C" },
  ]
};

dados.produtos.forEach(produto => {
  console.log(`Nome: ${produto.nome}, Preço: ${produto.preço}, Descrição: ${produto.Descrição}, Categoria: ${produto.Categoria}`);
});


const jsonData = JSON.stringify(dados, null, 2);

fs.writeFile('dados_att2.json', jsonData, "utf8", (err) => {
  if(err){
    console.log('Erro ao escrever arquivo: ', err);
    return;
  }
  console.log('Dados gravados com sucesso no arquivo!!!');
})