import { Encounter } from '../../types/types'

let checkRoomForEncounters: (enemies: Encounter[]) => (heroPosition: number) => string[]

checkRoomForEncounters = (enemies: Encounter[]) => (heroPosition: number): string[] => {
    return enemies.filter(enemy => enemy.position === heroPosition).map(enemy => enemy.type)

}

export default checkRoomForEncounters