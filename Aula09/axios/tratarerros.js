const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/999')
// esta errado por conta do /999 o limite é 201
.then(response => {
  console.log('Dados recebidos: ', response.data);
})
.catch(error =>{
  console.log('Mensagem de Erro: ', error.message);
  console.log('Código de Status: ', error.response.status);
  console.log('Mensagem de Status:', error.response.statusText);
});

