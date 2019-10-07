
          window.__NEXT_REGISTER_PAGE('/cadastroAluno', function() {
            var comp = module.exports =
webpackJsonp([24],{

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(906);


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(17);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(69);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(22);

var _web = __webpack_require__(37);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(26);

var _ludiex = __webpack_require__(28);

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CadastroProfessor = function (_Component) {
    (0, _inherits3.default)(CadastroProfessor, _Component);

    function CadastroProfessor() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CadastroProfessor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CadastroProfessor.__proto__ || (0, _getPrototypeOf2.default)(CadastroProfessor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

    (0, _createClass3.default)(CadastroProfessor, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' } }, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3 }), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, position: 'center' }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Cadastrar aluno'))), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Nome completo'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.nomeAluno,
                onChange: function onChange(event) {
                    return _this3.setState({ nomeAluno: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'CPF'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.cpf,
                onChange: function onChange(event) {
                    return _this3.setState({ cpf: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Matr\xEDcula'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.matricula,
                onChange: function onChange(event) {
                    return _this3.setState({ matricula: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Curso'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.curso,
                onChange: function onChange(event) {
                    return _this3.setState({ curso: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Cadastrar'))))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context2.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context2.sent;
                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade
                                });

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CadastroProfessor;
}(_react.Component);

;

exports.default = CadastroProfessor;

/***/ })

},[905]);
            return { page: comp.default }
          })
        