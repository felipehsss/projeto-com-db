const express =require('express');
const app = express();
const port = 3000;
// middleware
const logger = (req, res, next) => {
  const data = new Date();
  console.log(`[${data.toISOString()}] ${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.get('/produtos' , (req, res) => {
  res.status(200).send('Lista de Produtos.')
});

// rota raiz
app.get('/', (req, res) => {
  res.status(200).send('<h1> Home </>');
})

app.listen(port, () => {
  console.log(`Servidor rodando http://localhost${port}`);
})