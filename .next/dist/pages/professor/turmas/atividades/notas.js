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

var _routes = require('../../../../routes');

var _ludiex = require('../../../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = require('../../../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _web = require('../../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotasAtividade = function (_Component) {
    (0, _inherits3.default)(NotasAtividade, _Component);

    function NotasAtividade() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NotasAtividade);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NotasAtividade.__proto__ || (0, _getPrototypeOf2.default)(NotasAtividade)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            nota: 0,
            errorMessage: '',
            loading: false,
            loadingPage: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(indice, event) {
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
                                return _ludiex2.default.methods.cadastrarAtividadeRealizada(_this.props.atividade, _this.props.alunosID[indice], parseInt(_this.state.nota * 100)).send({ from: contas[0] });

                            case 8:
                                ;

                                window.location.reload();

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NotasAtividade, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
        }
    }, {
        key: 'renderAlunos',
        value: function renderAlunos() {
            var _this3 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var linhas = [];

            this.props.alunos.map(function (element, index) {
                linhas.push(_react2.default.createElement(Row, { key: index, positive: !!_this3.props.notas[index][0], disabled: !!_this3.props.notas[index][0] }, _react2.default.createElement(Cell, null, element[2]), _react2.default.createElement(Cell, null, element[0]), _react2.default.createElement(Cell, null, _react2.default.createElement(_semanticUiReact.Input, {
                    placeholder: (_this3.props.notas[index][0] / 100.0).toFixed(1),
                    onChange: function onChange(event) {
                        return _this3.setState({ nota: event.target.value });
                    }
                })), _react2.default.createElement(Cell, null, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: _this3.onSubmit.bind(_this3, index) }, _react2.default.createElement(_semanticUiReact.Button, {
                    key: index,
                    icon: 'checkmark',
                    color: 'green',
                    content: 'Dar nota',
                    loading: _this3.state.loading
                })))));
            });

            return linhas;
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Notas'), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma[0], 16) + '/atividades/show' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Voltar',
                color: 'blue'
            })))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, this.props.turma[6], ' - ', this.props.disciplina[1], ' ', this.props.disciplina[3], ' / Tarefa: ', this.props.nomeAtividade)), _react2.default.createElement(_semanticUiReact.Table, null, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, 'Matr\xEDcula'), _react2.default.createElement(HeaderCell, null, 'Aluno'), _react2.default.createElement(HeaderCell, null, 'Nota'), _react2.default.createElement(HeaderCell, null, 'Avaliar'))), _react2.default.createElement(Body, null, this.renderAlunos())), _react2.default.createElement(_semanticUiReact.Message, { hidden: !this.state.errorMessage, header: 'Oops!', content: this.state.errorMessage }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, turmaID, turma, disciplina, alunosID, idAtividade, dadosAtividade, notas, alunos;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context2.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context2.sent;
                                turmaID = props.query.id.toString(16);

                                if (!isNaN(turmaID) && turmaID.length < 64) turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

                                _context2.next = 8;
                                return _ludiex2.default.methods.obterTurma(turmaID).call();

                            case 8:
                                turma = _context2.sent;
                                _context2.next = 11;
                                return _ludiex2.default.methods.obterDisciplina(turma[1]).call();

                            case 11:
                                disciplina = _context2.sent;
                                _context2.next = 14;
                                return _ludiex2.default.methods.obterParticipantes(turmaID).call();

                            case 14:
                                alunosID = _context2.sent;
                                idAtividade = props.query.idatividade.toString(16);

                                if (!isNaN(idAtividade) && idAtividade.length < 64) idAtividade = '0x' + '0'.repeat(64 - idAtividade.length) + idAtividade;

                                _context2.next = 19;
                                return _ludiex2.default.methods.obterAtividade(idAtividade).call();

                            case 19:
                                dadosAtividade = _context2.sent;
                                _context2.next = 22;
                                return _promise2.default.all(Array(parseInt(alunosID.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAtividadeRealizada(idAtividade, alunosID[index]).call();
                                }));

                            case 22:
                                notas = _context2.sent;

                                notas.map(function (element) {
                                    element[0] = element[0].toNumber();
                                });

                                _context2.next = 26;
                                return _promise2.default.all(Array(parseInt(alunosID.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAluno(alunosID[index]).call();
                                }));

                            case 26:
                                alunos = _context2.sent;

                                alunos.map(function (element) {
                                    element[1] = element[1].toNumber();
                                    element[2] = element[2].toNumber();
                                });

                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    atividade: idAtividade,
                                    disciplina: disciplina,
                                    turma: turma,
                                    alunos: alunos,
                                    alunosID: alunosID,
                                    notas: notas,
                                    nomeAtividade: dadosAtividade[2]
                                });

                            case 29:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x3) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return NotasAtividade;
}(_react.Component);

;

exports.default = NotasAtividade;