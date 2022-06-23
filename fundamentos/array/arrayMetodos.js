const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilotos);
pilotos.pop(); // remove o ultimo elemento
console.log(pilotos);

pilotos.push("Verstappen"); // adiciona um elemeto no final
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Hamilton"); // adiciona o primeiro elemento
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Botas", "Massa");
console.log(pilotos);

// remover 
pilotos.splice(3,1) 
console.log(pilotos);

// novo array 
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);