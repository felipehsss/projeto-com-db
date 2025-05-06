const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('Lista de Produtos')
})

router.get('/:id', (req, res)=> {
  const id = req.params.id;
  res.send(`Detalhes dos produtos com ID: ${id}`);
})

router.options('/', (req, res) => {
  res.header('Allow', 'GET, OPTIONS');
  res.status(204).send;
})

module.exports = router;