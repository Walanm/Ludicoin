
          window.__NEXT_REGISTER_PAGE('/professor/turmas/showall', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(941);


/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(34);

var _promise2 = _interopRequireDefault(_promise);

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

var _semanticUiReact = __webpack_require__(22);

var _routes = __webpack_require__(26);

var _ludiex = __webpack_require__(28);

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = __webpack_require__(41);

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _web = __webpack_require__(37);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MostrarTodasTurmas = function (_Component) {
    (0, _inherits3.default)(MostrarTodasTurmas, _Component);

    function MostrarTodasTurmas() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MostrarTodasTurmas);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MostrarTodasTurmas.__proto__ || (0, _getPrototypeOf2.default)(MostrarTodasTurmas)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MostrarTodasTurmas, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loading: true });
        }
    }, {
        key: 'renderLinhaTurma',
        value: function renderLinhaTurma(index, ajusteDeIndice) {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var linhasTurma = [];

            for (var i = 0; i < this.props.disciplinas[index][4]; i++) {
                linhasTurma.push(_react2.default.createElement(Row, { key: ajusteDeIndice + i }, _react2.default.createElement(Cell, null, this.props.turmas[ajusteDeIndice - index - 1 + i][6]), _react2.default.createElement(Cell, null, parseInt(this.props.turmas[ajusteDeIndice - index - 1 + i][0], 16)), _react2.default.createElement(Cell, null, this.props.professores[ajusteDeIndice - index - 1 + i][0]), _react2.default.createElement(Cell, null, this.props.turmas[ajusteDeIndice - index - 1 + i][3]), _react2.default.createElement(Cell, null, this.props.turmas[ajusteDeIndice - index - 1 + i][4]), _react2.default.createElement(Cell, null, this.props.turmas[ajusteDeIndice - index - 1 + i][5], ' alunos')));
            }

            return linhasTurma;
        }
    }, {
        key: 'renderLinhaDisciplina',
        value: function renderLinhaDisciplina() {
            var _this2 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var linhasDisciplina = [];
            var indiceGeral = 0;

            this.props.disciplinas.map(function (element, index) {
                indiceGeral = linhasDisciplina.length;
                linhasDisciplina.push(_react2.default.createElement(Row, { key: indiceGeral }, _react2.default.createElement(Cell, { colSpan: '6', style: { 'backgroundColor': '#542CA9', 'color': '#ffffff' } }, _react2.default.createElement('b', null, element[1], ' - ', element[3]))));
                var linhasTurma = _this2.renderLinhaTurma(index, indiceGeral + 1);
                for (var i = 0; i < linhasTurma.length; i++) {
                    linhasDisciplina.push(linhasTurma[i]);
                }
            });

            return linhasDisciplina;
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Todas as turmas'), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/new' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Nova',
                icon: 'add circle',
                color: 'green'
            })), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/show' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Minhas turmas',
                color: 'blue'
            })))), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'Per\xEDodo'), _react2.default.createElement(HeaderCell, null, 'ID'), _react2.default.createElement(HeaderCell, null, 'Professor'), _react2.default.createElement(HeaderCell, null, 'Hor\xE1rio'), _react2.default.createElement(HeaderCell, null, 'Local'), _react2.default.createElement(HeaderCell, null, 'Matriculados'))), _react2.default.createElement(Body, null, this.renderLinhaDisciplina())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, disciplinas, resumoDisciplinas, matrizTurmas, turmas, i, dadosTurmas, professores;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context.sent;
                                _context.next = 6;
                                return _ludiex2.default.methods.obterDisciplinas().call();

                            case 6:
                                disciplinas = _context.sent;
                                _context.next = 9;
                                return _promise2.default.all(Array(parseInt(disciplinas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterDisciplina(disciplinas[index]).call();
                                }));

                            case 9:
                                resumoDisciplinas = _context.sent;

                                resumoDisciplinas.map(function (element) {
                                    element[4] = element[4].toNumber();
                                });

                                _context.next = 13;
                                return _promise2.default.all(Array(parseInt(disciplinas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterTurmasDaDisciplina(disciplinas[index]).call();
                                }));

                            case 13:
                                matrizTurmas = _context.sent;
                                turmas = [];

                                for (i = 0; i < disciplinas.length; i++) {
                                    turmas = turmas.concat(matrizTurmas[i]);
                                }

                                _context.next = 18;
                                return _promise2.default.all(Array(parseInt(turmas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterTurma(turmas[index]).call();
                                }));

                            case 18:
                                dadosTurmas = _context.sent;

                                dadosTurmas.map(function (element) {
                                    element[5] = element[5].toNumber();
                                });

                                _context.next = 22;
                                return _promise2.default.all(Array(parseInt(turmas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterProfessor(dadosTurmas[index][2]).call();
                                }));

                            case 22:
                                professores = _context.sent;
                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplinas: resumoDisciplinas,
                                    turmas: dadosTurmas,
                                    professores: professores
                                });

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return MostrarTodasTurmas;
}(_react.Component);

;

exports.default = MostrarTodasTurmas;

/***/ })

},[940]);
            return { page: comp.default }
          })
        