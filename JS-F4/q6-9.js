const readLineSync = require('readline-sync')
const fs = require('fs')

function initializePlayers(players) {
  let input = ''

  do {
    input = readLineSync.question(`Enter player ${players.length + 1} name (enter nothing to stop): `)
    if (input !== '') {
      const newPlayer = {
        name: input,
        score: 0
      }
      players = players.concat(newPlayer)
    }
  }
  while (input !== '')  
  
  console.log(`Here are the player names and their scores: ${getResult(players)}`)
  return players
}

function getResult(players) {
  let result = ''

  for (const player of players) {
    result = result.concat(`${player.name} (${player.score}), `)
  }

  return result
}

function playOneRound(players) {
  const num = Math.ceil(Math.random() * 6)

  for (const player of players) {
    // console.log(player)
    const guess = readLineSync.question(`${player.name}'s guess on the number (Big, Small): `, {limit: ['Big', 'Small']}).toLocaleLowerCase()

    if (guess === 'big' && num > 3) {
      player.score += 1
    } else if (guess === 'small' && num <= 3) {
      player.score += 1
    }
  }
  
  console.log(`The result is: ${num}`)
}

function play(players, rounds) {
  for (let i = 0; i < rounds; i++) {
    console.log('')
    console.log(`== Round ${i + 1} ==`)
    playOneRound(players)
    console.log(`The scores are: ${getResult(players)}`)
  }
}

function saveToFile(players) {
  try {
    fs.writeFileSync('result.json', JSON.stringify(players))
  } catch (error) {
    console.log(error)
  }
}

let players = []
players = initializePlayers(players)
play(players, 3)
saveToFile(players)