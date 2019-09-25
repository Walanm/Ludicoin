'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _MenuVertical = require('./MenuVertical');

var _MenuVertical2 = _interopRequireDefault(_MenuVertical);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' } }, _react2.default.createElement(_Layout2.default, { carregando: props.loading }, _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4 }, _react2.default.createElement(_MenuVertical2.default, { endereco: props.endereco, carregar: props.action })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11 }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, props.children))))));
};