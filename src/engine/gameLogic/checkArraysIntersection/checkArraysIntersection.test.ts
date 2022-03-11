import checkArraysIntersection from "./checkArraysIntersection"

it("Check arrays intersection", () => {
    expect(checkArraysIntersection([1, 2, 3], [1, 5, 6])).toStrictEqual(true)
})
