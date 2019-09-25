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

var _ludiex = require('../../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = require('../../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _routes = require('../../../routes');

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AceitarProfessor = function (_Component) {
    (0, _inherits3.default)(AceitarProfessor, _Component);

    function AceitarProfessor() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AceitarProfessor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AceitarProfessor.__proto__ || (0, _getPrototypeOf2.default)(AceitarProfessor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

                                console.log("Apertou");

                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                contas = _context.sent;
                                _context.next = 9;
                                return _ludiex2.default.methods.aceitarProfessor(indice).send({ from: contas[0] });

                            case 9:

                                window.location.reload();

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AceitarProfessor, [{
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
        key: 'renderProfessores',
        value: function renderProfessores() {
            var _this3 = this;

            var itens = this.props.itens.map(function (element, index) {
                return {
                    header: '' + element[1],
                    meta: 'Conta: ' + element[0],
                    description: _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'CPF: ', _this3.formatarCPF(element[2]), ' ', _react2.default.createElement('br', null), 'Cadastro: ', element[3], _react2.default.createElement('br', null), 'Departamento: ', element[4])),
                    extra: _react2.default.createElement(_semanticUiReact.Form, { onSubmit: _this3.onSubmit.bind(_this3, index) }, _react2.default.createElement(_semanticUiReact.Button, { loading: _this3.state.loading, floated: 'right', basic: true, color: 'green' }, 'Aceitar')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Solicita\xE7\xF5es'))), this.renderProfessores());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, quantidadeRequisicoes, dadosProfessores;
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
                                return _ludiex2.default.methods.obterRequisicoesProfessorComprimento().call();

                            case 6:
                                quantidadeRequisicoes = _context2.sent;
                                _context2.next = 9;
                                return _promise2.default.all(Array(parseInt(quantidadeRequisicoes)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterRequisicaoProfessorPorIndice(index).call();
                                }));

                            case 9:
                                dadosProfessores = _context2.sent;

                                dadosProfessores = dadosProfessores.map(function (element, index) {
                                    element[2] = element[2].toNumber();
                                    element[3] = element[3].toNumber();
                                    return element;
                                });

                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    quantidadeRequisicoes: quantidadeRequisicoes,
                                    itens: dadosProfessores
                                });

                            case 12:
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

    return AceitarProfessor;
}(_react.Component);

;

exports.default = AceitarProfessor;