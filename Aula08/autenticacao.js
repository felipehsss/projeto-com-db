const express = require('express');
const app = express();
const port = 3000;
// middleware
const autenticar = (req , res, next) =>{
  // Simulação de autenticação: NUNCA usar em produção!!!
  const token = req.headers['authorization'];
  if(token === 'SEGREDO') {
      next() // se autenticado 
  }else{
    res.status(401).send('Acesso negado/Não autorizado')
  }
}

// rota que precisa de autenticação
app.get('/admin', autenticar, (req, res)=>  {
  res.status(200).send('Página de administração!');
})


// raiz
app.get('/', (req, res) => {
  // res para o cliente ver a mensagem
    res.status(200).send('<h1>Página Inicial</h1>');
})

// 
app.listen(port, () =>{
 // para o console
  console.log(`Servidor rodando em http://localhost:${port}`);
})

