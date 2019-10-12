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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _ludiex = require('../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/walan/workspace/ludicoin/pages/cadastroAluno.js?entry';


/*
    Página de cadastro de aluno
*/

var CadastroAluno = function (_Component) {
    (0, _inherits3.default)(CadastroAluno, _Component);

    function CadastroAluno() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CadastroAluno);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CadastroAluno.__proto__ || (0, _getPrototypeOf2.default)(CadastroAluno)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            nomeAluno: '',
            cpf: '',
            matricula: '',
            curso: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var contas;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                contas = _context.sent;

                                if (!(_this.state.nomeAluno == '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Preencha seu nome completo' });
                                _context.next = 21;
                                break;

                            case 10:
                                if (!(_this.state.matricula == '' || _this.state.matricula == 0)) {
                                    _context.next = 14;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Matrícula deve ser diferente de 0' });
                                _context.next = 21;
                                break;

                            case 14:
                                if (!(_this.state.cpf == '' || _this.state.curso == '')) {
                                    _context.next = 18;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Todos os campos são obrigatórios' });
                                _context.next = 21;
                                break;

                            case 18:
                                _context.next = 20;
                                return _ludiex2.default.methods.cadastrarAluno(_this.state.nomeAluno, _this.state.cpf, _this.state.matricula, _this.state.curso).send({
                                    from: contas[0]
                                });

                            case 20:

                                _routes.Router.pushRoute('/');

                            case 21:
                                _context.next = 26;
                                break;

                            case 23:
                                _context.prev = 23;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 26:
                                ;

                                _this.setState({ loading: false });

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 23]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CadastroAluno, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, position: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.props.nome), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Cadastrar aluno'))), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Nome completo'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.nomeAluno,
                onChange: function onChange(event) {
                    return _this3.setState({ nomeAluno: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'CPF'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.cpf,
                onChange: function onChange(event) {
                    return _this3.setState({ cpf: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'Matr\xEDcula'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.matricula,
                onChange: function onChange(event) {
                    return _this3.setState({ matricula: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'Curso'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.curso,
                onChange: function onChange(event) {
                    return _this3.setState({ curso: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'Cadastrar'))))))));
        }
    }]);

    return CadastroAluno;
}(_react.Component);

;

exports.default = CadastroAluno;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhZGFzdHJvQWx1bm8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJNZXNzYWdlIiwiR3JpZCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIndlYjMiLCJSb3V0ZXIiLCJMaW5rIiwibHVkaWV4IiwiQ2FkYXN0cm9BbHVubyIsInN0YXRlIiwibm9tZUFsdW5vIiwiY3BmIiwibWF0cmljdWxhIiwiY3Vyc28iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImNvbnRhcyIsIm1ldGhvZHMiLCJjYWRhc3RyYXJBbHVubyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInByb3BzIiwibm9tZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVMsQUFBTSxBQUFRLEFBQU07O0FBQ3RDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBWTs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkI7Ozs7SUFJTSxBOzs7Ozs7Ozs7Ozs7Ozs7OE4sQUFFRjt1QkFBUSxBQUNPLEFBQ1g7aUJBRkksQUFFQSxBQUNKO3VCQUhJLEFBR00sQUFDVjttQkFKSSxBQUlFLEFBQ047MEJBTEksQUFLVSxBQUNkO3FCQU5JLEEsQUFNSztBQU5MLEFBQ0osaUIsQUFRSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh4QixBQUdQLEFBQWMsQUFBK0I7O2dEQUh0QztnREFBQTt1Q0FNa0IsY0FB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QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLGtDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFjLEFBQTBCO0FBRi9EOzs4QkFBQTtnQ0FIUixBQUNRLEFBRUEsQUFLSjtBQUxJO0FBQ0ksaUNBSVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esd0JBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxLQUFLLE1BQUEsQUFBTSxPQUFwQyxBQUFTLEFBQWMsQUFBb0I7QUFGekQ7OzhCQUFBO2dDQVZSLEFBUUksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxpQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBYyxBQUEwQjtBQUYvRDs7OEJBQUE7Z0NBakJSLEFBZUksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQkFBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUYzRDs7OEJBQUE7Z0NBeEJSLEFBc0JJLEFBRUksQUFLSjtBQUxJO0FBQ0ksaUNBSVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0E3QkosQUE2QkksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBeENoQyxBQUNZLEFBQ0ksQUFDQSxBQUNBLEFBRUksQUFDSSxBQUdJLEFBOEJJLEFBVW5DOzs7OztBQTlGdUIsQTs7QUFnRzNCLEFBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY2FkYXN0cm9BbHVuby5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FsYW4vd29ya3NwYWNlL2x1ZGljb2luIn0=