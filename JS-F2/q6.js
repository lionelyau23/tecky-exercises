const readLineSync = require('readline-sync')

const size = parseInt(readLineSync.question('Size: '))

let template = ''

if (size % 2 == 0) {
  template = '+'
} else {
  template = '-'
}

for (let i = 0; i < 2 * size - 2; i++) {
  if (template[i] == '+') {
    template = template.concat('-')
  } else {
    template = template.concat('+')
  }
}

for (let i = 0; i < size; i++) {
  const result = template.slice(i,template.length - i)

  console.log(' '.repeat(i).concat(result))
}