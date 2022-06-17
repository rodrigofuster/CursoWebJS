// coleção dinâmica de pares chave/valor

const produto = new Object();
produto.nome = "cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 220;

console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89.0,
  proprietario: {
    nome: "Pedro",
    idade: 25,
    endereco: {
      logradouro: "7 de Setembro",
      numero: 730,
      cidade: "Igrejinha",
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
  calcularSeguro: function () {
    //...
  },
};

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Dom Pedro I";
console.log(carro);

// deletar itens 
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro 
console.log(carro)