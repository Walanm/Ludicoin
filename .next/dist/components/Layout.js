'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout() {
        (0, _classCallCheck3.default)(this, Layout);

        return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.props.carregando }, _react2.default.createElement(_semanticUiReact.Loader, null)), _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', className: 'jsx-1857416013'
            })), _react2.default.createElement(_style2.default, {
                styleId: '1857416013',
                css: ['body{min-height:100vh;}']
            }), _react2.default.createElement(_Header2.default, null), this.props.children);
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;