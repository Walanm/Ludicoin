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

var _jsxFileName = '/Users/walan/workspace/ludicoin/pages/professor/indexProfessor.js?entry';


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
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, this.props.entidade), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'PERFIL'))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Nome:'), ' ', this.props.nome), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Conta:'), ' ', this.props.conta), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'CPF:'), ' ', this.formatarCPF(this.props.cpf)), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Cadastro:'), ' ', this.props.cadastro), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Departamento:'), ' ', this.props.departamento), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginBottom: '10px' }, color: 'yellow', floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Bem-vindo!')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2Zlc3Nvci9pbmRleFByb2Zlc3Nvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImx1ZGlleCIsIkxheW91dFByb2Zlc3NvciIsIkJ1dHRvbiIsIkZvcm0iLCJJbmRleFByb2Zlc3NvciIsInN0YXRlIiwibG9hZGluZyIsInNldFN0YXRlIiwiZW50cmFkYSIsImNwZlN0ciIsInRvU3RyaW5nIiwiaXNOYU4iLCJsZW5ndGgiLCJyZXBlYXQiLCJzbGljZSIsInByb3BzIiwiY29udGEiLCJjYXJyZWdhciIsImJpbmQiLCJlbnRpZGFkZSIsIm5vbWUiLCJmb3JtYXRhckNQRiIsImNwZiIsImNhZGFzdHJvIiwiZGVwYXJ0YW1lbnRvIiwibWFyZ2luQm90dG9tIiwicXVlcnkiLCJlbmRlcmVjbyIsIm1ldGhvZHMiLCJub21lRW50aWRhZGUiLCJjYWxsIiwib2J0ZXJQcm9mZXNzb3IiLCJwcm9mZXNzb3IiLCJ0b051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFRLEFBQVM7Ozs7Ozs7SUFHWCxBOzs7Ozs7Ozs7Ozs7OztnTyxBQWtCRixRQUFRLEVBQUUsU0FBRixBQUFXLEE7Ozs7O21DQUVSLEFBQ1A7aUJBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzVCOzs7O29DQUlXLEEsU0FBUyxBQUNqQjtnQkFBSSxTQUFTLFFBQWIsQUFBYSxBQUFRLEFBQ3JCO2dCQUFHLENBQUMsTUFBRCxBQUFDLEFBQU0sV0FBVyxPQUFBLEFBQU8sU0FBNUIsQUFBcUMsSUFDakMsU0FBUyxJQUFBLEFBQUksT0FBTyxLQUFLLE9BQWhCLEFBQXVCLFVBQWhDLEFBQTBDLEFBQzlDO3FCQUFTLE9BQUEsQUFBTyxNQUFQLEFBQWEsR0FBYixBQUFlLEtBQWYsQUFBb0IsTUFB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