
          window.__NEXT_REGISTER_PAGE('/professor/disciplinas/update', function() {
            var comp = module.exports =
webpackJsonp([19],{

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(917);


/***/ }),

/***/ 917:
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

var _LayoutProfessor = __webpack_require__(41);

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _semanticUiReact = __webpack_require__(22);

var _web = __webpack_require__(37);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(26);

var _ludiex = __webpack_require__(28);

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisciplinaEditar = function (_Component) {
    (0, _inherits3.default)(DisciplinaEditar, _Component);

    function DisciplinaEditar() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DisciplinaEditar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DisciplinaEditar.__proto__ || (0, _getPrototypeOf2.default)(DisciplinaEditar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            nomeDisciplina: _this.props.disciplina[3],
            codigoDisciplina: _this.props.disciplina[1],
            creditos: _this.props.disciplina[2],
            taxaCambio: _this.props.disciplina[6] / 100.0,
            errorMessage: '',
            loading: false,
            loadingPage: false
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
                                _context.next = 8;
                                return _ludiex2.default.methods.atualizarDisciplina(_this.props.disciplina[0], _this.state.codigoDisciplina, _this.state.creditos, _this.state.nomeDisciplina, parseInt(_this.state.taxaCambio * 100)).send({
                                    from: contas[0]
                                });

                            case 8:

                                _routes.Router.pushRoute('/professor/' + contas[0] + '/disciplinas/show');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:
                                ;

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onClick = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var contas;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context2.prev = 2;
                                _context2.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                contas = _context2.sent;
                                _context2.next = 8;
                                return _ludiex2.default.methods.removerDisciplina(_this.props.disciplina[0]).send({
                                    from: contas[0]
                                });

                            case 8:

                                _routes.Router.pushRoute('/professor/' + contas[0] + '/disciplinas/show');
                                _context2.next = 14;
                                break;

                            case 11:
                                _context2.prev = 11;
                                _context2.t0 = _context2['catch'](2);

                                _this.setState({ errorMessage: _context2.t0.message });

                            case 14:
                                ;

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[2, 11]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DisciplinaEditar, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Editar disciplina'), _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                icon: 'remove',
                color: 'red',
                content: 'Remover',
                onClick: this.onClick
            }))), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Nome'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.nomeDisciplina,
                onChange: function onChange(event) {
                    return _this3.setState({ nomeDisciplina: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'C\xF3digo da disciplina'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.codigoDisciplina,
                onChange: function onChange(event) {
                    return _this3.setState({ codigoDisciplina: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Cr\xE9ditos'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.creditos,
                onChange: function onChange(event) {
                    return _this3.setState({ creditos: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Ludicoins por ponto na disciplina'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.taxaCambio,
                onChange: function onChange(event) {
                    return _this3.setState({ taxaCambio: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Atualizar')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
                var conta, entidade, disciplinaID, disciplina;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context3.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context3.sent;
                                disciplinaID = props.query.id.toString(16);

                                if (!isNaN(disciplinaID) && disciplinaID.length < 64) disciplinaID = '0x' + '0'.repeat(64 - disciplinaID.length) + disciplinaID;

                                _context3.next = 8;
                                return _ludiex2.default.methods.obterDisciplina(disciplinaID).call();

                            case 8:
                                disciplina = _context3.sent;

                                disciplina[2] = disciplina[2].toNumber();
                                disciplina[6] = disciplina[6].toNumber();

                                return _context3.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplina: disciplina
                                });

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getInitialProps(_x3) {
                return _ref4.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return DisciplinaEditar;
}(_react.Component);

;

exports.default = DisciplinaEditar;

/***/ })

},[916]);
            return { page: comp.default }
          })
        