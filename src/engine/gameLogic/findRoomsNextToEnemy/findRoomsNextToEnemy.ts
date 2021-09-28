import { Encounter, Map } from '../../types/types'
// import map  from '../../data/map/map'

const findRoomsNextToEnemy = (enemy: Encounter) => (map: Map) => {
    return map.find((element, index) => enemy.position === index)

}

export default findRoomsNextToEnemy