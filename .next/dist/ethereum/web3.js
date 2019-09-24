'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3;

var OPTIONS = {
    defaultBlock: "latest",
    transactionConfirmationBlocks: 1,
    transactionBlockTimeout: 5
};

//const web3 = new Web3(provider, null, OPTIONS);

//const web3 = new Web3(provider);

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are on the browser and metamask is running.
    web3 = new _web2.default(window.web3.currentProvider, null, OPTIONS);
} else {
    // We are on the server *OR* the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/81097b295f724055b44caea8536046a2');
    web3 = new _web2.default(provider, null, OPTIONS);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInR5cGUiLCJ3ZWIzIiwiT1BUSU9OUyIsImRlZmF1bHRCbG9jayIsInRyYW5zYWN0aW9uQ29uZmlybWF0aW9uQmxvY2tzIiwidHJhbnNhY3Rpb25CbG9ja1RpbWVvdXQiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7Ozs7QUFFVCxJQUFBLEFBQUk7O0FBRUosSUFBTTtrQkFBVSxBQUNFLEFBQ2Q7bUNBRlksQUFFbUIsQUFDL0I7NkJBSEosQUFBZ0IsQUFHYTtBQUhiLEFBQ1o7O0FBS0o7O0FBRUE7O0FBRUEsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWxELEFBQTJELGFBQWEsQUFDcEU7QUFDQTtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQWhCLEFBQXFCLGlCQUFyQixBQUFzQyxNQUE3QyxBQUFPLEFBQTRDLEFBQ3REO0FBSEQsT0FHTyxBQUNIO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDYixBQUVKO1dBQU8sQUFBSSxrQkFBSixBQUFTLFVBQVQsQUFBbUIsTUFBMUIsQUFBTyxBQUF5QixBQUNuQztBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dhbGFuL3dvcmtzcGFjZS9sdWRpY29pbiJ9