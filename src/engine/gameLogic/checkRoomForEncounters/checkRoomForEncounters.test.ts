import checkRoomForEncounters from './checkRoomForEncounters'

it('Enemy found in the same room with a hero and return its type', () => {
    expect(checkRoomForEncounters([{position: 0, type: "Wampus"}])(0)).toStrictEqual(["Wampus"])
})