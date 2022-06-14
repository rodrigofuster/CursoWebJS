const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(2, 3)
imprimirResultado(3, 4, soma) 
imprimirResultado(5, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const anos = {
    ano: function() {
        console.log(1989)
    }
}

anos.ano()