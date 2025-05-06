const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const dados = {
    nome: 'Felipe',
    idade: 17,
    cidade: 'São Caetano do Sul'
};

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err);
        return;
    }

    const dados = JSON.parse(data);
    console.log('Dados lidos:');
    console.log(dados);

    readline.question('Qual é o seu nome? ', nome => {
        dados.nome = nome;
        console.log('Dados atualizados:');
        console.log(dados);

        fs.writeFile('dados.json', JSON.stringify(dados, null, 2), 'utf8', err => {
            if (err) {
                console.log('Erro ao gravar o arquivo:', err);
                return;
            }
            console.log('Dados gravados com sucesso!');
        });
        readline.close();
    });
});