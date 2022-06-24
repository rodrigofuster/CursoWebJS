const produtos = [
    {nome: 'Note', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: "Cpode Vidro", preco: 18.99, fragil: true},
    {nome: "Cpode de Plástico", preco: 12.49, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.produtos < 2400
}))

const caro = produto => produto.preco >= 500 
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil));