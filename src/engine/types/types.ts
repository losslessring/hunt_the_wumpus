
export type Map = number[][]

export type Room = {
    neighbourRooms: number[],
    visitors: any,
    effect: any
}

export interface Encounter {
    position: number,
    type: string
}

export type Wumpus = {
    position: number,
    sleep: boolean,
    sleepProbalility: number
}

export type Pit = {
    position: number
}

export type Bat = {
    position: number
}


export type PresenceMark = {
    roomNumber: number,
    mark: string
}