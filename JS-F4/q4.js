const data = require('./q3')

// Q4 1. All the route numbers
console.log(data.routes.map(r => r.routeNo))

// Q4 2. All the terminal names
console.log(data.routes.map(r => r.routeName_c).reduce((acc, curr) => {
  const terminals = curr.split('>').map(s => s.trim())
  // console.log(terminals)
  terminals.forEach(t => {
    if (!acc.includes(t)) {
      acc.push(t)
    }
  })
  return acc
}, []))