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

var _ludiex = require('../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = require('../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexProfessor = function (_Component) {
    (0, _inherits3.default)(IndexProfessor, _Component);

    function IndexProfessor() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, IndexProfessor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IndexProfessor.__proto__ || (0, _getPrototypeOf2.default)(IndexProfessor)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(IndexProfessor, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loading: true });
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
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading }, _react2.default.createElement('h2', null, this.props.entidade), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'PERFIL'))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Nome:'), ' ', this.props.nome), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Conta:'), ' ', this.props.conta), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'CPF:'), ' ', this.formatarCPF(this.props.cpf)), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Cadastro:'), ' ', this.props.cadastro), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Departamento:'), ' ', this.props.departamento), _react2.default.createElement(_semanticUiReact.Form, null, _react2.default.createElement(_semanticUiReact.Button, { style: { marginBottom: '10px' }, color: 'yellow', floated: 'right' }, 'Bem-vindo!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, professor;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                //this.carregar = this.carregar.bind(this);
                                conta = props.query.endereco;
                                _context.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context.sent;
                                _context.next = 6;
                                return _ludiex2.default.methods.obterProfessor(conta).call();

                            case 6:
                                professor = _context.sent;
                                return _context.abrupt('return', {
                                    entidade: entidade,
                                    conta: conta,
                                    nome: professor[0],
                                    cpf: professor[1].toNumber(),
                                    cadastro: professor[2].toNumber(),
                                    departamento: professor[3]
                                });

                            case 8:
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

    return IndexProfessor;
}(_react.Component);

;

exports.default = IndexProfessor;