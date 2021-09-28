import { Encounter } from '../../types/types'

const checkRoomForEncounters = (enemies: Encounter[]) => (heroPosition: number): string[] => {
    return enemies.filter(enemy => enemy.position === heroPosition).map(enemy => enemy.type)

}

export default checkRoomForEncounters