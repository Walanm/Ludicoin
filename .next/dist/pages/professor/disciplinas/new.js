'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _LayoutProfessor = require('../../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _ludiex = require('../../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisciplinaNova = function (_Component) {
    (0, _inherits3.default)(DisciplinaNova, _Component);

    function DisciplinaNova() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DisciplinaNova);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DisciplinaNova.__proto__ || (0, _getPrototypeOf2.default)(DisciplinaNova)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            nomeDisciplina: '',
            codigoDisciplina: '',
            creditos: '',
            taxaCambio: '',
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

                                if (!(_this.state.codigoDisciplina == '' || _this.state.creditos == '' || _this.state.nomeDisciplina == '' || _this.state.taxaCambio == '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Todos os campos são obrigatórios' });
                                _context.next = 17;
                                break;

                            case 10:
                                if (!(_this.state.taxaCambio > 3)) {
                                    _context.next = 14;
                                    break;
                                }

                                _this.setState({ errorMessage: 'O valor máximo de Ludicoins por disciplina é 3.0' });
                                _context.next = 17;
                                break;

                            case 14:
                                _context.next = 16;
                                return _ludiex2.default.methods.inserirDisciplina(_this.state.codigoDisciplina, _this.state.creditos, _this.state.nomeDisciplina, parseInt(_this.state.taxaCambio * 100)).send({
                                    from: contas[0]
                                });

                            case 16:

                                _routes.Router.pushRoute('/professor/' + contas[0] + '/disciplinas/show');

                            case 17:
                                _context.next = 22;
                                break;

                            case 19:
                                _context.prev = 19;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 22:
                                ;

                                _this.setState({ loading: false });

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 19]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DisciplinaNova, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Nova disciplina'))), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Nome'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.nomeDisciplina,
                onChange: function onChange(event) {
                    return _this3.setState({ nomeDisciplina: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'C\xF3digo da disciplina'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.codigoDisciplina,
                onChange: function onChange(event) {
                    return _this3.setState({ codigoDisciplina: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Cr\xE9ditos'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.creditos,
                onChange: function onChange(event) {
                    return _this3.setState({ creditos: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Ludicoins por ponto na disciplina'), _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'p. ex. 1.5',
                value: this.state.taxaCambio,
                onChange: function onChange(event) {
                    return _this3.setState({ taxaCambio: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Criar')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context2.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context2.sent;
                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade
                                });

                            case 5:
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

    return DisciplinaNova;
}(_react.Component);

;

exports.default = DisciplinaNova;