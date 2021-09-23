
import React from "react"

const style = {
    height: 300,
    width: 300,
    border: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Room = (props: any) => {
    return (
        <div style={style} onClick={() => props.goToRoom(props.number)}>{props.number}</div>
    )

}

        

export default Room 