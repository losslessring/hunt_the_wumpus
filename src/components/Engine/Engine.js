"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Room_1 = __importDefault(require("../Room/Room"));
var ShotRange_1 = __importDefault(require("../Shot/ShotRange/ShotRange"));
var map_1 = __importDefault(require("../../engine/data/map/map"));
var marksTable_1 = __importDefault(require("../../engine/data/marksTable/marksTable"));
var checkRoomForEncounters_1 = __importDefault(require("../../engine/gameLogic/checkRoomForEncounters/checkRoomForEncounters"));
var generateRandomInRange_1 = __importDefault(require("../../engine/utils/generateRandomInRange/generateRandomInRange"));
var createPresenceMark_1 = __importDefault(require("../../engine/gameLogic/createPresenceMark/createPresenceMark"));
var getPresenceMark_1 = __importDefault(require("../../engine/gameLogic/getPresenseMark/getPresenceMark"));
var mapEncountersToActions_1 = __importDefault(require("../../engine/gameLogic/mapEncountersToActions/mapEncountersToActions"));
var passagesStyle = {
    display: 'flex',
    height: '600'
};
var Engine = function () {
    var _a = (0, react_1.useState)(function () { return false; }), gameOver = _a[0], setGameOver = _a[1];
    var _b = (0, react_1.useState)(function () { return 0; }), heroPosition = _b[0], setHeroPosition = _b[1];
    var _c = (0, react_1.useState)(function () { return ({ position: (0, generateRandomInRange_1.default)(0)(19), type: "Wumpus" }); }), wumpusPosition = _c[0], setWumpusPosition = _c[1];
    var _d = (0, react_1.useState)(function () { return (0, createPresenceMark_1.default)([wumpusPosition])(marksTable_1.default)(map_1.default); }), wumpusSmellInRooms = _d[0], setWumpusSmellInRooms = _d[1];
    var _e = (0, react_1.useState)(function () { return ([{ position: (0, generateRandomInRange_1.default)(0)(19), type: "Pit" }, { position: (0, generateRandomInRange_1.default)(0)(19), type: "Pit" }]); }), pitPositions = _e[0], setPitPosition = _e[1];
    var _f = (0, react_1.useState)(function () { return (0, createPresenceMark_1.default)(pitPositions)(marksTable_1.default)(map_1.default); }), pitDraftInRooms = _f[0], setPitDraftInRooms = _f[1];
    var _g = (0, react_1.useState)(function () { return ([{ position: (0, generateRandomInRange_1.default)(0)(19), type: "Bat" }, { position: (0, generateRandomInRange_1.default)(0)(19), type: "Bat" }]); }), batPositions = _g[0], setBatPositions = _g[1];
    var _h = (0, react_1.useState)(function () { return (0, createPresenceMark_1.default)(batPositions)(marksTable_1.default)(map_1.default); }), batNoiseInRooms = _h[0], setBatNoiseInRooms = _h[1];
    var _j = (0, react_1.useState)(function () { return false; }), shot = _j[0], setShot = _j[1];
    var _k = (0, react_1.useState)(function () { return []; }), shotRoute = _k[0], setShotRoute = _k[1];
    var changeShotRange = function (event) {
        return Number(event.target.value) < shotRoute.length ?
            setShotRoute(shotRoute.slice(0, Number(event.target.value))) :
            setShotRoute(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), [undefined], false); });
    };
    var encounters = (0, checkRoomForEncounters_1.default)(__spreadArray(__spreadArray(__spreadArray([], pitPositions, true), batPositions, true), [wumpusPosition], false))(heroPosition);
    var wumpusAction = function (gameOver) { return function (setStateCallback) {
        (!gameOver) && setStateCallback(true);
        return "Wumpus wakes up and catches you!";
    }; };
    var pitAction = function (gameOver) { return function (setStateCallback) {
        (!gameOver) && setStateCallback(true);
        return "You fall into the pit!";
    }; };
    var batAction = function (setStateCallback) {
        // setTimeout(() => setStateCallback(generateRandomInRange(0)(19)), 5000)
        setStateCallback((0, generateRandomInRange_1.default)(0)(19));
        return "Bat carry you over!";
    };
    var encounterToAction = function (enemy) {
        return (enemy === "Bat") ? batAction(setHeroPosition) :
            (enemy === "Pit") ? pitAction(gameOver)(setGameOver) :
                (enemy === "Wumpus") ? wumpusAction(gameOver)(setGameOver) : "Nothing happens";
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: passagesStyle }, map_1.default[heroPosition].map(function (room) { return react_1.default.createElement(Room_1.default, { goToRoom: setHeroPosition, number: room }); })),
        react_1.default.createElement("div", null,
            "You are at room ",
            heroPosition),
        react_1.default.createElement("div", null,
            "You see: ",
            encounters),
        react_1.default.createElement("div", null,
            "You sense: ",
            (0, getPresenceMark_1.default)(heroPosition)([batNoiseInRooms, pitDraftInRooms, wumpusSmellInRooms])),
        react_1.default.createElement("div", null,
            "What happens: ",
            (0, mapEncountersToActions_1.default)(encounters)(encounterToAction)),
        react_1.default.createElement("div", null,
            "There are passages to rooms ",
            map_1.default[heroPosition].map(function (room) { return room + " "; })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { onClick: function () { return setShot(true); } }, "Shoot!"),
            shot && react_1.default.createElement(ShotRange_1.default, { shotRoute: shotRoute, setShotRoute: setShotRoute, changeShotRange: changeShotRange })),
        gameOver && react_1.default.createElement("h2", null, "Game over!")));
};
exports.default = Engine;
//# sourceMappingURL=Engine.js.map