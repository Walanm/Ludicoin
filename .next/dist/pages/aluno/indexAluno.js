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

var _jsxFileName = '/Users/walan/workspace/ludicoin/pages/aluno/indexAluno.js?entry';


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
                    description: _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    }, _react2.default.createElement('p', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    }, 'Hor\xE1rio: ', element[3], _react2.default.createElement('br', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    }), 'Local: ', element[4], _react2.default.createElement('br', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    }), _react2.default.createElement('i', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    }, element[5], ' alunos'))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            });
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

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_Layout2.default, { carregando: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, { verticalAlign: 'bottom', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, this.props.nome, ' - Aluno'), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, 'Nome:'), ' ', this.props.aluno[0]), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, 'Conta:'), ' ', this.props.conta), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, 'CPF:'), ' ', this.formatarCPF(this.props.aluno[1])), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, 'Matr\xEDcula:'), ' ', this.props.aluno[2]), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, 'Curso:'), ' ', this.props.aluno[3]), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/boletim', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                }, style: { marginBottom: '10px' }, color: 'green', floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, 'Ver notas'))), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/matriculaAluno', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                }, style: { marginBottom: '10px' }, color: 'yellow', floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Realizar Matr\xEDcula'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement(_semanticUiReact.Card, {
                color: 'blue', style: { 'backgroundColor': '#5386ED', marginBottom: '35px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, inverted: true, name: 'dollar sign', color: 'teal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }), this.props.ludicoins.toFixed(2), ' LDC')))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, position: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': 'orange', 'color': '#000000' }, fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, 'Minhas Turmas'))), this.renderTurmas()))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FsdW5vL2luZGV4QWx1bm8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkljb24iLCJIZWFkZXIiLCJGb3JtIiwiTGluayIsImx1ZGlleCIsImx1ZGljb2luIiwiTGF5b3V0IiwiUm91dGVyIiwiSW5kZXhBbHVubyIsInN0YXRlIiwibG9hZGluZyIsImV2ZW50IiwiaW5kZXgiLCJzZXRTdGF0ZSIsInB1c2hSb3V0ZSIsInByb3BzIiwiY29udGEiLCJwYXJzZUludCIsInR1cm1hcyIsIml0ZW5zIiwibWFwIiwiZWxlbWVudCIsIm9uQ2xpY2siLCJlIiwiaGVhZGVyIiwiZGlzY2lwbGluYXMiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsImVudHJhZGEiLCJjcGZTdHIiLCJ0b1N0cmluZyIsImlzTmFOIiwibGVuZ3RoIiwicmVwZWF0Iiwic2xpY2UiLCJub21lIiwiYWx1bm8iLCJmb3JtYXRhckNQRiIsIm1hcmdpbkJvdHRvbSIsImx1ZGljb2lucyIsInRvRml4ZWQiLCJyZW5kZXJUdXJtYXMiLCJxdWVyeSIsImVuZGVyZWNvIiwibWV0aG9kcyIsIm5vbWVFbnRpZGFkZSIsImNhbGwiLCJlbnRpZGFkZSIsIm9idGVyQWx1bm8iLCJ0b051bWJlciIsImJhbGFuY2VPZiIsInN1YnN0ciIsImFsbCIsIkFycmF5IiwiZmlsbCIsIm9idGVyVHVybWEiLCJkYWRvc1R1cm1hcyIsIm9idGVyRGlzY2lwbGluYSIsImRhZG9zRGlzY2lwbGluYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTSxBQUFROztBQUMzQyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZLEFBQ25CLEFBQVMsQUFBYzs7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