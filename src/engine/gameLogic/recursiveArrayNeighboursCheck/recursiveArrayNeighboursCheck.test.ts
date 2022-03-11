import recursiveArrayNeighboursCheck from './recursiveArrayNeighboursCheck'

const arr = [0,1,4,2,3,5]
  
const checkFunction = (a: number, b: number): boolean => a > b

const result = [false, false, true, false, false]
  

it("Recursive array neighbours check", () => {
    expect(recursiveArrayNeighboursCheck(checkFunction)([])(arr)).toStrictEqual(result)
})

const arrayOfNextRooms = [
    [5, 3, 9],
    [19, 9, 14],
    [1, 10, 6],
    [6, 18, 13],
    [19, 17, 1]
]

const checkRoomsConnection = (array1: number[], array2: number[]): boolean => {
    return Boolean(array1.find(value => array2.includes(value)))
}

const roomsConnectionRouteResult = [true, false, true, false]


it("Recursive array neighbours check if next array includes elements from previous array", () => {
    expect(recursiveArrayNeighboursCheck(checkRoomsConnection)([])(arrayOfNextRooms)).toStrictEqual(roomsConnectionRouteResult)
})