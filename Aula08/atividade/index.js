const express = require('express');
const app = express();
const rotasProdutos = require('./rotasProdutos');
const rotasUsuarios = require('./rotasUsuarios');
const logger = require('./logging');
const autenticacao = require('./autenticacao');
const port = 3000;


app.use('/usuarios', rotasUsuarios);
app.use('/produtos', rotasProdutos);
app.use('/admin', autenticacao);
app.use(logger);

// raiz
app.get('/', (req, res) => {
  res.status(200).send('<h1>Página Inicial</h1>')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})