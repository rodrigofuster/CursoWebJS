let valor;
console.log(valor);

valor = null; // ausência de valor
console.log(valor); // null é recomendado para zerar o valor

const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.25;
console.log(produto);

produto.preco = undefined; // evitar usar o undefined
console.log(produto.preco);
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
