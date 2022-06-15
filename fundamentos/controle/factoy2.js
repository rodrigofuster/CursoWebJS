function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 3000.0));
console.log(criarProduto("SmarTv", 4500.0));
console.log(criarProduto("Ps5", 4000.0));
