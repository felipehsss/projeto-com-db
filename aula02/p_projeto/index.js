const fs = require('fs');
const linha ='\nNovalinha';
const conteudo='Este é o conteudo do arquivo.';

// Criar arquivo
fs.writeFileSync('arquivo.txt', conteudo, err=>{

    if(err) throw err;

    console.log('Arquivo Salvo!');

});

// Ler arquivo

fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if(err) throw err;

    console.log(data);

});


// Escrever nova linha
fs.appendFile('arquivo.txt', linha,err =>{
  if(err) throw err;
  console.log('Informação Adicional');
})

