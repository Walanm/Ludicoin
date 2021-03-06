'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Define o provedor web3 a ser utilizado.
*/

var web3;

var OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
};

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // Está rodando em um navegador & metamask está ativo.
    web3 = new _web2.default(window.web3.currentProvider, null, OPTIONS);
} else {
    // Está rodando no servidor OU o usuário não está utilizando metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/81097b295f724055b44caea8536046a2');
    web3 = new _web2.default(provider, null, OPTIONS);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInR5cGUiLCJ3ZWIzIiwiT1BUSU9OUyIsImRlZmF1bHRCbG9jayIsInRyYW5zYWN0aW9uQ29uZmlybWF0aW9uQmxvY2tzIiwidHJhbnNhY3Rpb25CbG9ja1RpbWVvdXQiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsQUFBTzs7OztBQUNQLEFBQVM7Ozs7QUFMVDs7OztBQU9BLElBQUEsQUFBSTs7QUFFSixJQUFNO2tCQUFVLEFBQ0UsQUFDZDttQ0FGWSxBQUVtQixBQUMvQjs2QkFISixBQUFnQixBQUdhO0FBSGIsQUFDWjs7QUFLSixJQUFHLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbEQsQUFBMkQsYUFBYSxBQUNwRTtBQUNBO1dBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBaEIsQUFBcUIsaUJBQXJCLEFBQXNDLE1BQTdDLEFBQU8sQUFBNEMsQUFDdEQ7QUFIRCxPQUdPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNiLEFBRUo7V0FBTyxBQUFJLGtCQUFKLEFBQVMsVUFBVCxBQUFtQixNQUExQixBQUFPLEFBQXlCLEFBQ25DO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FsYW4vd29ya3NwYWNlL2x1ZGljb2luIn0=