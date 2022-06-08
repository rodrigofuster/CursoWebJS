// par nome/valor
const saudacao = "Olá"; // contexto léxico 1

function exec() {
  const saudacao = "falaaa"; // contexo léxico 2
  return saudacao;
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereço: {
    logradouro: "7 de julho",
    numero: 123,
  },
};
console.log(saudacao);
console.log(exec());
console.log(cliente);
