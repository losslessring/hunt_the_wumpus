const getNextRoomsInRoute = (shotRoute: (number | undefined)[]) => (map: number[][]) => {
    const nextRoomsInRoute = shotRoute.map(room => room === undefined ? [] : map[room])
    console.log(nextRoomsInRoute)
    return nextRoomsInRoute
    
}

export default getNextRoomsInRoute