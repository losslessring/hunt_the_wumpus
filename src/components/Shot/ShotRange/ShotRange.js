"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShotRoute_1 = __importDefault(require("./ShotRoute/ShotRoute"));
var ShotRange = function (_a) {
    var shotRoute = _a.shotRoute, setShotRoute = _a.setShotRoute, changeShotRange = _a.changeShotRange;
    var style = {
        height: 30,
        width: 300,
        border: 'solid',
        borderWidth: '2px',
        borderColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
    // const [shotRoute, setShotRoute] = useState<(number | undefined)[]>(() => [])
    // const changeShotRange = (event: React.ChangeEvent<HTMLInputElement>) => 
    //     Number(event.target.value) < shotRoute.length ? 
    //         setShotRoute(shotRoute.slice(0, Number(event.target.value))) :
    //         setShotRoute(prevState => [...prevState, undefined])
    // const changeShotRoute = (event: React.ChangeEvent<HTMLInputElement>) => (index: number) => setShotRoute((prevState: any) => Object.assign([], prevState, {[index]: Number(event.target.value)}))
    // console.log(shotRoute)
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            "Shot range (between 1 and 5):",
            react_1.default.createElement("input", { type: "number", id: "shot_range", name: "shot_range", min: "1", max: "5", onChange: changeShotRange })),
        react_1.default.createElement(ShotRoute_1.default, { shotRoute: shotRoute, setShotRoute: setShotRoute })));
};
exports.default = ShotRange;
//# sourceMappingURL=ShotRange.js.map