
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([22],{

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(910);


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(16);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(17);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(18);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(22);

var _Layout = __webpack_require__(69);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(26);

var _web = __webpack_require__(37);

var _web2 = _interopRequireDefault(_web);

var _ludiex = __webpack_require__(28);

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LudicoinIndex = function (_Component) {
    (0, _inherits3.default)(LudicoinIndex, _Component);

    function LudicoinIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, LudicoinIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LudicoinIndex.__proto__ || (0, _getPrototypeOf2.default)(LudicoinIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false
        }, _this.onClick = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(indice, event) {
                var enderecos, professor, aluno;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return ethereum.enable();

                            case 5:
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                enderecos = _context.sent;

                                if (!(typeof enderecos[0] === 'undefined')) {
                                    _context.next = 12;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Você precisa estar logado no Metamask' });
                                _context.next = 27;
                                break;

                            case 12:
                                if (!(indice == 0)) {
                                    _context.next = 19;
                                    break;
                                }

                                _context.next = 15;
                                return _ludiex2.default.methods.obterProfessor(enderecos[0]).call();

                            case 15:
                                professor = _context.sent;

                                if (professor[0] === '') _this.setState({ errorMessage: 'Você precisa estar cadastrado como professor e ter o cadastro aprovado' });else {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/professor/' + enderecos[0]);
                                }
                                _context.next = 27;
                                break;

                            case 19:
                                if (!(indice == 1)) {
                                    _context.next = 26;
                                    break;
                                }

                                _context.next = 22;
                                return _ludiex2.default.methods.obterAluno(enderecos[0]).call();

                            case 22:
                                aluno = _context.sent;

                                if (aluno[0] === '') _this.setState({ errorMessage: 'Você precisa estar cadastrado como aluno' });else {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/aluno/' + enderecos[0]);
                                }
                                _context.next = 27;
                                break;

                            case 26:
                                if (indice == 2) {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/cadastroProfessor');
                                } else if (indice == 3) {
                                    _this.setState({ loading: true, errorMessage: '' });
                                    _routes.Router.pushRoute('/cadastroAluno');
                                }

                            case 27:
                                _context.next = 32;
                                break;

                            case 29:
                                _context.prev = 29;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 32:
                                ;

                            case 33:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 29]]);
            }));

            return function (_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(LudicoinIndex, [{
        key: 'renderCards',
        value: function renderCards() {
            return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true }, _react2.default.createElement(_semanticUiReact.Card, { onClick: this.onClick.bind(this, 0), error: (!!this.state.errorMessage).toString(),
                color: 'blue', style: { 'backgroundColor': '#5386ED' } }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, inverted: true, name: 'book', color: 'teal' }), 'Professor')), _react2.default.createElement(_semanticUiReact.Card, { onClick: this.onClick.bind(this, 1), color: 'blue', style: { 'backgroundColor': '#5386ED' } }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, inverted: true, name: 'address book', color: 'red' }), 'Aluno')));
        }
    }, {
        key: 'renderCadastros',
        value: function renderCadastros() {
            return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true }, _react2.default.createElement(_semanticUiReact.Card, { onClick: this.onClick.bind(this, 2), error: (!!this.state.errorMessage).toString(),
                color: 'blue', style: { 'backgroundColor': '#b6e3ff' } }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', textAlign: 'center' }, 'Novo professor')), _react2.default.createElement(_semanticUiReact.Card, { color: 'blue', onClick: this.onClick.bind(this, 3), style: { 'backgroundColor': '#b6e3ff' } }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', textAlign: 'center' }, 'Novo aluno')));
        }

        // #b6e3ff

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' } }, _react2.default.createElement(_Layout2.default, { carregando: this.state.loading }, _react2.default.createElement('h3', null, _react2.default.createElement('center', null, 'Escolha o seu tipo de acesso:')), _react2.default.createElement(_semanticUiReact.Grid, { position: 'center' }, _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16 }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16 }, this.renderCadastros()), _react2.default.createElement(_semanticUiReact.Message, { hidden: !this.state.errorMessage, color: 'red', header: 'Erro!', content: this.state.errorMessage })), _react2.default.createElement(_semanticUiReact.Grid.Row, { width: 38 }, _react2.default.createElement(_semanticUiReact.Grid.Column, null)))));
        }
    }]);

    return LudicoinIndex;
}(_react.Component);

exports.default = LudicoinIndex;

/***/ })

},[909]);
            return { page: comp.default }
          })
        