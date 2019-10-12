'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ludiex = require('../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/walan/workspace/ludicoin/pages/index.js?entry';


/*
    Página inicial da aplicação web
*/

var LudicoinIndex = function (_Component) {
    (0, _inherits3.default)(LudicoinIndex, _Component);

    function LudicoinIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LudicoinIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LudicoinIndex.__proto__ || (0, _getPrototypeOf2.default)(LudicoinIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false
        }, _this.onClick = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(indice, event) {
                var enderecos, professor, aluno;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return ethereum.enable();

                            case 5:
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                enderecos = _context.sent;

                                if (!(typeof enderecos[0] === 'undefined')) {
                                    _context.next = 12;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Você precisa estar logado no Metamask' });
                                _context.next = 27;
                                break;

                            case 12:
                                if (!(indice == 0)) {
                                    _context.next = 19;
                                    break;
                                }

                                _context.next = 15;
                                return _ludiex2.default.methods.obterProfessor(enderecos[0]).call();

                            case 15:
                                professor = _context.sent;

                                if (professor[0] === '') _this.setState({ errorMessage: 'Você precisa estar cadastrado como professor e ter o cadastro aprovado' });else {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/professor/' + enderecos[0]);
                                }
                                _context.next = 27;
                                break;

                            case 19:
                                if (!(indice == 1)) {
                                    _context.next = 26;
                                    break;
                                }

                                _context.next = 22;
                                return _ludiex2.default.methods.obterAluno(enderecos[0]).call();

                            case 22:
                                aluno = _context.sent;

                                if (aluno[0] === '') _this.setState({ errorMessage: 'Você precisa estar cadastrado como aluno' });else {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/aluno/' + enderecos[0]);
                                }
                                _context.next = 27;
                                break;

                            case 26:
                                if (indice == 2) {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/cadastroProfessor');
                                } else if (indice == 3) {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/cadastroAluno');
                                }

                            case 27:
                                _context.next = 32;
                                break;

                            case 29:
                                _context.prev = 29;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 32:
                                ;

                            case 33:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 29]]);
            }));

            return function (_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LudicoinIndex, [{
        key: 'renderCards',
        value: function renderCards() {
            return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { onClick: this.onClick.bind(this, 0), error: (!!this.state.errorMessage).toString(),
                color: 'blue', style: { 'backgroundColor': '#5386ED' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, inverted: true, name: 'book', color: 'teal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), 'Professor')), _react2.default.createElement(_semanticUiReact.Card, { onClick: this.onClick.bind(this, 1), color: 'blue', style: { 'backgroundColor': '#5386ED' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, inverted: true, name: 'address book', color: 'red', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }), 'Aluno')));
        }
    }, {
        key: 'renderCadastros',
        value: function renderCadastros() {
            return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { onClick: this.onClick.bind(this, 2), error: (!!this.state.errorMessage).toString(),
                color: 'blue', style: { 'backgroundColor': '#b6e3ff' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Novo professor')), _react2.default.createElement(_semanticUiReact.Card, { color: 'blue', onClick: this.onClick.bind(this, 3), style: { 'backgroundColor': '#b6e3ff' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'Novo aluno')));
        }

        // #b6e3ff

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement(_Layout2.default, { carregando: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, 'Escolha o seu tipo de acesso:')), _react2.default.createElement(_semanticUiReact.Grid, { position: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, this.renderCadastros()), _react2.default.createElement(_semanticUiReact.Message, { hidden: !this.state.errorMessage, color: 'red', header: 'Erro!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Row, { width: 38, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            })))));
        }
    }]);

    return LudicoinIndex;
}(_react.Component);

exports.default = LudicoinIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJNZXNzYWdlIiwiSWNvbiIsIkhlYWRlciIsIkxheW91dCIsIkxpbmsiLCJSb3V0ZXIiLCJ3ZWIzIiwibHVkaWV4IiwiTHVkaWNvaW5JbmRleCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uQ2xpY2siLCJpbmRpY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGhlcmV1bSIsImVuYWJsZSIsImV0aCIsImdldEFjY291bnRzIiwiZW5kZXJlY29zIiwibWV0aG9kcyIsIm9idGVyUHJvZmVzc29yIiwiY2FsbCIsInByb2Zlc3NvciIsInB1c2hSb3V0ZSIsIm9idGVyQWx1bm8iLCJhbHVubyIsIm1lc3NhZ2UiLCJiaW5kIiwidG9TdHJpbmciLCJyZW5kZXJDYXJkcyIsInJlbmRlckNhZGFzdHJvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFTLEFBQU07O0FBQ3BDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5COzs7O0lBSU0sQTs7Ozs7Ozs7Ozs7Ozs7OzhOLEFBQ0Y7MEJBQVEsQUFDVSxBQUNkO3FCLEFBRkksQUFFSztBQUZMLEFBQ0osaUIsQUFJSjtpR0FBVSxpQkFBQSxBQUFPLFFBQVAsQUFBZSxPQUFmOzBDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNOO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FIVixBQUdOLEFBQWMsQUFBZ0I7O2dEQUh4QjtnREFBQTt1Q0FNSSxTQU5KLEFBTUksQUFBUzs7aUNBTmI7Z0RBQUE7dUNBT3NCLGNBQUEsQUFBSyxJQVAzQixBQU9zQixBQUFTOztpQ0FBM0I7QUFQSixxREFBQTs7c0NBU0MsT0FBTyxVQUFQLEFBQU8sQUFBVSxPQVRsQixBQVN5QixjQVR6QjtvREFBQTtBQUFBO0FBVUU7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBVmxCLEFBVUUsQUFBYyxBQUFnQjtnREFWaEM7QUFBQTs7aUNBQUE7c0NBV1MsVUFYVCxBQVdtQixJQVhuQjtvREFBQTtBQUFBO0FBQUE7O2dEQUFBO3VDQVkwQixpQkFBQSxBQUFPLFFBQVAsQUFBZSxlQUFlLFVBQTlCLEFBQThCLEFBQVUsSUFabEUsQUFZMEIsQUFBNEM7O2lDQUE5RDtBQVpSLHFEQWNFOztvQ0FBRyxVQUFBLEFBQVUsT0FBYixBQUFvQixJQUNoQixNQUFBLEFBQUssU0FBUyxFQUFFLGNBRHBCLEFBQ0ksQUFBYyxBQUFnQixpRkFDN0IsQUFDRDswQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBQzdDO21EQUFBLEFBQU8sMEJBQXdCLFVBQS9CLEFBQStCLEFBQVUsQUFDNUM7QUFuQkg7Z0RBQUE7QUFBQTs7aUNBQUE7c0NBb0JTLFVBcEJULEFBb0JtQixJQXBCbkI7b0RBQUE7QUFBQTtBQUFBOztnREFBQTt1Q0FxQnNCLGlCQUFBLEFBQU8sUUFBUCxBQUFlLFdBQVcsVUFBMUIsQUFBMEIsQUFBVSxJQXJCMUQsQUFxQnNCLEFBQXdDOztpQ0FBdEQ7QUFyQlIsaURBdUJFOztvQ0FBRyxNQUFBLEFBQU0sT0FBVCxBQUFnQixJQUNaLE1BQUEsQUFBSyxTQUFTLEVBQUUsY0FEcEIsQUFDSSxBQUFjLEFBQWdCLG1EQUM3QixBQUNEOzBDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFDN0M7bURBQUEsQUFBTyxzQkFBb0IsVUFBM0IsQUFBMkIsQUFBVSxBQUN4QztBQTVCSDtnREFBQTtBQUFBOztpQ0E2Qks7b0NBQUksVUFBSixBQUFjLEdBQUcsQUFDcEI7MENBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUM3QzttREFBQSxBQUFPLFVBQ1Y7QUFITSx1Q0FHQSxJQUFJLFVBQUosQUFBYyxHQUFHLEFBQ3BCOzBDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFDN0M7bURBQUEsQUFBTyxVQUNWO0FBbkNDOztpQ0FBQTtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFzQ0Y7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUF0QzVCLEFBc0NGLEFBQWMsQUFBb0I7O2lDQUNyQztBQXZDSzs7aUNBQUE7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztzQ0EyQ0ksQUFDVjttQ0FDSyxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaOzhCQUFBO2dDQUFBLEFBRUk7QUFGSjthQUFBLGtCQUVJLEFBQUMsdUNBQUssU0FBUyxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQWIsQUFBa0IsTUFBakMsQUFBZSxBQUF3QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQVIsQUFBYyxjQUFoRSxBQUFrRCxBQUE0QixBQUMxRTt1QkFESixBQUNVLFFBQU8sT0FBTyxFQUFFLG1CQUQxQixBQUN3QixBQUFxQjs4QkFEN0M7Z0NBQUEsQUFFSTtBQUZKOytCQUVJLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssTUFBaEI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssVUFBTixNQUFlLFVBQWYsTUFBd0IsTUFBeEIsQUFBNkIsUUFBTyxPQUFwQyxBQUEwQzs4QkFBMUM7Z0NBREosQUFDSTtBQUFBO2dCQUxaLEFBRUksQUFFSSxBQU1KLCtCQUFBLEFBQUMsdUNBQUssU0FBUyxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQWIsQUFBa0IsTUFBakMsQUFBZSxBQUF3QixJQUFJLE9BQTNDLEFBQWlELFFBQU8sT0FBTyxFQUFFLG1CQUFqRSxBQUErRCxBQUFxQjs4QkFBcEY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssTUFBaEI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssVUFBTixNQUFlLFVBQWYsTUFBd0IsTUFBeEIsQUFBNkIsZ0JBQWUsT0FBNUMsQUFBa0Q7OEJBQWxEO2dDQURKLEFBQ0k7QUFBQTtnQkFiaEIsQUFDSSxBQVVJLEFBQ0ksQUFTZjs7OzswQ0FFaUIsQUFDZDttQ0FDSyxjQUFELHNCQUFBLEFBQU0sU0FBTSxVQUFaOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUMsdUNBQUssU0FBUyxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQWIsQUFBa0IsTUFBakMsQUFBZSxBQUF3QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQVIsQUFBYyxjQUFoRSxBQUFrRCxBQUE0QixBQUMxRTt1QkFESixBQUNVLFFBQU8sT0FBTyxFQUFFLG1CQUQxQixBQUN3QixBQUFxQjs4QkFEN0M7Z0NBQUEsQUFFSTtBQUZKOytCQUVJLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssV0FBaEIsQUFBMEI7OEJBQTFCO2dDQUFBO0FBQUE7ZUFIUixBQUNJLEFBRUksQUFLSixvQ0FBQSxBQUFDLHVDQUFLLE9BQU4sQUFBWSxRQUFPLFNBQVMsS0FBQSxBQUFLLFFBQUwsQUFBYSxLQUFiLEFBQWtCLE1BQTlDLEFBQTRCLEFBQXdCLElBQUksT0FBTyxFQUFFLG1CQUFqRSxBQUErRCxBQUFxQjs4QkFBcEY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssV0FBaEIsQUFBMEI7OEJBQTFCO2dDQUFBO0FBQUE7ZUFWWixBQUNJLEFBUUksQUFDSSxBQU1mO0FBRUQ7Ozs7OztpQ0FFUyxBQUNMO21DQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUUsbUJBQUYsQUFBcUIsV0FBVyxTQUFoQyxBQUF5QyxXQUFXLGNBQWhFLEFBQVksQUFBa0U7OEJBQTlFO2dDQUFBLEFBQ0U7QUFERjthQUFBLGtCQUNFLEFBQUMsa0NBQU8sWUFBWSxLQUFBLEFBQUssTUFBekIsQUFBK0I7OEJBQS9CO2dDQUFBLEFBQ0U7QUFERjsrQkFDRSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFETixBQUNFLEFBQUksQUFDSixtREFBQSxBQUFDLHVDQUFLLFVBQU4sQUFBZTs4QkFBZjtnQ0FBQSxBQUNFO0FBREY7K0JBQ0csY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNFO0FBREY7QUFBQSwrQkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUF5QjtBQUF6QjtvQkFGSixBQUNFLEFBQ0UsQUFBeUIsQUFBSyxBQUVoQyxpQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0U7QUFERjtBQUFBLCtCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQXlCO0FBQXpCO29CQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUM5QixvQ0FBQSxBQUFDLDBDQUFRLFFBQVEsQ0FBQyxLQUFBLEFBQUssTUFBdkIsQUFBNkIsY0FBYyxPQUEzQyxBQUFpRCxPQUFNLFFBQXZELEFBQThELFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBcEYsQUFBMEY7OEJBQTFGO2dDQU5KLEFBSUUsQUFFRSxBQUdBO0FBSEE7aUNBR0MsY0FBRCxzQkFBQSxBQUFNLE9BQUksT0FBVixBQUFpQjs4QkFBakI7Z0NBQUEsQUFDQTtBQURBOzZDQUNBLEFBQUMsc0JBQUQsQUFBTTs7OEJBQU47Z0NBZFIsQUFDQSxBQUNFLEFBRUUsQUFTSSxBQUNBLEFBUVg7QUFSVztBQUFBOzs7OztBQTdHWSxBLEFBMEg1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FsYW4vd29ya3NwYWNlL2x1ZGljb2luIn0=