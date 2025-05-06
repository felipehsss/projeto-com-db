const buscarDados = require('./funcaoAssincrona');

describe('Função Buscar Dados', () => {

  it('deve retornar os dados corretamente', () => {
    return buscarDados()
      .then(data => {
        expect(data).toBeDefined();
        expect(data.userId.toBe(1))
      })

  })

})

