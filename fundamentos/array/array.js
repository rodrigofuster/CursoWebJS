console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos' , 'Ana']
console.log(aprovados[0]);
console.log(aprovados[01]);
console.log(aprovados[02]);
console.log(aprovados[03]);

aprovados[03] = "Paulo"
aprovados.push('Abia')
console.log(aprovados.length);
aprovados[9] = 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null)