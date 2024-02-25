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

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log('A soma de todos os números é: ',soma)

const numerosOrdenados = [numeros.sort((a,b) => a - b)]
console.log(numerosOrdenados)

const pares = numeros.filter(numero => numero % 2 === 0)

console.log('Números pares do array numeros: ', pares)

const quadrados = numeros.map(numero => numero **2)

console.log('Quadrados dos números do array numeros: ', quadrados)