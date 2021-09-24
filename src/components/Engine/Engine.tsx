import React, { useState, useEffect } from "react"
import Room from '../Room/Room'
import map from '../../engine/data/map/map'
import checkRoom from '../../engine/gameLogic/checkRoom/checkRoom'

const passagesStyle = {
                        display: 'flex',
                        height: '600'

}


const Engine: React.FC = () => {
    
    const [heroPosition, setHeroPosition] = useState(() => 0)
    const [wumpusPosition, setWumpusPosition] = useState(() => 0)
    
    return (
            <>
                <div style={passagesStyle}>
                {map[heroPosition].map((room, neighbourIndex)=> <Room goToRoom={setHeroPosition} number={room}/>)}
                </div>
                <div>You are at room {heroPosition}, you see {checkRoom([wumpusPosition])(heroPosition)} there are passages to rooms {map[heroPosition].map(room => `${room} `)}</div>
            </>
    )
}
export default Engine