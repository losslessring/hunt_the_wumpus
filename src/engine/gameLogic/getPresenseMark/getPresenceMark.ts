import { Encounter, Map, PresenceMark } from '../../types/types'

// const getPresenceMark = (room: number) => (presenceMarks: PresenceMark[]): string | undefined => {
//     return presenceMarks.find((markedRoom, index) =>  markedRoom.roomNumber === room)?.mark
// }

const getPresenceMark = (room: number) => (allEnemiesPresenceMarks: PresenceMark[][]): string | undefined => {
    
    return allEnemiesPresenceMarks
                    .map(presenceMarks => presenceMarks
                        .find((markedRoom, index) =>  markedRoom.roomNumber === room)?.mark)
                        .join(" ")
}

export default getPresenceMark