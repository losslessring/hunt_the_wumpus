const checkRoom = (enemiesPositions: number[]) => (heroPosition: number) => {
    return enemiesPositions.filter(enemyPosition => enemyPosition === heroPosition)

}

export default checkRoom