const data = {
  'routes': [
    {
      'overnightRoute': 0,
      'routeId': '2',
      'routeName_c': '大澳 > 梅窩碼頭',
      'routeName_e': 'Tai O > Mui Wo Ferry Pier',
      'routeName_s': '大澳 > 梅窝码头',
      'routeNo': '1',
      'specialRoute': 0
    },
    {
      'overnightRoute': 0,
      'routeId': '1',
      'routeName_c': '梅窩碼頭 > 大澳',
      'routeName_e': 'Mui Wo Ferry Pier > Tai O',
      'routeName_s': '梅窝码头 > 大澳',
      'routeNo': '1',
      'specialRoute': 0
    },
    {
      'overnightRoute': 0,
      'routeId': '3',
      'routeName_c': '紅磡 (紅鸞道)  > 昂坪',
      'routeName_e': 'Hung Hom (Hung Luen Road)  > Ngong Ping',
      'routeName_s': '红磡 (红鸾道)  > 昂坪',
      'routeNo': '1R',
      'specialRoute': 0
    }
  ]
}

if (require.main === module) {
  // console.log(require)
  // Q3 1. The route name in Traditional Chinese of the first bus.
  console.log(data.routes[0].routeName_c)

  // Q3 2. The number of routes shown in the data.
  console.log(`Number of routes: ${data.routes.length}`)
}

module.exports = data