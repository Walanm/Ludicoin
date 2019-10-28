
          window.__NEXT_REGISTER_PAGE('/professor/disciplinas/show', function() {
            var comp = module.exports =
webpackJsonp([20],{

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(915);


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(34);

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = __webpack_require__(26);

var _ludiex = __webpack_require__(28);

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = __webpack_require__(41);

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisciplinaShow = function (_Component) {
    (0, _inherits3.default)(DisciplinaShow, _Component);

    function DisciplinaShow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DisciplinaShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DisciplinaShow.__proto__ || (0, _getPrototypeOf2.default)(DisciplinaShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DisciplinaShow, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loading: true });
        }
    }, {
        key: 'onClick',
        value: function onClick(event, index) {
            this.setState({ loading: true });
            _routes.Router.pushRoute('/professor/' + this.props.conta + '/disciplinas/' + parseInt(this.props.disciplinas[index], 16) + '/update');
        }
    }, {
        key: 'renderDisciplinas',
        value: function renderDisciplinas() {
            var _this2 = this;

            var itens = this.props.itens.map(function (element, index) {
                return {
                    onClick: function onClick(e) {
                        return _this2.onClick(e, index);
                    },
                    header: element[1] + '  -  ' + element[3],
                    meta: 'ID: ' + parseInt(_this2.props.disciplinas[index], 16),
                    description: _react2.default.createElement('div', null, _react2.default.createElement('p', { style: { "textAlign": "left", "color": "#000000" } }, _react2.default.createElement('b', null, 'Cr\xE9ditos: '), element[2], _react2.default.createElement('span', { style: { "float": "right" } }, _react2.default.createElement('b', null, 'Cota\xE7\xE3o: '), ' ', element[6] / 100.0, ' LDC/ponto'))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Disciplinas'), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/disciplinas/new' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Criar',
                icon: 'add circle',
                color: 'green'
            })))), this.renderDisciplinas());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, disciplinas, resumoDisciplinas;
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
                                return _ludiex2.default.methods.obterDisciplinas().call();

                            case 6:
                                disciplinas = _context.sent;
                                _context.next = 9;
                                return _promise2.default.all(Array(parseInt(disciplinas.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterDisciplina(disciplinas[index]).call();
                                }));

                            case 9:
                                resumoDisciplinas = _context.sent;

                                resumoDisciplinas.map(function (element) {
                                    element[2] = element[2].toNumber();
                                    element[6] = element[6].toNumber();
                                });

                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    disciplinas: disciplinas,
                                    itens: resumoDisciplinas
                                });

                            case 12:
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

    return DisciplinaShow;
}(_react.Component);

;

exports.default = DisciplinaShow;

/***/ })

},[914]);
            return { page: comp.default }
          })
        