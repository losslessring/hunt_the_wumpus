import React, { useState, useEffect } from "react"
import Room from '../Room/Room'

import map from '../../engine/data/map/map'
import marksTable from '../../engine/data/marksTable/marksTable'

import checkRoomForEncounters from '../../engine/gameLogic/checkRoomForEncounters/checkRoomForEncounters'
import generateRandomInRange from '../../engine/utils/generateRandomInRange/generateRandomInRange'
import createPresenceMark from '../../engine/gameLogic/createPresenceMark/createPresenceMark'
import getPresenceMark from '../../engine/gameLogic/getPresenseMark/getPresenceMark'

const passagesStyle = {
                        display: 'flex',
                        height: '600'

}


const Engine: React.FC = () => {
    
    const [heroPosition, setHeroPosition] = useState(() => 0)
    const [wumpusPosition, setWumpusPosition] = useState(() => ({position: generateRandomInRange(0)(19), type: "Wumpus"}))
    const [wumpusSmellInRooms, setWumpusSmellInRooms] = useState(() => createPresenceMark(wumpusPosition)(marksTable)(map))
    // const [presence, setPresence] = useState(() => )
    
    return (
            <>
                <div style={passagesStyle}>
                {map[heroPosition].map(room => <Room goToRoom={setHeroPosition} number={room}/>)}
                </div>
                <div>You are at room {heroPosition}</div> 
                <div>You see: {checkRoomForEncounters([wumpusPosition])(heroPosition)}</div>
                <div>You sense: {getPresenceMark(heroPosition)(wumpusSmellInRooms)}</div>
                <div>There are passages to rooms {map[heroPosition].map(room => `${room} `)}</div>
            </>
    )
}
export default Engine