const sum = process.argv[2].split(',').reduce((acc, cur) => acc + parseInt(cur), 0)
console.log(`The sum of the numbers is: ${sum}`)