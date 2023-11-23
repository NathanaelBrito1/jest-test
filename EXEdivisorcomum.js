var a = parseInt(prompt("Digite o primeiro numero:"));
var b = parseInt(prompt("Digite o segundo numero:"));
var mdc;

while (b !== 0) {
  var temp = b;
  b = a % b;
  a = temp;
}

mdc = a;

console.log("O MDC de " + a + " e " + b + " = " + mdc);
