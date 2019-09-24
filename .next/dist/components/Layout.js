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

var _jsxFileName = '/Users/walan/workspace/ludicoin/components/Layout.js';


var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout() {
        (0, _classCallCheck3.default)(this, Layout);

        return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.props.carregando, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            })), _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', className: 'jsx-1857416013',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '1857416013',
                css: 'body{min-height:100vh;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCbUMsQUFHMEMsaUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIsIExvYWRlciwgRGltbWVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5wcm9wcy5jYXJyZWdhbmRvfT5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=components/Layout.js */'
            }), _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), this.props.children);
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiTG9hZGVyIiwiRGltbWVyIiwiSGVhZCIsIkhlYWRlciIsIkxheW91dCIsInByb3BzIiwiY2FycmVnYW5kbyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFXLEFBQVE7O0FBQzVCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O2lDQUVPLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHlDQUFPLFFBQVEsS0FBQSxBQUFLLE1BQXJCLEFBQTJCOzhCQUEzQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtBQUFBLGlDQUVKLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHVEQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLDZFQUE1Qjs7OEJBQUE7Z0NBTFIsQUFJSSxBQUNJO0FBQUE7O3lCQUxSO3FCQUFBLEFBWUk7QUFaSixnQ0FZSSxBQUFDOzs4QkFBRDtnQ0FaSixBQVlJLEFBQ0M7QUFERDtBQUFBLHFCQUNDLEFBQUssTUFkZCxBQUNJLEFBYWdCLEFBR3ZCOzs7OztBQXBCZ0IsQSxBQXdCckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==