
          window.__NEXT_REGISTER_PAGE('/professor/turmas/participantes/todasNotas', function() {
            var comp = module.exports =
webpackJsonp([9],{

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(937);


/***/ }),

/***/ 937:
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

var TodasNotas = function (_Component) {
    (0, _inherits3.default)(TodasNotas, _Component);

    function TodasNotas() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TodasNotas);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TodasNotas.__proto__ || (0, _getPrototypeOf2.default)(TodasNotas)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TodasNotas, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loading: true });
        }
    }, {
        key: 'colorirNota',
        value: function colorirNota(indice, nota) {
            if (this.props.bonusLudicoinUnidades[indice] > 0) {
                return _react2.default.createElement('font', { color: 'green' }, nota);
            } else {
                return nota;
            }
        }
    }, {
        key: 'renderLinha',
        value: function renderLinha() {
            var _this2 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var linha = [];
            var indiceGeral = 0;
            var notaOficial = 0;
            var somatorioTurma = 0;

            this.props.alunos.map(function (element, index) {
                var unidades = [];
                somatorioTurma = 0;

                for (var i = 0; i < _this2.props.unidades.length; i++) {
                    notaOficial = _this2.props.notas[indiceGeral] > 1000 ? 1000 : _this2.props.notas[indiceGeral];
                    unidades.push(_react2.default.createElement(Cell, null, _this2.colorirNota(indiceGeral, (notaOficial / 100.0).toFixed(1))));
                    indiceGeral++;
                    somatorioTurma += notaOficial;
                }

                unidades.push(_react2.default.createElement(Cell, null, (somatorioTurma / (100.0 * _this2.props.unidades.length)).toFixed(1)));

                linha.push(_react2.default.createElement(Row, { key: index }, _react2.default.createElement(Cell, null, element[2]), _react2.default.createElement(Cell, null, element[0]), unidades));
            });

            return linha;
        }
    }, {
        key: 'renderHeaderCell',
        value: function renderHeaderCell() {
            var HeaderCell = _semanticUiReact.Table.HeaderCell;

            var headers = [];
            for (var i = 0; i < this.props.unidades.length; i++) {
                headers.push(_react2.default.createElement(HeaderCell, null, i + 1));
            }return headers;
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Notas'), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma[0], 16) + '/participantes/matriculados' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Voltar',
                color: 'blue'
            })))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, this.props.disciplina[1], ' - ', this.props.disciplina[3], ' (', this.props.turma[6], ' - ID: ', parseInt(this.props.turma[0], 16), ')')), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'Matr\xEDcula'), _react2.default.createElement(HeaderCell, null, 'Nome'), this.renderHeaderCell(), _react2.default.createElement(HeaderCell, null, 'M\xE9dia'))), _react2.default.createElement(Body, null, this.renderLinha())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, turmaID, alunos, dadosAlunos, turma, disciplina, idUnidades, alunoUnidade, i, j, notas, notasNumber, bonusLudicoinUnidades, bonusLudicoinNumber;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context.sent;
                                turmaID = props.query.id.toString(16);

                                if (!isNaN(turmaID) && turmaID.length < 64) turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

                                _context.next = 8;
                                return _ludiex2.default.methods.obterParticipantes(turmaID).call();

                            case 8:
                                alunos = _context.sent;
                                _context.next = 11;
                                return _promise2.default.all(Array(parseInt(alunos.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAluno(alunos[index]).call();
                                }));

                            case 11:
                                dadosAlunos = _context.sent;

                                dadosAlunos.map(function (element) {
                                    element[1] = element[1].toNumber();
                                    element[2] = element[2].toNumber();
                                });

                                _context.next = 15;
                                return _ludiex2.default.methods.obterTurma(turmaID).call();

                            case 15:
                                turma = _context.sent;
                                _context.next = 18;
                                return _ludiex2.default.methods.obterDisciplina(turma[1]).call();

                            case 18:
                                disciplina = _context.sent;
                                _context.next = 21;
                                return _ludiex2.default.methods.obterIdUnidadesDaTurma(turmaID).call();

                            case 21:
                                idUnidades = _context.sent;
                                alunoUnidade = [];

                                for (i = 0; i < alunos.length; i++) {
                                    for (j = 0; j < idUnidades.length; j++) {
                                        alunoUnidade.push([alunos[i], idUnidades[j]]);
                                    }
                                }

                                _context.next = 26;
                                return _promise2.default.all(Array(parseInt(alunoUnidade.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.notaUnidade(alunoUnidade[index][0], alunoUnidade[index][1]).call();
                                }));

                            case 26:
                                notas = _context.sent;
                                notasNumber = [];

                                notas.map(function (element) {
                                    notasNumber.push(element.toNumber());
                                });

                                _context.next = 31;
                                return _promise2.default.all(Array(parseInt(alunoUnidade.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterBonusLudicoin(alunoUnidade[index][1], alunoUnidade[index][0]).call();
                                }));

                            case 31:
                                bonusLudicoinUnidades = _context.sent;
                                bonusLudicoinNumber = [];

                                bonusLudicoinUnidades.map(function (element) {
                                    bonusLudicoinNumber.push(element.toNumber());
                                });

                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    turma: turma,
                                    disciplina: disciplina,
                                    alunos: dadosAlunos,
                                    unidades: idUnidades,
                                    notas: notasNumber,
                                    bonusLudicoinUnidades: bonusLudicoinNumber
                                });

                            case 35:
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

    return TodasNotas;
}(_react.Component);

;

exports.default = TodasNotas;

/***/ })

},[936]);
            return { page: comp.default }
          })
        