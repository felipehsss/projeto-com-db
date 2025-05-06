const express = require('express');
const router = express.Router();
// middleware
const autenticar = (req, res, next) => {
  const token = req.headers['authorization'];
  if(token === 'SENHA'){
    next();
  }else{
    res.status(401).send('Acesso negado/ não autorizado')
  }
}

router.get('/', autenticar, (req , res) => {
  res.status(200).send('Página de adm!')
})



router.options('/', (req, res) => {
  res.header('Allow', 'GET, OPTIONS');
  res.status(204).send();
})

module.exports = router
