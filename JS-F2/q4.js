const readLineSync = require('readline-sync')

const size = parseInt(readLineSync.question('Size: '))

for (let i = 1; i <= size; i++) {
  if (i % 3 != 0) {
    console.log(i)
  }
}