// 

// const { mkdir } = require('node:fs/promises');
// const { join } = require('node:path');

// async function makeDirectory() {
//   const projectFolder = join(__dirname, 'test');
//   const dirCreation = await mkdir(projectFolder, { recursive: true });

//   console.log(dirCreation);
//   return dirCreation;
// }

// makeDirectory().catch(console.error);



// rename

// const fs = require('fs');

// rename('arquivo.txt', 'novo-nome.txt', err => {
//   if (err) throw err;
//   console.log('Arquivo excluído!');
// }); 

// // Criar arquivo
// fs.writeFileSync('arquivo.txt', conteudo, err=>{

//   if(err) throw err;

//   console.log('Arquivo Salvo!');

// });