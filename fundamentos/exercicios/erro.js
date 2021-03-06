function tratarErroELancar(erro) {
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log.apply("final");
  }
}

const obj = { nome: "Roberto" }; // pode ser corrigido usando name
imprimirNome(obj);
