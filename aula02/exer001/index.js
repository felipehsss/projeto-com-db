const os = require('os');
const fs = require('fs');
const info = 
`

  nomeDoComputador: ${os.hostname()},
  versaoDoSistema: ${os.release()},$
  procesador: ${os.cpus()},
  memoria:${ os.totalmem()},
  diretorio: ${os.homedir()},
  arquitetura: ${os.arch()},
  plataforma: ${os.platform()},
  usuario: ${os.userInfo()},
  release: ${os.release()},
  version: ${os.version()},
  homedir: ${os.homedir()},
  tmpdir: ${ os.tmpdir()},
`



// // Criar arquivo
fs.writeFileSync('info_sistema.txt', info, err=>{

  if(err) throw err;

  console.log('Arquivo Salvo!');

});
