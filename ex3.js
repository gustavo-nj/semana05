const prompt = require('prompt-sync')()
const numeros =[]

for(let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Insira o número ${i + 1} : `))
    numeros.push(numero)
}

console.log ('Números inseridos:')
for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i])
}