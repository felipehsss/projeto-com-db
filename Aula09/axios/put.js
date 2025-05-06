const axios = require('axios');

axios.put('https://jsonplaceholder.typicode.com/todos/200', {
  useId: 1,
  title:"comprar pão de Queijo",
  completed: true
})
.then(response => {
  console.log('ToDo atualizado: ', response.data);
}) .catch(error => {
  console.log('Ocorreu um erro: ', error )
});
