"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var findRoomsNextToEnemy_1 = __importDefault(require("./findRoomsNextToEnemy"));
var map_1 = __importDefault(require("../../data/map/map"));
it('Find rooms next to enemy', function () {
    expect((0, findRoomsNextToEnemy_1.default)(0)(map_1.default))
        .toStrictEqual([17, 12, 15]);
});
it('Find rooms next to enemy', function () {
    expect((0, findRoomsNextToEnemy_1.default)(4)(map_1.default))
        .toStrictEqual([6, 18, 13]);
});
//# sourceMappingURL=findRoomsNextToEnemy.test.js.map