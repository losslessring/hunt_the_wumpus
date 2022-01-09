"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShotRoute = function (_a) {
    var shotRoute = _a.shotRoute, setShotRoute = _a.setShotRoute;
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
    var changeShotRoute = function (event) { return function (index) { return setShotRoute(function (prevState) {
        var _a;
        return Object.assign([], prevState, (_a = {}, _a[index] = Number(event.target.value), _a));
    }); }; };
    console.log(shotRoute);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            shotRoute.map(function (roomNumber, index) {
                return react_1.default.createElement("div", { style: style },
                    react_1.default.createElement("div", null,
                        "Arrow route",
                        react_1.default.createElement("input", { type: "number", id: "shot_range", name: "shot_range", min: "0", max: "19", 
                            // value={shotRoute[index]}
                            onChange: function (event) { return changeShotRoute(event)(index); } })));
            }),
            react_1.default.createElement("button", { onClick: function () { return true; } }, "Ok"))));
};
exports.default = ShotRoute;
//# sourceMappingURL=ShotRoute.js.map