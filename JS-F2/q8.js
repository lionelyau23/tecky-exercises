const input = process.argv[2]
const replace = process.argv[3]
const result = input.replaceAll(replace, '')

console.log(`Result: ${result}`)