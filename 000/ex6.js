const checkMarkSix = (result, bid) => {
    for (let b of bid) {
        if (!result.includes(b)) {
            return false
        }
    }

    return true
}

const quickPicks = (results, numBids) => {
    console.log(`The mark six results are ${results}`)

    const bids = []
    let n = numBids

    while (n > 0) {const bid = []

        for (let i = 0; i < 2; i++) {
            let num = Math.ceil(Math.random() * 11)
            while(bid.includes(num)) {
                num = Math.ceil(Math.random() * 11)
            }
            bid.push(num)
        }

        bid.sort((a,b) => a-b)

        bids.push({
            "bid": bid,
            "win": checkMarkSix(results, bid)
        })

        setTimeout(() => {
            console.log(`Your quick pick: ${bid}`)
            console.log(`${checkMarkSix(results, bid) ? "WIN" : "LOSE" }`)
        }, 1000 * (numBids - n + 1))

        n --
    }
    return bids
}

console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])) // returns: true
console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])) // returns: false
console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])) // returns: true

console.log(quickPicks([1, 3, 5, 7, 9, 11], 3))
// quickPicks([1, 3, 5, 7, 9, 11], 3)