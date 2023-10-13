const readlineSync = require('readline-sync')

const dna = readlineSync.question('DNA: ')

function rnaTranscription(dna) {
  const table = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  let answer = ''

  for (let c of dna) {
    answer += table[c]
  }

  return answer
}

console.log(`RNA: ${rnaTranscription(dna)}`)