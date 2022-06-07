// Armazenando uma função em uma variável 
const imprimaSoma = function (a, b) {
    console.log( a + b)
}
imprimaSoma(2, 3)

// Armazenando uma função arrow em uma variável 
const soma = (a, b) => {
   return a + b 
}

console.log(soma(2 , 4))

// retorno implícito 
const subtracao = (a, b) => a - b 
console.log(subtracao(4, 2))

const imprimir = a => a 
console.log(imprimir('legal'))