
import React, { useState, useEffect } from "react"

import ShotRoute from './ShotRoute/ShotRoute'

const ShotRange = ({shotRoute, setShotRoute, changeShotRange}: any) => {

    const style = {
        height: 30,
        width: 300,
        border: 'solid',
        borderWidth: '2px',
        borderColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    } as React.CSSProperties
    
    // const [shotRoute, setShotRoute] = useState<(number | undefined)[]>(() => [])
    
    
    // const changeShotRange = (event: React.ChangeEvent<HTMLInputElement>) => 
    //     Number(event.target.value) < shotRoute.length ? 
    //         setShotRoute(shotRoute.slice(0, Number(event.target.value))) :
    //         setShotRoute(prevState => [...prevState, undefined])

    
    // const changeShotRoute = (event: React.ChangeEvent<HTMLInputElement>) => (index: number) => setShotRoute((prevState: any) => Object.assign([], prevState, {[index]: Number(event.target.value)}))

    // console.log(shotRoute)

    return (
        <div>
            <div>
                Shot range (between 1 and 5):
                <input 
                    type="number" 
                    id="shot_range" 
                    name="shot_range" 
                    min="1" 
                    max="5"
                    onChange={changeShotRange}
                />
            </div>
            <ShotRoute shotRoute={shotRoute} setShotRoute={setShotRoute}/>
        </div>
    )

}

        

export default ShotRange 