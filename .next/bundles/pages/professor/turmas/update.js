
          window.__NEXT_REGISTER_PAGE('/professor/turmas/update', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(943);


/***/ }),

/***/ 943:
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

var TurmaEdicao = function (_Component) {
    (0, _inherits3.default)(TurmaEdicao, _Component);

    function TurmaEdicao() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TurmaEdicao);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TurmaEdicao.__proto__ || (0, _getPrototypeOf2.default)(TurmaEdicao)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            sala: _this.props.turma[4],
            horario: _this.props.turma[3],
            periodo: _this.props.turma[6],
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
                                return _ludiex2.default.methods.atualizarTurma(_this.props.turma[0], _this.state.horario, _this.state.sala, _this.state.periodo, true).send({
                                    from: contas[0]
                                });

                            case 8:

                                _routes.Router.pushRoute('/professor/' + _this.props.conta + '/turmas/' + parseInt(_this.props.turma[0], 16) + '/atividades/show');

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
        }(), _this.onClickAdd = function () {
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
                                return _ludiex2.default.methods.inserirUnidade(_this.props.turma[0]).send({ from: contas[0] });

                            case 8:

                                window.location.reload();
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
        }(), _this.onClickMinus = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var contas;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context3.prev = 2;
                                _context3.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                contas = _context3.sent;

                                if (!(_this.props.unidades == 0)) {
                                    _context3.next = 10;
                                    break;
                                }

                                _this.setState({ errorMessage: "Essa turma não possui nenhuma unidade." });
                                _context3.next = 13;
                                break;

                            case 10:
                                _context3.next = 12;
                                return _ludiex2.default.methods.removerUnidade(_this.props.turma[0]).send({ from: contas[0] });

                            case 12:
                                window.location.reload();

                            case 13:
                                _context3.next = 18;
                                break;

                            case 15:
                                _context3.prev = 15;
                                _context3.t0 = _context3['catch'](2);

                                _this.setState({ errorMessage: _context3.t0.message });

                            case 18:
                                ;

                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[2, 15]]);
            }));

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TurmaEdicao, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Editar turma'))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Disciplina: '), this.props.disciplina[1], ' - ', this.props.disciplina[3]), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Professor: '), ' ', this.props.professor), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Per\xEDodo'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.periodo,
                onChange: function onChange(event) {
                    return _this3.setState({ periodo: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Hor\xE1rio'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.horario,
                onChange: function onChange(event) {
                    return _this3.setState({ horario: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Sala'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.sala,
                onChange: function onChange(event) {
                    return _this3.setState({ sala: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('div', null, _react2.default.createElement('label', null, _react2.default.createElement('b', null, 'Quantidade de unidades: '), ' ', this.props.unidades, ' \u2003'), _react2.default.createElement(_semanticUiReact.Button, {
                size: 'mini',
                icon: 'minus circle',
                color: 'red',
                onClick: this.onClickMinus
            }), _react2.default.createElement('label', null, '\xA0\xA0'), _react2.default.createElement(_semanticUiReact.Button, {
                size: 'mini',
                icon: 'add circle',
                color: 'green',
                onClick: this.onClickAdd
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Criar')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
                var conta, entidade, turmaID, turma, unidades, disciplina, professor;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context4.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context4.sent;
                                turmaID = props.query.id.toString(16);

                                if (!isNaN(turmaID) && turmaID.length < 64) turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

                                _context4.next = 8;
                                return _ludiex2.default.methods.obterTurma(turmaID).call();

                            case 8:
                                turma = _context4.sent;

                                turma[5] = turma[5].toNumber();

                                _context4.next = 12;
                                return _ludiex2.default.methods.obterUnidadesDaTurma(turmaID).call();

                            case 12:
                                unidades = _context4.sent;

                                unidades = unidades.toNumber();

                                _context4.next = 16;
                                return _ludiex2.default.methods.obterDisciplina(turma[1]).call();

                            case 16:
                                disciplina = _context4.sent;
                                _context4.next = 19;
                                return _ludiex2.default.methods.obterProfessor(turma[2]).call();

                            case 19:
                                professor = _context4.sent;
                                return _context4.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplina: disciplina,
                                    professor: professor[0],
                                    turma: turma,
                                    unidades: unidades
                                });

                            case 21:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getInitialProps(_x4) {
                return _ref5.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return TurmaEdicao;
}(_react.Component);

;

exports.default = TurmaEdicao;

/***/ })

},[942]);
            return { page: comp.default }
          })
        