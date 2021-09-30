import { Encounter, Map, PresenceMark } from '../../types/types'
import marksTable from '../../data/marksTable/marksTable'
import findRoomsNextToEnemy  from '../findRoomsNextToEnemy/findRoomsNextToEnemy'


const createPresenceMark = (enemy: Encounter)  => (marksTable: object) => (map: Map): PresenceMark[] => {

    const presenceMark = (marksTable as any)[enemy.type]
    const roomsToMark = findRoomsNextToEnemy(enemy.position)(map)
    return roomsToMark.map((room: number) => ({ roomNumber: room, mark: presenceMark})).concat({ roomNumber: enemy.position, mark: presenceMark})
}

export default createPresenceMark