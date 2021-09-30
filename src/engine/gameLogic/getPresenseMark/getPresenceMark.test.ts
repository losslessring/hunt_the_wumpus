import getPresenceMark from "./getPresenceMark"

it("Get presence mark", () => {
        expect(getPresenceMark(0)([{roomNumber: 0, mark: "Disgusting smell"}]))
        .toStrictEqual("Disgusting smell")
})
