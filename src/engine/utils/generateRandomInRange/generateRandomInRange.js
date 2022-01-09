"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateRandomInRange = function (min) { return function (max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}; };
exports.default = generateRandomInRange;
//# sourceMappingURL=generateRandomInRange.js.map