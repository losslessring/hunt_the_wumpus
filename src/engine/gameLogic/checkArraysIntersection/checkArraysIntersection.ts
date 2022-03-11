const checkArraysIntersection= (array1: number[], array2: number[]): boolean => {
    return Boolean(array1.find(value => array2.includes(value)))
}

export default checkArraysIntersection