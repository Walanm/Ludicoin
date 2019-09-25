'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../routes');

var _ludiex = require('../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MatriculaAluno = function (_Component) {
    (0, _inherits3.default)(MatriculaAluno, _Component);

    function MatriculaAluno() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MatriculaAluno);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MatriculaAluno.__proto__ || (0, _getPrototypeOf2.default)(MatriculaAluno)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false,
            selecionados: []
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var contas, i;
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

                                console.log(_this.state.selecionados);
                                console.log(_this.props.turmas);

                                i = 0;

                            case 9:
                                if (!(i < _this.state.selecionados.length)) {
                                    _context.next = 15;
                                    break;
                                }

                                _context.next = 12;
                                return _ludiex2.default.methods.requisitarMatriculaNaTurma(_this.props.turmas[_this.state.selecionados[i]][0]).send({
                                    from: contas[0]
                                });

                            case 12:
                                i++;
                                _context.next = 9;
                                break;

                            case 15:

                                _routes.Router.pushRoute('/aluno/' + contas[0]);

                                _context.next = 21;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 21:
                                ;

                                _this.setState({ loading: false });

                            case 23:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 18]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MatriculaAluno, [{
        key: 'handleChange',
        value: function handleChange(event, optionID) {
            var selecao = this.state.selecionados;
            var indice = this.state.selecionados.indexOf(optionID);

            if (indice > -1) {
                selecao.splice(indice, 1);
                this.setState({ selecionados: selecao });
                console.log('Deletar');
            } else {
                selecao.push(optionID);
                this.setState({ selecionados: selecao });
                console.log('Incluir');
            }

            console.log(this.state.selecionados);
        }
    }, {
        key: 'renderLinhaTurma',
        value: function renderLinhaTurma(index, ajusteDeIndice) {
            var _this3 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var linhasTurma = [];

            var _loop = function _loop(i) {
                linhasTurma.push(_react2.default.createElement(Row, { key: ajusteDeIndice + i }, _react2.default.createElement(Cell, null, _this3.props.turmas[ajusteDeIndice - index - 1 + i][6]), _react2.default.createElement(Cell, null, parseInt(_this3.props.turmas[ajusteDeIndice - index - 1 + i][0], 16)), _react2.default.createElement(Cell, null, _this3.props.professores[ajusteDeIndice - index - 1 + i][0]), _react2.default.createElement(Cell, null, _this3.props.turmas[ajusteDeIndice - index - 1 + i][3]), _react2.default.createElement(Cell, null, _this3.props.turmas[ajusteDeIndice - index - 1 + i][4]), _react2.default.createElement(Cell, null, _react2.default.createElement(_semanticUiReact.Checkbox, { onChange: function onChange(e) {
                        return _this3.handleChange(e, ajusteDeIndice - index - 1 + i);
                    } }))));
            };

            for (var i = 0; i < this.props.disciplinas[index][4]; i++) {
                _loop(i);
            }

            return linhasTurma;
        }
    }, {
        key: 'renderLinhaDisciplina',
        value: function renderLinhaDisciplina() {
            var _this4 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var linhasDisciplina = [];
            var indiceGeral = 0;

            this.props.disciplinas.map(function (element, index) {
                indiceGeral = linhasDisciplina.length;
                linhasDisciplina.push(_react2.default.createElement(Row, { key: indiceGeral }, _react2.default.createElement(Cell, { colSpan: '6', style: { 'backgroundColor': '#542CA9', 'color': '#ffffff' } }, _react2.default.createElement('b', null, element[1], ' - ', element[3]))));
                var linhasTurma = _this4.renderLinhaTurma(index, indiceGeral + 1);
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

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' } }, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Todas as turmas'), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Voltar',
                color: 'blue'
            })))), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'Per\xEDodo'), _react2.default.createElement(HeaderCell, null, 'ID'), _react2.default.createElement(HeaderCell, null, 'Professor'), _react2.default.createElement(HeaderCell, null, 'Hor\xE1rio'), _react2.default.createElement(HeaderCell, null, 'Local'), _react2.default.createElement(HeaderCell, null, 'Selecionar'))), _react2.default.createElement(Body, null, this.renderLinhaDisciplina())), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, onClick: this.onSubmit, color: 'green', floated: 'right' }, 'Solicitar matr\xEDculas'))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, disciplinas, resumoDisciplinas, matrizTurmas, turmas, i, dadosTurmas, professores;
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

                                resumoDisciplinas.map(function (element) {
                                    element[4] = element[4].toNumber();
                                });

                                _context2.next = 13;
                                return _promise2.default.all(Array(parseInt(disciplinas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterTurmasDaDisciplina(disciplinas[index]).call();
                                }));

                            case 13:
                                matrizTurmas = _context2.sent;
                                turmas = [];

                                for (i = 0; i < disciplinas.length; i++) {
                                    turmas = turmas.concat(matrizTurmas[i]);
                                }

                                _context2.next = 18;
                                return _promise2.default.all(Array(parseInt(turmas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterTurma(turmas[index]).call();
                                }));

                            case 18:
                                dadosTurmas = _context2.sent;

                                dadosTurmas.map(function (element) {
                                    element[5] = element[5].toNumber();
                                });

                                _context2.next = 22;
                                return _promise2.default.all(Array(parseInt(turmas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterProfessor(dadosTurmas[index][2]).call();
                                }));

                            case 22:
                                professores = _context2.sent;
                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplinas: resumoDisciplinas,
                                    turmas: dadosTurmas,
                                    professores: professores
                                });

                            case 24:
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

    return MatriculaAluno;
}(_react.Component);

;

exports.default = MatriculaAluno;