import checkRoom from './checkRoom'

it('Enemy found in the same room with a hero', () => {
    expect(checkRoom([0])(0)).toStrictEqual([0])
})

it('Enemy not found in the room with a hero', () => {
    expect(checkRoom([0])(1)).toStrictEqual([])
})

it('Many enemies found in the same room with a hero', () => {
    expect(checkRoom([2, 2])(2)).toStrictEqual([2, 2])
})

it('One of many enemies found in the same room with a hero', () => {
    expect(checkRoom([10, 3])(3)).toStrictEqual([3])
})

it('One of many enemies found in the same room with a hero swap', () => {
    expect(checkRoom([4, 5])(4)).toStrictEqual([4])
})