import { Encounter, Map } from '../../types/types'


const findRoomsNextToEnemy = (enemyPosition: number) => (map: Map): number[] => {
    return map.filter((element, index) => enemyPosition === index).flat() 

}

export default findRoomsNextToEnemy