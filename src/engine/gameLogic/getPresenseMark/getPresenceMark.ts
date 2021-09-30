import { Encounter, Map, PresenceMark } from '../../types/types'

const getPresenceMark = (room: number) => (presenceMarks: PresenceMark[]): string | undefined => {
    return presenceMarks.find((markedRoom, index) =>  markedRoom.roomNumber === room)?.mark
}

export default getPresenceMark