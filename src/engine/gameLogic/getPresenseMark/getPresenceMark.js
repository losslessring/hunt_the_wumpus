"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const getPresenceMark = (room: number) => (presenceMarks: PresenceMark[]): string | undefined => {
//     return presenceMarks.find((markedRoom, index) =>  markedRoom.roomNumber === room)?.mark
// }
var getPresenceMark = function (room) { return function (allEnemiesPresenceMarks) {
    return allEnemiesPresenceMarks
        .map(function (presenceMarks) {
        var _a;
        return (_a = presenceMarks
            .find(function (markedRoom, index) { return markedRoom.roomNumber === room; })) === null || _a === void 0 ? void 0 : _a.mark;
    })
        .join(" ");
}; };
exports.default = getPresenceMark;
//# sourceMappingURL=getPresenceMark.js.map