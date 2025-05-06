const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/todos', {
  useId: 1,
  title:"comprar pão",
  completed: false
})
.then(response => {
  console.log('Novo ToDo criado: ', response.data);
}) .catch(error => {
  console.log('Ocorreu um erro: ', error )
});
