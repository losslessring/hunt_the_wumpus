import findRoomsNextToEnemy from './findRoomsNextToEnemy'
import map  from '../../data/map/map'

it('Find rooms next to enemy', () => {
    expect(
        findRoomsNextToEnemy({position: 0, type: "Wumpus"})(map))
        .toStrictEqual([ 17, 12, 15 ])       
})

it('Find rooms next to enemy', () => {
    expect(
        findRoomsNextToEnemy({position: 4, type: "Wumpus"})(map))
        .toStrictEqual([ 6, 18, 13 ])       
})