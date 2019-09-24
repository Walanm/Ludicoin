'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _LudiEx = require('./build/LudiEx.json');

var _LudiEx2 = _interopRequireDefault(_LudiEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instancia = new _web2.default.eth.Contract(JSON.parse(_LudiEx2.default.interface), '0x1Cc92F7907e7AE54EA330d0375b3B4138B8E6cfC');

exports.default = instancia;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2x1ZGlleC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiTHVkaUV4IiwiaW5zdGFuY2lhIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFtQixBQUFuQjs7Ozs7O0FBRUEsSUFBTSxZQUFZLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNkLEtBQUssQUFBTCxNQUFXLGlCQUFPLEFBQWxCLEFBRGMsWUFFZCxBQUZjLEFBQWxCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoibHVkaWV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==