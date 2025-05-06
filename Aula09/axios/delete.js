const axios = require('axios');

axios.delete("https://jsonplaceholder.typicode.com/todos/1")
.then(response => {
  console.log("ToDo excluído com sucesso");
})
.catch(error => {
  console.error('Ocorreu um erro: ', error)
})