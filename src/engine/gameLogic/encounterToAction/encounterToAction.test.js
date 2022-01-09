"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var encounterToAction_1 = __importDefault(require("./encounterToAction"));
it('Wumpus found in the same room with a hero', function () {
    expect((0, encounterToAction_1.default)("Wumpus")).toStrictEqual("Wumpus wakes up and catches you!");
});
it('Nobody found in the same room with a hero', function () {
    expect((0, encounterToAction_1.default)("Nobody")).toStrictEqual("Nothing happens");
});
//# sourceMappingURL=encounterToAction.test.js.map