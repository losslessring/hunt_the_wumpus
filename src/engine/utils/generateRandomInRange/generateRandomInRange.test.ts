import generateRandomInRange from './generateRandomInRange'

it('Generate random integer between x and y (inclusive x, y).Initial test', () => {
    expect(generateRandomInRange(0)(0)).toStrictEqual(0)
})

it('Generate random integer between x and y (inclusive x, y).Range test', () => {
    expect(generateRandomInRange(0)(3)).toBeGreaterThanOrEqual(0)
    expect(generateRandomInRange(0)(3)).toBeLessThanOrEqual(3)
})

const cases = [[0, 1], [2, 5], [-4, -2], [0, 19]]

describe("Range test", () => {
  test.each(cases)(
    "given %p and %p as arguments",
    (firstArg, secondArg) => {
      const result = generateRandomInRange(firstArg)(secondArg)
      expect(result).toBeGreaterThanOrEqual(firstArg)
      expect(result).toBeLessThanOrEqual(secondArg)
    }
  );
});
