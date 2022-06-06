const escola = "Cod3r é um bom curso";
console.log(escola.charAt(4));
console.log(escola.charCodeAt(3));

console.log(escola.indexOf("é"));
console.log(escola.lastIndexOf("o"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log(escola.replace(3, "e"));

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);

//arrays
console.log("Ana,Maria,Pedro".split(","));
