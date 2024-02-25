const prompt = require('prompt-sync')();

const fruta1 = prompt('Insira a primeira fruta: ');
const fruta2 = prompt('Insira a segunda fruta: ');
const fruta3 = prompt('Insira a terceira fruta: ');


const frutas = [fruta1, fruta2, fruta3];

console.log('A segunda fruta é:', frutas[1]);

frutas.push('Banana');

frutas.shift();

console.log('Array de frutas atualizado:', frutas);