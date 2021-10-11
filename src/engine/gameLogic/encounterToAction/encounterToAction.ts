const encounterToAction = (enemy: string) => {
    return (enemy === "Wumpus") ? "Wumpus wakes up and catches you!" : "Nothing happens"

}

export default encounterToAction