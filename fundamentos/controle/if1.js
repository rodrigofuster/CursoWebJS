function soBoasNoticias(nota) {
  if (nota >= 7) {
    console.log("aprovado com nota: " + nota);
  }
}

soBoasNoticias(7.6);
soBoasNoticias(6.1);

function seForVerdade(valor) {
  if (valor) {
    console.log("é verdade..." + valor);
  }
}
// valores falsos
seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade("");
seForVerdade(0);

// valores verdadeiros
seForVerdade(-1);
seForVerdade(" ");
seForVerdade("?");
seForVerdade([]);
seForVerdade([1, 2]);
