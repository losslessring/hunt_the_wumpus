const mapEncountersToActions = (enemy: string[]) => (encounterToAction: Function ) => {
    return enemy.map(enemy => encounterToAction(enemy))

}

export default mapEncountersToActions