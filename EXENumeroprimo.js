var numero = parseInt(prompt("Digite um numero inteiro positivo:"));
console.log("Número digitado:", numero);

var primo = true;

if (numero <= 1) {
  primo = false;
} else {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}