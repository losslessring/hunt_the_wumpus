import checkShotHit from './checkShotHit'


it('Check shot hit', () => {
    expect(checkShotHit(5)( [0, 1, 4, 5, 19] )).toStrictEqual(true)})

it('Check shot miss', () => {
    expect(checkShotHit(77)( [0, 1, 4, 5, 19] )).toStrictEqual(false)})