"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRoomForEncounters = function (enemies) { return function (heroPosition) {
    return enemies.filter(function (enemy) { return enemy.position === heroPosition; }).map(function (enemy) { return enemy.type; });
}; };
exports.default = checkRoomForEncounters;
//# sourceMappingURL=checkRoomForEncounters.js.map