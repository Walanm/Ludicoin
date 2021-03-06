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


/*
    Página inicial do professor
    Apenas mostra dados do professor
*/

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
                    lineNumber: 46
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, this.props.entidade), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'PERFIL'))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Nome:'), ' ', this.props.nome), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Conta:'), ' ', this.props.conta), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'CPF:'), ' ', this.formatarCPF(this.props.cpf)), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Cadastro:'), ' ', this.props.cadastro), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Departamento:'), ' ', this.props.departamento), _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginBottom: '10px' }, color: 'yellow', floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2Zlc3Nvci9pbmRleFByb2Zlc3Nvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImx1ZGlleCIsIkxheW91dFByb2Zlc3NvciIsIkJ1dHRvbiIsIkZvcm0iLCJJbmRleFByb2Zlc3NvciIsInN0YXRlIiwibG9hZGluZyIsInNldFN0YXRlIiwiZW50cmFkYSIsImNwZlN0ciIsInRvU3RyaW5nIiwiaXNOYU4iLCJsZW5ndGgiLCJyZXBlYXQiLCJzbGljZSIsInByb3BzIiwiY29udGEiLCJjYXJyZWdhciIsImJpbmQiLCJlbnRpZGFkZSIsIm5vbWUiLCJmb3JtYXRhckNQRiIsImNwZiIsImNhZGFzdHJvIiwiZGVwYXJ0YW1lbnRvIiwibWFyZ2luQm90dG9tIiwicXVlcnkiLCJlbmRlcmVjbyIsIm1ldGhvZHMiLCJub21lRW50aWRhZGUiLCJjYWxsIiwib2J0ZXJQcm9mZXNzb3IiLCJwcm9mZXNzb3IiLCJ0b051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFRLEFBQVM7Ozs7Ozs7QUFFakI7Ozs7O0lBS00sQTs7Ozs7Ozs7Ozs7Ozs7Z09BaUJGLEEsUUFBUSxFQUFFLFMsQUFBRixBQUFXOzs7OzttQ0FFUixBQUNQO2lCQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVyxBQUM1Qjs7OztvQ0FJVyxBLFNBQVMsQUFDakI7Z0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUSxBQUNyQjtnQkFBRyxDQUFDLE1BQUQsQUFBQyxBQUFNLFdBQVcsT0FBQSxBQUFPLFNBQTVCLEFBQXFDLElBQ2pDLFNBQVMsSUFBQSxBQUFJLE9BQU8sS0FBSyxPQUFoQixBQUF1QixVQUFoQyxBQUEwQyxBQUM5QztxQkFBUyxPQUFBLEFBQU8sTUFBUCxBQUFhLEdBQWIsQUFBZSxLQUFm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