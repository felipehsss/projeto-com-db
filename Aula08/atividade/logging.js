const express =require('express');
const app = express();
const port = 3000;
const router = express.Router();
// middleware
const logger = (req, res, next) => {
  const data = new Date();
  console.log(`[${data.toISOString()}] ${req.method} ${req.url}`);
  next();
}


router.get('/' , (req, res) => {
  res.status(200).send('Lista de Produtos.')
});

module.exports = router;