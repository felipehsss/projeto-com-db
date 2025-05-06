async function buscarDados() {
    const response = await fetch('https://jsplaceholder.typicode.com/todos/1')
    const data = await response.json();
    return data;
  }

  module.exports = buscarDados;
