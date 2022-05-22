const readlineSync = require('readline-sync')

const weight = parseInt(readlineSync.question('Weight (kg): '))
const height = parseFloat(readlineSync.question('Height (m): '))
const BMI = (weight / (height ** 2)).toFixed(0)

let result = ''
if (BMI < 18.5) {
  result = 'Underweight'
} else if (BMI < 25.0) {
  result = 'Normal'
} else if (BMI < 30.0) {
  result = 'Overweight'
} else {
  result = 'Obese'
}

console.log()
console.log(`BMI: ${BMI}`)
console.log(`Result: ${result}`)