import chalk from "chalk";
import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/todos/999')
.then(response => {
    console.log(chalk.white.bgBlack("Dados recebidos com Sucesso!!!"));
})
.catch(error => {
  console.log(chalk.red('Ocorreu um Erro: '));
  console.log(error.message);
})

