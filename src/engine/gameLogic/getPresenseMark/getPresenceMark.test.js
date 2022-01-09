"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getPresenceMark_1 = __importDefault(require("./getPresenceMark"));
it("Get presence mark", function () {
    expect((0, getPresenceMark_1.default)(0)([[{ roomNumber: 0, mark: "Disgusting smell" }]]))
        .toStrictEqual("Disgusting smell");
});
//# sourceMappingURL=getPresenceMark.test.js.map