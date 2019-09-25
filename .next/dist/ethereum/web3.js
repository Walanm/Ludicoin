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