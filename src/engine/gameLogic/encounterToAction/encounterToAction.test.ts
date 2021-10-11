import encounterToAction from './encounterToAction'

it('Wumpus found in the same room with a hero', () => {
    expect(encounterToAction("Wumpus")).toStrictEqual("Wumpus wakes up and catches you!")
})

it('Nobody found in the same room with a hero', () => {
    expect(encounterToAction("Nobody")).toStrictEqual("Nothing happens")
})