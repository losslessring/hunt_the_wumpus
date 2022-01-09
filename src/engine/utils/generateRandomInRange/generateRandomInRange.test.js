"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateRandomInRange_1 = __importDefault(require("./generateRandomInRange"));
it('Generate random integer between x and y (inclusive x, y).Initial test', function () {
    expect((0, generateRandomInRange_1.default)(0)(0)).toStrictEqual(0);
});
it('Generate random integer between x and y (inclusive x, y).Range test', function () {
    expect((0, generateRandomInRange_1.default)(0)(3)).toBeGreaterThanOrEqual(0);
    expect((0, generateRandomInRange_1.default)(0)(3)).toBeLessThanOrEqual(3);
});
var cases = [[0, 1], [2, 5], [-4, -2], [0, 19]];
describe("Range test", function () {
    test.each(cases)("given %p and %p as arguments", function (firstArg, secondArg) {
        var result = (0, generateRandomInRange_1.default)(firstArg)(secondArg);
        expect(result).toBeGreaterThanOrEqual(firstArg);
        expect(result).toBeLessThanOrEqual(secondArg);
    });
});
//# sourceMappingURL=generateRandomInRange.test.js.map