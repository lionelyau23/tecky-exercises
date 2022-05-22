// const data = require('./q3')
const axios = require('axios')

function getRouteNumbers(routeData) {
  return routeData.routes.length
}

function getTerminalNames(routeData, routeNumber) {
  const targetRoutes = routeData.routes.filter(r => r.routeNo === routeNumber)
  return targetRoutes.map(r => r.routeName_c)
}

async function fetchData() {
  const data = await axios.get('https://rt.data.gov.hk/v1/transport/nlb/route.php?action=list')
  return data.data
}

async function main() {
  const data = await fetchData()
  // console.log(data)
  // Extract the route numbers using the data as a parameter
  console.log(getRouteNumbers(data))

  // Extract the terminal names of both ends (in Traditional Chinese) of a particular route using the data and route number as parameters
  console.log(getTerminalNames(data, '1'))
}

if (require.main === module) {
  main()
}
