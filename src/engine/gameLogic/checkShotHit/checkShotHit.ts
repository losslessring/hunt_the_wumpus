const checkShotHit = (targetPosition: number) => (arrowRoute: number[]):Boolean => {
    return arrowRoute.includes(targetPosition)    
}

export default checkShotHit