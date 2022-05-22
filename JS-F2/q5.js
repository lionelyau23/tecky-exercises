const readLineSync = require('readline-sync')

const size = parseInt(readLineSync.question('Size: '))

for (let i = 0; i < size ; i++) {
  let result = ' '.repeat(size - 1 - i).concat('*'.repeat(2 * i + 1))
  console.log(result)
}