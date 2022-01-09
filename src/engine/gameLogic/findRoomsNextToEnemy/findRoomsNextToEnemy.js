"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findRoomsNextToEnemy = function (enemyPosition) { return function (map) {
    return map.filter(function (element, index) { return enemyPosition === index; }).flat();
}; };
exports.default = findRoomsNextToEnemy;
//# sourceMappingURL=findRoomsNextToEnemy.js.map