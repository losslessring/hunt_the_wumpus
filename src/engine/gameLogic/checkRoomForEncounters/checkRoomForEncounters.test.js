"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkRoomForEncounters_1 = __importDefault(require("./checkRoomForEncounters"));
it('Enemy found in the same room with a hero and return its type', function () {
    expect((0, checkRoomForEncounters_1.default)([{ position: 0, type: "Wumpus" }])(0)).toStrictEqual(["Wumpus"]);
});
//# sourceMappingURL=checkRoomForEncounters.test.js.map