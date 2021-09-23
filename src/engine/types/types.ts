
export type Map = {
    rooms: number[][]
}

export type Room = {
    neighbourRooms: number[],
    visitors: any,
    effect: any
}

export type Wampus = {
    position: number,
    sleep: boolean,
    sleepProbalility: number
}