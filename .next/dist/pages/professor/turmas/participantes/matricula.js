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

var _ludiex = require('../../../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = require('../../../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _routes = require('../../../../routes');

var _web = require('../../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MatriculaNaTurma = function (_Component) {
    (0, _inherits3.default)(MatriculaNaTurma, _Component);

    function MatriculaNaTurma() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MatriculaNaTurma);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MatriculaNaTurma.__proto__ || (0, _getPrototypeOf2.default)(MatriculaNaTurma)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
                                return _ludiex2.default.methods.matricularNaTurma(_this.props.turma, indice).send({ from: contas[0] });

                            case 8:

                                window.location.reload();

                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:

                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MatriculaNaTurma, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
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
        key: 'renderRequisicoes',
        value: function renderRequisicoes() {
            var _this3 = this;

            var itens = this.props.alunos.map(function (element, index) {
                return {
                    header: '' + element[0],
                    meta: 'Conta: ' + _this3.props.requisicoes[index],
                    description: _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'CPF: ', _this3.formatarCPF(element[1]), ' ', _react2.default.createElement('br', null), 'Matr\xEDcula: ', element[2], _react2.default.createElement('br', null), 'Curso: ', element[3])),
                    extra: _react2.default.createElement(_semanticUiReact.Form, { onSubmit: _this3.onSubmit.bind(_this3, index) }, _react2.default.createElement(_semanticUiReact.Button, { loading: _this3.state.loading, floated: 'right', basic: true, color: 'green' }, 'Aceitar matr\xEDcula')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Solicita\xE7\xF5es'))), this.renderRequisicoes());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, turmaID, requisicoes, alunos;
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
                                return _ludiex2.default.methods.obterRequisicoesMatricula(turmaID).call();

                            case 8:
                                requisicoes = _context2.sent;
                                _context2.next = 11;
                                return _promise2.default.all(Array(parseInt(requisicoes.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAluno(requisicoes[index]).call();
                                }));

                            case 11:
                                alunos = _context2.sent;

                                alunos.map(function (element) {
                                    element[1] = element[1].toNumber();
                                    element[2] = element[2].toNumber();
                                });

                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    requisicoes: requisicoes,
                                    alunos: alunos,
                                    turma: turmaID
                                });

                            case 14:
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

    return MatriculaNaTurma;
}(_react.Component);

;

exports.default = MatriculaNaTurma;