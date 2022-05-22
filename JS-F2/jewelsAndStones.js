var numJewelsInStones = function(jewels, stones) {
  let result = 0

  const jewelObj = {}
  
  for (let j of jewels) {
    jewelObj[j] = 0
  }
  
  for (let s of stones) {
    if (s in jewelObj) {
      result += 1
    }
  }
  return result  
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))