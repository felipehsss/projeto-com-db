const readline = require('readline').createInterface({
  input: process.stdin,
  output:process.stdout,
});

readline.question('Qual o seu nome?', nome =>{
 
  console.log(`Olá, ${nome}!`);
  readline.close();
})