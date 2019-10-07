
          window.__NEXT_REGISTER_PAGE('/aluno/boletim', function() {
            var comp = module.exports =
webpackJsonp([27],{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(495);


/***/ }),

/***/ 495:
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

var _Layout = __webpack_require__(69);

var _Layout2 = _interopRequireDefault(_Layout);

var _web = __webpack_require__(37);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boletim = function (_Component) {
    (0, _inherits3.default)(Boletim, _Component);

    function Boletim() {
        (0, _classCallCheck3.default)(this, Boletim);

        return (0, _possibleConstructorReturn3.default)(this, (Boletim.__proto__ || (0, _getPrototypeOf2.default)(Boletim)).apply(this, arguments));
    }

    (0, _createClass3.default)(Boletim, [{
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

            this.props.turmas.map(function (element, index) {
                var unidades = [];
                somatorioTurma = 0;

                for (var i = 0; i < _this2.props.unidadesPorTurma[index]; i++) {
                    notaOficial = _this2.props.notasDasUnidades[indiceGeral] > 1000 ? 1000 : _this2.props.notasDasUnidades[indiceGeral];
                    unidades.push(_react2.default.createElement(Cell, null, _this2.colorirNota(indiceGeral, (notaOficial / 100.0).toFixed(1))));
                    indiceGeral++;
                    somatorioTurma += notaOficial;
                }

                for (var j = 0; j < _this2.props.maxUnidades - _this2.props.unidadesPorTurma[index]; j++) {
                    unidades.push(_react2.default.createElement(Cell, null, '-'));
                }unidades.push(_react2.default.createElement(Cell, null, (somatorioTurma / (100.0 * _this2.props.unidadesPorTurma[index])).toFixed(1)));

                linha.push(_react2.default.createElement(Row, { key: index }, _react2.default.createElement(Cell, null, element[6]), _react2.default.createElement(Cell, null, _this2.props.disciplinas[index][1]), _react2.default.createElement(Cell, null, _this2.props.disciplinas[index][3]), unidades));
            });

            return linha;
        }
    }, {
        key: 'renderHeaderCell',
        value: function renderHeaderCell() {
            var HeaderCell = _semanticUiReact.Table.HeaderCell;

            var headers = [];
            for (var i = 0; i < this.props.maxUnidades; i++) {
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

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' } }, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Minhas Notas'), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Voltar',
                color: 'blue'
            })))), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'Per\xEDodo'), _react2.default.createElement(HeaderCell, null, 'C\xF3digo'), _react2.default.createElement(HeaderCell, null, 'Disciplina'), this.renderHeaderCell(), _react2.default.createElement(HeaderCell, null, 'M\xE9dia'))), _react2.default.createElement(Body, null, this.renderLinha())))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, aluno, dadosTurmas, dadosDisciplinas, matrizUnidades, unidades, unidadesPorTurma, maxUnidades, i, notasDasUnidades, notasDasUnidadesNumber, bonusLudicoinUnidades, bonusLudicoinNumber;
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
                                return _ludiex2.default.methods.obterAluno(conta).call();

                            case 6:
                                aluno = _context.sent;

                                aluno[1] = aluno[1].toNumber();
                                aluno[2] = aluno[2].toNumber();

                                _context.next = 11;
                                return _promise2.default.all(Array(parseInt(aluno[4].length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterTurma(aluno[4][index]).call();
                                }));

                            case 11:
                                dadosTurmas = _context.sent;
                                _context.next = 14;
                                return _promise2.default.all(Array(parseInt(aluno[4].length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterDisciplina(dadosTurmas[index][1]).call();
                                }));

                            case 14:
                                dadosDisciplinas = _context.sent;
                                _context.next = 17;
                                return _promise2.default.all(Array(parseInt(aluno[4].length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterIdUnidadesDaTurma(dadosTurmas[index][0]).call();
                                }));

                            case 17:
                                matrizUnidades = _context.sent;
                                unidades = [];
                                unidadesPorTurma = [];
                                maxUnidades = 0;

                                for (i = 0; i < aluno[4].length; i++) {
                                    unidades = unidades.concat(matrizUnidades[i]);
                                    unidadesPorTurma = unidadesPorTurma.concat(matrizUnidades[i].length);
                                    if (matrizUnidades[i].length > maxUnidades) maxUnidades = matrizUnidades[i].length;
                                }

                                _context.next = 24;
                                return _promise2.default.all(Array(parseInt(unidades.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.notaUnidade(conta, unidades[index]).call();
                                }));

                            case 24:
                                notasDasUnidades = _context.sent;
                                notasDasUnidadesNumber = [];

                                notasDasUnidades.map(function (element) {
                                    notasDasUnidadesNumber.push(element.toNumber());
                                });

                                _context.next = 29;
                                return _promise2.default.all(Array(parseInt(unidades.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterBonusLudicoin(unidades[index], conta).call();
                                }));

                            case 29:
                                bonusLudicoinUnidades = _context.sent;
                                bonusLudicoinNumber = [];

                                bonusLudicoinUnidades.map(function (element) {
                                    bonusLudicoinNumber.push(element.toNumber());
                                });

                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplinas: dadosDisciplinas,
                                    turmas: dadosTurmas,
                                    notasDasUnidades: notasDasUnidadesNumber,
                                    bonusLudicoinUnidades: bonusLudicoinNumber,
                                    maxUnidades: maxUnidades,
                                    unidadesPorTurma: unidadesPorTurma
                                });

                            case 33:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Boletim;
}(_react.Component);

;

exports.default = Boletim;

/***/ })

},[494]);
            return { page: comp.default }
          })
        