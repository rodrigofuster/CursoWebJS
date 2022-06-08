console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Bola";

console.log(obj1.nome);

function kto(valor) {
  this.valor = valor;
}

const kto1 = new kto(1.99);
const kto2 = new kto(2.64);

console.log(kto1.valor);
console.log(kto2.valor);
