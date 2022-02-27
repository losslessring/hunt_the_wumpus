const checkShotHit = (targetPosition: number) => (arrowRoute: (number | undefined)[]):boolean => {
    return arrowRoute.includes(targetPosition)    
}

export default checkShotHit