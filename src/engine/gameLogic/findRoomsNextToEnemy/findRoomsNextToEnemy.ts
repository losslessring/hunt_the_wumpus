import { Encounter, Map } from '../../types/types'


const findRoomsNextToEnemy = (enemyPosition: number) => (map: Map): number[] | undefined => {
    return map.find((element, index) => enemyPosition === index)

}

export default findRoomsNextToEnemy