const cards = [
  ['Spade', 'A'],
  ['Diamond', 'J'],
  ['Club', '3'],
  ['Heart', '6'],
  ['Spade', 'K'],
  ['Club', '2'],
  ['Heart', 'Q'],
  ['Spade', '6'],
  ['Heart', 'J'],
  ['Spade', '10'],
  ['Club', '4'],
  ['Diamond', 'Q'],
  ['Diamond', '3'],
  ['Heart', '4'],
  ['Club', '7']
]

function compareCard(cardA, cardB) {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const suits = ['Diamond', 'Club', 'Heart', 'Spade']
  const [suitA, rankA] = cardA
  const [suitB, rankB] = cardB
  const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB)
  if (ranksDiff !== 0) {
    return ranksDiff
  } else {
    return suits.indexOf(suitA) - suits.indexOf(suitB)
  }
}

// Usage
// compareCard(['Diamond', '3'], ['Spade', '5']); // -2
// compareCard(['Diamond', '3'], ['Spade', '3']); // -3
// compareCard(['Diamond', '3'], ['Spade', '2']); // 1
// compareCard(['Diamond', '3'], ['Diamond', '3']); //0

// Count the number of card which is of suit Spade. (Hints: using reduce)
const ex1 = cards.reduce((prev, curr) => curr[0] === 'Spade' ? prev + 1 : prev, 0)

console.log(`ex1: ${ex1}`)

// Remove all the card that is smaller than ["Club", "3"].
const ex2 = cards.filter(card => compareCard(card, ['Club', '3']) >= 0)

console.log(`ex2: ${ex2}`)

// Count the number of card which is of suit Diamond or Heart and with the rank larger than or equal to J.
const ex3 = cards.reduce((prev, curr) => {
  if (curr[0] === 'Diamond' || curr[0] === 'Heart') {
    if (curr[1] === 'J' || curr[1] === 'Q' || curr[1] === 'K' || curr[1] === 'A') {
      return prev + 1
    } 
  } 
  return prev
}, 0)

console.log(`ex3: ${ex3}`)

// Replace all of the cards with suit Club to suit Diamond, keeping the same rank.
const ex4 = cards.map(card => card[0] === 'Club' ? ['Diamond', card[1]] : card)

console.log(`ex4: ${ex4}`)

// Replace all of the cards with rank A to rank 2. Keeping the same suit.
const ex5 = cards.map(card => card[1] === 'A' ? [card[0], '2'] : card)

console.log(`ex5: ${ex5}`)
