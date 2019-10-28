'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Ludicoin = require('./build/Ludicoin.json');

var _Ludicoin2 = _interopRequireDefault(_Ludicoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Exporta uma instância JavaScript do smart contract Ludicoin para ser utilizada pela aplicação web.
*/

var instancia = new _web2.default.eth.Contract(JSON.parse(_Ludicoin2.default.interface), '0x14F6C9F9529F14584918Efe3DB6DCB8E135cF2B0');

exports.default = instancia;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2x1ZGljb2luLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJMdWRpY29pbiIsImluc3RhbmNpYSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7QUFMckI7Ozs7QUFPQSxJQUFNLFlBQVksSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzNCLEtBQUEsQUFBSyxNQUFNLG1CQURHLEFBQ2QsQUFBb0IsWUFEeEIsQUFBa0IsQUFFZCxBQUdKOztrQkFBQSxBQUFlIiwiZmlsZSI6Imx1ZGljb2luLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==