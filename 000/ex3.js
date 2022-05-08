const readlineSync = require("readline-sync")

const answer = Math.floor(Math.random() * 11)

let tries = 3

// console.log(`Answer: ${answer}`)

while(tries > 0) {
    let guess = parseInt(readlineSync.question("Guess: "))

    if (guess === answer) {
        console.log("You won!")
        break
    }

    tries--
    if (guess > answer) {
        console.log("Too big")
    } else {
        console.log("Too small")
    }
}

if (tries <= 0) {
    console.log("You lost!")
}

