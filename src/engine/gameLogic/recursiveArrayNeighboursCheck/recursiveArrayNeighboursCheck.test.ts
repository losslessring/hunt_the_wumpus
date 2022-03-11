import recursiveArrayNeighboursCheck from './recursiveArrayNeighboursCheck'

const arr = [0,1,4,2,3,5]
  
const checkFunction = (a: number, b: number): boolean => a > b

const result = [false, false, true, false, false]
  

it("Recursive array neighbours check", () => {
    expect(recursiveArrayNeighboursCheck(checkFunction)([])(arr)).toStrictEqual(result)
})

const array2 = [
    [5, 3, 9],
    [19, 9, 14],
    [1, 10, 6],
    [6, 18, 13],
    [19, 17, 1]
]

const checkArraysIntersection = (array1: number[], array2: number[]): boolean => {
    return Boolean(array1.find(value => array2.includes(value)))
}

const result2 = [true, false, true, false]


it("Recursive array neighbours check if next array includes elements from previous array", () => {
    expect(recursiveArrayNeighboursCheck(checkArraysIntersection)([])(array2)).toStrictEqual(result2)
})