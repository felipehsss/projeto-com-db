const os = require('os');

console.log(`Plataforma: ${os.platform()}`); //Ex: Plataforma:win32

console.log(`Arquitetura: ${os.arch()}`); //Ex: Arquitura: x64

console.log(`Informações da CPU:`, os.cpus()); 

console.log(`Diretório do usuário:`, os.homedir()); 

console.log(`Sistema Operacional:`, os.type());

console.log(`Versão do sistema:`, os.version());

console.log(`Interface de Rede:`, os.networkInterfaces());
