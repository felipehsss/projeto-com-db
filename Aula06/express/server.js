const express = require('express');
const app = express();
const port = 3000;
const produtos = [
  { id: 1, nome: 'Produto A', preço: 10.00 },
  { id: 2, nome: 'Produto B', preço: 20.00 },
  { id: 3, nome: 'Produto C', preço: 30.00 }
]


app.get('/', (req, res) => {
  res.send('Página Inicial');
})

app.get('/produtos', (req, res) => {
  res.send('Lista de produtos');
})

app.get('/produtos/:id', (req, res) => {
  const id = req.int.params.id
  const produtos = produtos.find(produtos => produtos.id == id)
  if (produtos) {
    res.send(produtos)
  } else {
    res.status(404).send('Produto não encontrado!');
  }
})

  

app.listen(port, () => {
  console.log(`Servidor rodando em http://lcoalhost:${port}`);
})

