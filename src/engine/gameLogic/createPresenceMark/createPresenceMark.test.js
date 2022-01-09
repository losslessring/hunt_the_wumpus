"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = __importDefault(require("../../data/map/map"));
var createPresenceMark_1 = __importDefault(require("./createPresenceMark"));
var marksTable_1 = __importDefault(require("../../data/marksTable/marksTable"));
it('Create Wumpus presence mark', function () {
    expect((0, createPresenceMark_1.default)([{ position: 0, type: "Wumpus" }])(marksTable_1.default)(map_1.default))
        .toStrictEqual([
        {
            roomNumber: 17,
            mark: "Disgusting smell"
        },
        {
            roomNumber: 12,
            mark: "Disgusting smell"
        },
        {
            roomNumber: 15,
            mark: "Disgusting smell"
        },
        {
            roomNumber: 0,
            mark: "Disgusting smell"
        }
    ]);
});
it('Create pit presence mark', function () {
    expect((0, createPresenceMark_1.default)([{ position: 0, type: "Pit" }])(marksTable_1.default)(map_1.default))
        .toStrictEqual([
        {
            roomNumber: 17,
            mark: "Draft"
        },
        {
            roomNumber: 12,
            mark: "Draft"
        },
        {
            roomNumber: 15,
            mark: "Draft"
        },
        {
            roomNumber: 0,
            mark: "Draft"
        }
    ]);
});
it('Create pit at the same spot presence mark', function () {
    expect((0, createPresenceMark_1.default)([{ position: 0, type: "Pit" }, { position: 0, type: "Pit" }])(marksTable_1.default)(map_1.default))
        .toStrictEqual([
        {
            roomNumber: 17,
            mark: "Draft"
        },
        {
            roomNumber: 12,
            mark: "Draft"
        },
        {
            roomNumber: 15,
            mark: "Draft"
        },
        {
            roomNumber: 0,
            mark: "Draft"
        },
        {
            roomNumber: 17,
            mark: "Draft"
        },
        {
            roomNumber: 12,
            mark: "Draft"
        },
        {
            roomNumber: 15,
            mark: "Draft"
        },
        {
            roomNumber: 0,
            mark: "Draft"
        }
    ]);
});
it('Create pit presence mark', function () {
    expect((0, createPresenceMark_1.default)([{ position: 0, type: "Pit" }, { position: 6, type: "Pit" }])(marksTable_1.default)(map_1.default))
        .toStrictEqual([
        {
            roomNumber: 17,
            mark: "Draft"
        },
        {
            roomNumber: 12,
            mark: "Draft"
        },
        {
            roomNumber: 15,
            mark: "Draft"
        },
        {
            roomNumber: 0,
            mark: "Draft"
        },
        {
            roomNumber: 16,
            mark: "Draft"
        },
        {
            roomNumber: 3,
            mark: "Draft"
        },
        {
            roomNumber: 4,
            mark: "Draft"
        },
        {
            roomNumber: 6,
            mark: "Draft"
        }
    ]);
});
//# sourceMappingURL=createPresenceMark.test.js.map