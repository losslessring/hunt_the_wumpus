"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var encounterToAction_1 = __importDefault(require("../encounterToAction/encounterToAction"));
var mapEncountersToActions_1 = __importDefault(require("./mapEncountersToActions"));
it('Wumpus found in the same room with a hero', function () {
    expect((0, mapEncountersToActions_1.default)(["Wumpus"])(encounterToAction_1.default)).toStrictEqual(["Wumpus wakes up and catches you!"]);
});
it('Empty array', function () {
    expect((0, mapEncountersToActions_1.default)([])(encounterToAction_1.default)).toStrictEqual([]);
});
it('Wumpus found in the same room with a hero', function () {
    expect((0, mapEncountersToActions_1.default)(["Nobody"])(encounterToAction_1.default)).toStrictEqual(["Nothing happens"]);
});
//# sourceMappingURL=mapEncountersToActions.test.js.map