import findRoomsNextToEnemy from './findRoomsNextToEnemy'
import map  from '../../data/map/map'

it('Find rooms next to enemy', () => {
    expect(
        findRoomsNextToEnemy(0)(map))
        .toStrictEqual([ 17, 12, 15 ])       
})

it('Find rooms next to enemy', () => {
    expect(
        findRoomsNextToEnemy(4)(map))
        .toStrictEqual([ 6, 18, 13 ])       
})