import encounterToAction  from '../encounterToAction/encounterToAction'
import mapEncountersToActions from './mapEncountersToActions'


it('Wumpus found in the same room with a hero', () => {
    expect(mapEncountersToActions(["Wumpus"])(encounterToAction)).toStrictEqual(["Wumpus wakes up and catches you!"])
})

it('Empty array', () => {
    expect(mapEncountersToActions([])(encounterToAction)).toStrictEqual([])
})

it('Wumpus found in the same room with a hero', () => {
    expect(mapEncountersToActions(["Nobody"])(encounterToAction)).toStrictEqual(["Nothing happens"])
})