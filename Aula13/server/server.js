const express = require('express');
const app = express();
const port = 3000;
const db = require ('./db.js');

app.use(express.json());

app.get('/', (req,res) => {
  res.send('Página incial');
});

// GET - SELECT - LISTAR TODOS
app.get('/tarefas', async (req,res) => {

  try{
    const [rows] = await db.query('SELECT * FROM tarefas');
    res.json(rows);
  } catch(err){
    console.error(err);
    res.status(500).send('Erro ao buscar tarefas');
  }

});

// GET - SELECT - PARAMETRO - LISTAR POR ID
app.get('/tarefas/:id',async (req, res) => {
  const {id} = req.params;
  try {
    const[rows] = await db.query('SELECT * FROM tarefas WHERE id = ?', req.params.id);
    if(rows.length > 0){
      res.json(rows[0]);
    }else{
      res.status(404).send('Tarefa não encotrado');
    }
  }catch(err){
    console.error(err);
    res.status(500).send('Erro ao buscar tarefa')
  }
}) ;

// POST - INSERT INTO - CRIAR DADOS NOVOS
//VERIFICAR SE VAI PRECISAR DE ID
app.post('/tarefas', async (req,res) => {
  const{titulo, descricao, status} = req.body;
  try {
    const [result] = await db.query('INSERT INTO tarefas (titulo , descricao, status) VALUES(?,?,?)',[titulo,descricao,status]);
    res.status(201).json({id: result.insertId, titulo,descricao,status});
  }catch(err){
    console.error(err);
    res.status(500).send('Erro ao criar tarefa');
  }
})

// PUT - ATUALIZAR  DADOS 
app.put('/tarefas/:id', async (req,res) =>{
  const { id } = req.params;
  const {titulo,descricao,status} = req.body;
  try{
    const [result] = await db.query('UPDATE tarefas SET titulo = ?,descricao = ?,status = ? where id = ?',[titulo,descricao,status,id]);
    if(result.affectedRows > 0){
      res.status(201).json({id,titulo,descricao,status});
    }else{
      res.status(404).send('Tarefa não encontrada')
    }
  }catch(err){
    console.error(err);
    res.status(500).send('Erro ao atualizar tarefa');
  }
});

// DELETE/DELETE - DELETAR DADOS
app.delete('/tarefas/:id',async (req,res) => {
  const { id } = req.params;
  try{
   const [result] = await db.query('DELETE FROM tarefas WHERE id = ?', [id]);


   if (result.affectedRows > 0) {
    res.status(204).send();
  }else{
    res.send(404).send('Tarefa não encontrada')
  }
  }catch(err){
    console.error(err);
    res.status(500).send('Erro ao excluir tarefa')
  }
  
  });

  app.listen(port,() =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
  })


