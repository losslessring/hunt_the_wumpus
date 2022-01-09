"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapEncountersToActions = function (enemy) { return function (encounterToAction) {
    return enemy.map(function (enemy) { return encounterToAction(enemy); });
}; };
exports.default = mapEncountersToActions;
//# sourceMappingURL=mapEncountersToActions.js.map