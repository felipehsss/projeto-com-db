
try {
  let pessoa = undefined;
  console.log("Nome: ", pessoa.nome)
} catch (error) {
  console.log("Ocorrou um erro: ", error.message);
} finally {
  console.log("Fim do try/catch");
}