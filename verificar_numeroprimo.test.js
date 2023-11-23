const verificarPrimo = require('./EXENumeroprimo'); 

test('Verificar se 17 é um número primo', () => {
  expect(verificarPrimo(17)).toBe(true);
});

test('Verificar se 8 não é um número primo', () => {
  expect(verificarPrimo(8)).toBe(false);
});

function verificarPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = verificarPrimo;