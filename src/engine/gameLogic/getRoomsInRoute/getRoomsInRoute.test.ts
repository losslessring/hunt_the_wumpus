import getRoomsInRoute from "./getRoomsInRoute"

const shotRoute = [0, 1, 2, 3, 4]

const map = [
    [17, 12, 15],
    [5, 3, 9],
    [19, 9, 14],
    [1, 10, 6],
    [6, 18, 13],
]

const result = [
    [17, 12, 15],
    [5, 3, 9],
    [19, 9, 14],
    [1, 10, 6],
    [6, 18, 13],
]

it("Get rooms along route", () => {
    expect(getRoomsInRoute(shotRoute)(map)).toStrictEqual(result)
})
