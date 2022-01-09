import React, { useState, useEffect } from "react"
import Room from '../Room/Room'
import ShotRange from '../Shot/ShotRange/ShotRange'

import map from '../../engine/data/map/map'
import marksTable from '../../engine/data/marksTable/marksTable'

import checkRoomForEncounters from '../../engine/gameLogic/checkRoomForEncounters/checkRoomForEncounters'
import generateRandomInRange from '../../engine/utils/generateRandomInRange/generateRandomInRange'
import createPresenceMark from '../../engine/gameLogic/createPresenceMark/createPresenceMark'
import getPresenceMark from '../../engine/gameLogic/getPresenseMark/getPresenceMark'
import encounterToAction from '../../engine/gameLogic/encounterToAction/encounterToAction'
import mapEncountersToActions from '../../engine/gameLogic/mapEncountersToActions/mapEncountersToActions'

const passagesStyle = {
                        display: 'flex',
                        height: '600'

}


const Engine: React.FC = () => {
    
    const [gameOver, setGameOver] = useState(() => false)
    const [heroPosition, setHeroPosition] = useState(() => 0)
    const [wumpusPosition, setWumpusPosition] = useState(() => ({position: generateRandomInRange(0)(19), type: "Wumpus"}))
    const [wumpusSmellInRooms, setWumpusSmellInRooms] = useState(() => createPresenceMark([wumpusPosition])(marksTable)(map))

    const [pitPositions, setPitPosition] = useState(() => ([{position: generateRandomInRange(0)(19), type: "Pit"}, {position: generateRandomInRange(0)(19), type: "Pit"}]))
    const [pitDraftInRooms, setPitDraftInRooms] = useState(() => createPresenceMark(pitPositions)(marksTable)(map))
    
    const [batPositions, setBatPositions] = useState(() => ([{position: generateRandomInRange(0)(19), type: "Bat"}, {position: generateRandomInRange(0)(19), type: "Bat"}]))
    const [batNoiseInRooms, setBatNoiseInRooms] = useState(() => createPresenceMark(batPositions)(marksTable)(map))

    const [shot, setShot] = useState(() => false)

    const [shotRoute, setShotRoute] = useState<(number | undefined)[]>(() => [])
    
    
    const changeShotRange = (event: React.ChangeEvent<HTMLInputElement>) => 
        Number(event.target.value) < shotRoute.length ? 
            setShotRoute(shotRoute.slice(0, Number(event.target.value))) :
            setShotRoute(prevState => [...prevState, undefined])


    const encounters = checkRoomForEncounters([...pitPositions, ...batPositions, wumpusPosition])(heroPosition)

    const wumpusAction = (gameOver: Boolean) => (setStateCallback: Function) => {
        (!gameOver) && setStateCallback(true)
        return "Wumpus wakes up and catches you!"
    }
    
    const pitAction = (gameOver: Boolean) => (setStateCallback: Function) => {
        (!gameOver) && setStateCallback(true)
        return "You fall into the pit!"
    }

    const batAction = (setStateCallback: Function) => {
        // setTimeout(() => setStateCallback(generateRandomInRange(0)(19)), 5000)
        setStateCallback(generateRandomInRange(0)(19))
        return "Bat carry you over!"
    }

    const encounterToAction = (enemy: string) => {
        return (enemy === "Bat") ? batAction(setHeroPosition) :
               (enemy === "Pit") ? pitAction(gameOver)(setGameOver) :
               (enemy === "Wumpus") ? wumpusAction(gameOver)(setGameOver) : "Nothing happens"
    
    }

    return (
            <>
                <div style={passagesStyle}>
                    {map[heroPosition].map(room => <Room key={room} goToRoom={setHeroPosition} number={room}/>)}
                </div>
                <div>You are at room {heroPosition}</div> 
                <div>You see: {encounters}</div>
                <div>You sense: {getPresenceMark(heroPosition)([batNoiseInRooms, pitDraftInRooms, wumpusSmellInRooms])}</div>
                <div>What happens: {mapEncountersToActions(encounters)(encounterToAction)}</div>
                <div>There are passages to rooms {map[heroPosition].map(room => `${room} `)}</div>
                <div>

                    <button onClick={() => setShot(true)}>Shoot!</button>
                    {shot && <ShotRange shotRoute={shotRoute} setShotRoute={setShotRoute} changeShotRange = {changeShotRange}/>}
                    {/* {shot && <ShotRange />} */}
                </div>
                
                {gameOver && <h2>Game over!</h2>}
            </>
    )
}
export default Engine