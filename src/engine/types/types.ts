
export type Map = {
    rooms: number[][]
}

export type Room = {
    neighbourRooms: number[],
    visitors: any,
    effect: any
}

export interface Encounter {
    position: number,
    type: string
}

export type Wampus = {
    position: number,
    sleep: boolean,
    sleepProbalility: number
}

