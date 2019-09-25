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