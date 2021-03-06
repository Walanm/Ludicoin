'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _LudiEx = require('./build/LudiEx.json');

var _LudiEx2 = _interopRequireDefault(_LudiEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Exporta uma instância JavaScript do smart contract LudiEx para ser utilizada pela aplicação web.
*/

var instancia = new _web2.default.eth.Contract(JSON.parse(_LudiEx2.default.interface), '0xC25Da2558a6752154639E8396987773CA22e671A');

exports.default = instancia;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2x1ZGlleC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiTHVkaUV4IiwiaW5zdGFuY2lhIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7OztBQUxuQjs7OztBQU9BLElBQU0sWUFBWSxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDM0IsS0FBQSxBQUFLLE1BQU0saUJBREcsQUFDZCxBQUFrQixZQUR0QixBQUFrQixBQUVkLEFBR0o7O2tCQUFBLEFBQWUiLCJmaWxlIjoibHVkaWV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==