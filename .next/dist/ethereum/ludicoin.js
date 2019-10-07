'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Ludicoin = require('./build/Ludicoin.json');

var _Ludicoin2 = _interopRequireDefault(_Ludicoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instancia = new _web2.default.eth.Contract(JSON.parse(_Ludicoin2.default.interface), '0xdc9d659f520BA0f9a0f0d49342c2d13038109A80');

exports.default = instancia;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2x1ZGljb2luLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJMdWRpY29pbiIsImluc3RhbmNpYSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7OztBQUVBLElBQU0sWUFBWSxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZCxLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQURjLFlBRWQsQUFGYyxBQUFsQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6Imx1ZGljb2luLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==