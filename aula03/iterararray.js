const dados = {
  produtos: [
    { nome: 'Produto A', preço: 10 },
    { nome: 'Produto B', preço: 20 },
    { nome: 'Produto C', preço: 30 }
  ]
};

dados.produtos.forEach(produto => {
  console.log(`Nome: ${produto.nome}, Preço: ${produto.preço}`);
});
