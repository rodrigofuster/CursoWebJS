// função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 4);

imprimirSoma(2);
imprimirSoma(2, 6, 6, 4, 12);

// Função com retorno

function soma(a, b = 1) {
  return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));
