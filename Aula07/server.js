const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({extend:true}));

app.get('/', (req, res)=>{
  res.send('<h1>Página inicial</h1>');
})

// definindo rota
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Detalhes do usuário com ID:${id}`);
})

//         | 
// inteiro V
app.get('/categorias/:categoria/produtos/:produtoId', (req, res) => {
  const categoria = req.params.categoria;
  const produtoId = req.params.produtoId;
  res.send(`Categoria: ${categoria} e Produto: ${produtoId}`)
}) 

// DUPLA
app.get('/categorias/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  res.send(`Categoria: ${categoria} `)
}) 

app.get('/produtos/:produtoId', (req, res) => {
  const produtoId = req.params.produtoId;
  res.send(` Produto: ${produtoId}`)
}) 

// Individual
app.post('/produtos', (req, res) =>{
  const novoProduto = req.body;
  console.log('Novo Projeto: ', novoProduto);
  res.send('Produto cria com sucesso!!!');
})


// 
app.options('/produtos/:id', (req, res) => {
  res.header('Allow', 'GET, OPTIONS');
  res.status(204).send();
});

// 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})
