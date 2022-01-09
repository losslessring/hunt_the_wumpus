

const checkArrowRoute = (currentRoom: number) => (availablePassages: number[]) => {
    console.log(currentRoom)
    console.log(availablePassages)
    console.log(' ')
    return availablePassages.includes(currentRoom)
    
  }
  
  const shotAction = (heroPosition: number) => (wumpusPosition: number) => (shotRoute: number[]) => (map: number[][]) => {
      
      const shotInitialLocation = [{
        arrowPosition: heroPosition,
        availablePassages: map[heroPosition]
      }]
      
      const arrowFlightLocation = shotRoute.map((arrowPosition, index) => {
  
          
          return {
                  arrowPosition: arrowPosition,
                  availablePassages: map[arrowPosition]
                 }
      })
      const arrowTotalFlightLocation =  [...shotInitialLocation, ...arrowFlightLocation]
      console.log(arrowTotalFlightLocation)
  
      const allAvailablePassages = arrowTotalFlightLocation.map(arrowLocation => arrowLocation.availablePassages)
  
      return shotRoute.map((arrowPosition, index) => checkArrowRoute(arrowPosition)(allAvailablePassages[index]))
      // return arrowFlight
  }

export default shotAction