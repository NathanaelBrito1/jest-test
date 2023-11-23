const calcularMDC = require('./EXEdivisorcomum'); 

test('Calcular o MDC de 24 e 18', () => {
  expect(calcularMDC(24, 18)).toBe(6);
});

test('Calcular o MDC de 7 e 5', () => {
  expect(calcularMDC(7, 5)).toBe(1);
});

// calcular_mdc.js

function calcularMDC(a, b) {
    while (b !== 0) {
      let resto = b;
      b = a % b;
      a = resto;
    }
  
    return a;
  }
  
  module.exports = calcularMDC;
  