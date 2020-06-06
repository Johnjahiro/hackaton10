/* EJERCICIO 1 */

// let name = prompt("Cual es tu nombre:")
// let lastname = prompt("Cual es tu apellido")
// let age = prompt("Cual es tu edad")

// let infoUser = (name,lastname,age) => `Hola mi nombre es ${name} ${lastname} y tengo ${age}`

// alert(infoUser(name,lastname,age))

/* EJERCICIO 4 */

let valor = prompt('Ingrese un valor cualquiera')

function tipoValor(valor) {
    let number = Number(valor)

    if(typeof valor === 'string') {
        console.log('El valor ingresado es una cadena')
    }else if(typeof number === 'number') {
        console.log('El valor ingresado es un number')
    }
}
tipoValor(valor)

/* EJERCICIO 2 */

// let pow, num

// let potencia = (num,pow) => Math.pow(num,pow)
// console.log("La potencia es: ", potencia(3,2))

/* EJERCICIO 4 */

// let numbers
// let suma = 0
// function numeros(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         suma += numbers[i]
//     }
//     console.log("La suma de los números es: ", suma)
// }

// numeros(4,2,4,56,5)

/* EJERCICIO 5 */

// let valores

// function calcValor(valores) {
//     for (let i = 0; i < valores.length; i++) {
//       if (typeof valores[i] != "string")
//       console.log(valores[i]);
//     }
// }

// console.log(calcValor(["Jahiro", 2, "Diego", true, false, "Pedro", 345, 33.5, {nombre: "Cesar"}]))

/* EJERCICIO 6 */

// let numeros
// let max, min

// function minMax(numeros) {
//     min = Math.min(...numeros)
//     max = Math.max(...numeros)
//     console.log(`El número minimo es: ${min}`)
//     console.log(`El número maximo es: ${max}`)
// }

// minMax([10,15,100,2,45,5])

/* EJERCICIO 9 */

// let palabra = 'hello'
// let indice =  'l'

// function buscarIndice(palabra, indice) {
//     palabra.indexOf()
// }

/* EJERCICIO 11 */

// let suma = 0

// let getBudgets = [
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 }
// ]

// function sumaBudget(getBudgets) {
//     for (let i = 0; i < getBudgets.length; i++) {
//         suma += getBudgets[i].budget
//     }
//     return `La suma de los budgets es: ${suma}`
// }

// console.log(sumaBudget(getBudgets))

/* EJERCICIO 14 */

// let num
// let sumar = 0
// let operacion

// function suma(...num) {
//     for (let i = 0; i < num.length; i++) {
//         sumar += Math.pow(num[i],2)
//     }
//     console.log(`La suma de los números al cuadrado es: ${sumar}`)
// }

// suma(1,2,3)

/* EJERCICIO 15 */

// let numbers = [2,3,1,0]
// let newNumbers = []
// let cantNumbers = numbers.length
// let result = 0

// function multiplicar(numbers,cantNumbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         result = numbers[i]*cantNumbers
//         newNumbers.push(result)
//     }
//     console.log(newNumbers)
// }

// multiplicar(numbers,cantNumbers)

/* EJERCICIO 16 */

// let number
// let printNumbers = 0
// let createArray = []

// function getCadena(number) {
//     for (let i = 0; i <= number; i++) {
//         printNumbers = i
//         createArray.push(printNumbers)
//     }
//     console.log(createArray.reverse())
// }

// getCadena(5)

/* EJERCICIO 17 */

// let numeros
// let max, min, diferencia

// function minMax(numeros) {
//     min = Math.min(...numeros)
//     max = Math.max(...numeros)
//     console.log(`El número maximo es: ${max}`)
//     console.log(`El número minimo es: ${min}`)
//     diferencia = max-min
//     console.log(`La diferencia entre los valores es es: ${diferencia}`)
// }

// minMax([10, 4, 1, 4, -10, -50, 32, 21])

/* EJERCICIO 18 */

// let filtrar
// let lista
// let newLista = []

// function filtrarLista(...lista) {
//     for (let i = 0; i < lista.length; i++) {
//         if(typeof lista[i] != 'String') {
//             newLista.push(lista[i])
//         }
//     }
//     console.log(newLista)
// }

// filtrarLista([1, 2, 3, 'x', 'y', 10])

/* EJERCICIO 19 */

// let toRepeat, times
// let newArray = []

// function repetir(toRepeat, times) {
//     for (let i = 0; i < times; i++) {
//         newArray.push(toRepeat)
//     }
//     console.log(newArray)
// }

// repetir(13,5)

