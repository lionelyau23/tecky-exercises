const readlineSync = require('readline-sync')

const year = readlineSync.question("Year: ")

function isLeap(year) {
    if (parseInt(year) === NaN) {
        return false;
    }

    if (year % 4 !== 0) {
        return false;
    }

    if (year % 100 !== 0) {
        return true;
    }

    if (year % 400 === 0) {
        return true;
    } 

    return false;
}

console.log(isLeap(year))

