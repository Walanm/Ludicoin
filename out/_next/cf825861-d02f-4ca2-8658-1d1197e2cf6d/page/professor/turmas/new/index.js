
          window.__NEXT_REGISTER_PAGE('/professor/turmas/new', function() {
            var comp = module.exports =
webpackJsonp([12],{

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(931);


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(34);

var _promise2 = _interopRequireDefault(_promise);

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

var TurmaNova = function (_Component) {
    (0, _inherits3.default)(TurmaNova, _Component);

    function TurmaNova() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TurmaNova);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TurmaNova.__proto__ || (0, _getPrototypeOf2.default)(TurmaNova)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            idDisciplina: '',
            sala: '',
            horario: '',
            unidades: '',
            periodo: '',
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

                                console.log(_this.state.idDisciplina);

                                _context.next = 9;
                                return _ludiex2.default.methods.cadastrarTurma(_this.state.idDisciplina, _this.state.horario, _this.state.sala, _this.state.unidades, _this.state.periodo).send({
                                    from: contas[0]
                                });

                            case 9:

                                _routes.Router.pushRoute('/professor/' + contas[0] + '/turmas/show');

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:
                                ;

                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TurmaNova, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
        }
    }, {
        key: 'criarItensSelect',
        value: function criarItensSelect() {
            var itens = [];
            for (var i = 0; i < this.props.quantidadeDisciplinas; i++) {
                itens.push(_react2.default.createElement('option', { key: this.props.disciplinas[i][0], value: this.props.disciplinas[i][0] }, this.props.disciplinas[i][1], ' - ', this.props.disciplinas[i][3]));
            }
            return itens;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ idDisciplina: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Nova turma'))), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Disciplina'), _react2.default.createElement('select', { defaultValue: 'DEFAULT', value: this.state.value, onChange: this.handleChange.bind(this) }, _react2.default.createElement('option', { disabled: true, value: 'DEFAULT' }, ' -- selecione uma disciplina -- '), this.criarItensSelect())), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Per\xEDodo'), _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'p. ex. 2019.1',
                value: this.state.periodo,
                onChange: function onChange(event) {
                    return _this3.setState({ periodo: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Hor\xE1rio'), _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'p. ex. 246M34',
                value: this.state.horario,
                onChange: function onChange(event) {
                    return _this3.setState({ horario: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Sala'), _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'p. ex. DID 3 - 112',
                value: this.state.sala,
                onChange: function onChange(event) {
                    return _this3.setState({ sala: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Quantidade de unidades'), _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'p. ex. 2',
                value: this.state.unidades,
                onChange: function onChange(event) {
                    return _this3.setState({ unidades: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Criar')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, disciplinas, resumoDisciplinas;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context2.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context2.sent;
                                _context2.next = 6;
                                return _ludiex2.default.methods.obterDisciplinas().call();

                            case 6:
                                disciplinas = _context2.sent;
                                _context2.next = 9;
                                return _promise2.default.all(Array(parseInt(disciplinas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterDisciplina(disciplinas[index]).call();
                                }));

                            case 9:
                                resumoDisciplinas = _context2.sent;
                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplinas: resumoDisciplinas,
                                    quantidadeDisciplinas: disciplinas.length
                                });

                            case 11:
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

    return TurmaNova;
}(_react.Component);

;

exports.default = TurmaNova;

/***/ })

},[930]);
            return { page: comp.default }
          })
        