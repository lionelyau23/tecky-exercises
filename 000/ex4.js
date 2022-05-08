const readlineSync = require('readline-sync')

const input = readlineSync.question("String: ")

function reverseString(x) {

    let result = ""
    for(let c in x) {
        result += x[x.length - c - 1]
    }
    return result
}

console.log(reverseString(input))