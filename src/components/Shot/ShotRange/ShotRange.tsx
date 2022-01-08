
import React, { useState, useEffect } from "react"



const ShotRange = (props: any) => {

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
    
    const [shotRoute, setShotRoute] = useState<(number | undefined)[]>(() => [])
    
    
    const changeShotRange = (event: React.ChangeEvent<HTMLInputElement>) => 
        Number(event.target.value) < shotRoute.length ? 
            setShotRoute(shotRoute.slice(0, Number(event.target.value))) :
            setShotRoute(prevState => [...prevState, undefined])

    
    const changeShotRoute = (event: React.ChangeEvent<HTMLInputElement>) => (index: number) => setShotRoute(prevState => Object.assign([], prevState, {[index]: Number(event.target.value)}))

    console.log(shotRoute)

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
                    onChange={changeShotRange}/>
                
                
                        
            </div>
            <div>
                {shotRoute.map((roomNumber, index) => <div style={style}>
                    <div>
                        Arrow route
                        <input 
                        type="number" 
                        id="shot_range" 
                        name="shot_range" 
                        min="0" 
                        max="19"
                        value={shotRoute[index]}
                        onChange={(event) => changeShotRoute(event)(index)}/>
                    </div>
                </div>)}
            </div>
        </div>
    )

}

        

export default ShotRange 