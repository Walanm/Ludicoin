'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _ludicoin = require('../../ethereum/ludicoin');

var _ludicoin2 = _interopRequireDefault(_ludicoin);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexAluno = function (_Component) {
    (0, _inherits3.default)(IndexAluno, _Component);

    function IndexAluno() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, IndexAluno);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IndexAluno.__proto__ || (0, _getPrototypeOf2.default)(IndexAluno)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(IndexAluno, [{
        key: 'onClick',
        value: function onClick(event, index) {
            this.setState({ loading: true });
            _routes.Router.pushRoute('/aluno/' + this.props.conta + '/turma/' + parseInt(this.props.turmas[index], 16));
        }
    }, {
        key: 'renderTurmas',
        value: function renderTurmas() {
            var _this2 = this;

            var itens = this.props.itens.map(function (element, index) {
                return {
                    onClick: function onClick(e) {
                        return _this2.onClick(e, index);
                    },
                    header: '' + _this2.props.disciplinas[index],
                    meta: element[6] + ' / ID: ' + parseInt(_this2.props.turmas[index], 16),
                    description: _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'Hor\xE1rio: ', element[3], _react2.default.createElement('br', null), 'Local: ', element[4], _react2.default.createElement('br', null), _react2.default.createElement('i', null, element[5], ' alunos'))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens });
        }
    }, {
        key: 'formatarCPF',
        value: function formatarCPF(entrada) {
            var cpfStr = entrada.toString();
            if (!isNaN(cpfStr) && cpfStr.length < 11) cpfStr = '0'.repeat(11 - cpfStr.length) + cpfStr;
            cpfStr = cpfStr.slice(0, 3) + "." + cpfStr.slice(3, 6) + "." + cpfStr.slice(6, 9) + "-" + cpfStr.slice(9);
            return cpfStr;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' } }, _react2.default.createElement(_Layout2.default, { carregando: this.state.loading }, _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Row, { verticalAlign: 'bottom' }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12 }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('h2', null, this.props.nome, ' - Aluno'), _react2.default.createElement('hr', null), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Nome:'), ' ', this.props.aluno[0]), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Conta:'), ' ', this.props.conta), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'CPF:'), ' ', this.formatarCPF(this.props.aluno[1])), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Matr\xEDcula:'), ' ', this.props.aluno[2]), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Curso:'), ' ', this.props.aluno[3]), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/boletim' }, _react2.default.createElement(_semanticUiReact.Form, null, _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                }, style: { marginBottom: '10px' }, color: 'green', floated: 'right' }, 'Ver notas'))), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/matriculaAluno' }, _react2.default.createElement(_semanticUiReact.Form, null, _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                }, style: { marginBottom: '10px' }, color: 'yellow', floated: 'right' }, 'Realizar Matr\xEDcula'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3 }, _react2.default.createElement(_semanticUiReact.Card, {
                color: 'blue', style: { 'backgroundColor': '#5386ED', marginBottom: '35px' } }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, inverted: true, name: 'dollar sign', color: 'teal' }), this.props.ludicoins.toFixed(2), ' LDC')))), _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, position: 'center' }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement(_semanticUiReact.Card.Group, null, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': 'orange', 'color': '#000000' }, fluid: true }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true }, 'Minhas Turmas'))), this.renderTurmas()))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, aluno, ludicoins, dadosTurmas, dadosDisciplinas, disciplinas;
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
                                return _ludicoin2.default.methods.balanceOf(conta).call();

                            case 11:
                                ludicoins = _context.sent;

                                ludicoins = ludicoins.toString();
                                if (ludicoins.length > 16) ludicoins = ludicoins.substr(0, ludicoins.length - 16);else ludicoins = 0;
                                ludicoins = parseInt(ludicoins, 10);

                                _context.next = 17;
                                return _promise2.default.all(Array(parseInt(aluno[4].length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterTurma(aluno[4][index]).call();
                                }));

                            case 17:
                                dadosTurmas = _context.sent;
                                _context.next = 20;
                                return _promise2.default.all(Array(parseInt(aluno[4].length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterDisciplina(dadosTurmas[index][1]).call();
                                }));

                            case 20:
                                dadosDisciplinas = _context.sent;
                                disciplinas = dadosDisciplinas.map(function (element) {
                                    return element[3];
                                });

                                dadosTurmas.map(function (element) {
                                    element[5] = element[5].toNumber();
                                });

                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    aluno: aluno,
                                    turmas: aluno[4],
                                    itens: dadosTurmas,
                                    disciplinas: disciplinas,
                                    ludicoins: ludicoins / 100.0
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

    return IndexAluno;
}(_react.Component);

;

exports.default = IndexAluno;