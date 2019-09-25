'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Ludicoin = require('./build/Ludicoin.json');

var _Ludicoin2 = _interopRequireDefault(_Ludicoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instancia = new _web2.default.eth.Contract(JSON.parse(_Ludicoin2.default.interface), '0x36b75Da7206baeBE343ff0Ab27693C6d383Fb799');

exports.default = instancia;