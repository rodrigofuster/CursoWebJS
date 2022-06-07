const prod1 = {};
prod1.nome = "Acer One";
prod1.preco = 5.322;
prod1["Desconto:"] = 0.5; // não indicado usar atributos com espaço.

console.log(prod1);

const prod2 = {
  nome: "Camisa Polo",
  preco: 79.5,
};

console.log(prod2);

const prod3 = { nome: "Pedro", idade: "21 anos" };
console.log(prod3);
