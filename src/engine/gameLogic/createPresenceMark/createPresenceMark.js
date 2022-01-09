"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var findRoomsNextToEnemy_1 = __importDefault(require("../findRoomsNextToEnemy/findRoomsNextToEnemy"));
var createPresenceMark = function (enemies) { return function (marksTable) { return function (map) {
    // const presenceMark = (marksTable as any)[enemy.type]
    // const roomsToMark = findRoomsNextToEnemy(enemy.position)(map)
    // return roomsToMark.map((room: number) => ({ roomNumber: room, mark: presenceMark})).concat({ roomNumber: enemy.position, mark: presenceMark})
    return enemies.flatMap(function (enemy) {
        var presenceMark = marksTable[enemy.type];
        var roomsToMark = (0, findRoomsNextToEnemy_1.default)(enemy.position)(map);
        return roomsToMark.map(function (room) { return ({ roomNumber: room, mark: presenceMark }); }).concat({ roomNumber: enemy.position, mark: presenceMark });
    });
}; }; };
exports.default = createPresenceMark;
//# sourceMappingURL=createPresenceMark.js.map