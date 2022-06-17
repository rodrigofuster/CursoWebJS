// pesso -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = `Pedro`
console.log(pessoa);

Object.freeze(pessoa) // congela o estado na const 

pessoa.nome ="Maria"
pessoa.endereco = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa.endereco);


const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante) 