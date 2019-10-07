
          window.__NEXT_REGISTER_PAGE('/aluno/verAlunos', function() {
            var comp = module.exports =
webpackJsonp([25],{

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(904);


/***/ }),

/***/ 904:
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

var _Layout = __webpack_require__(69);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerAlunos = function (_Component) {
    (0, _inherits3.default)(VerAlunos, _Component);

    function VerAlunos() {
        (0, _classCallCheck3.default)(this, VerAlunos);

        return (0, _possibleConstructorReturn3.default)(this, (VerAlunos.__proto__ || (0, _getPrototypeOf2.default)(VerAlunos)).apply(this, arguments));
    }

    (0, _createClass3.default)(VerAlunos, [{
        key: 'renderAlunos',
        value: function renderAlunos() {
            var _this2 = this;

            var itens = this.props.alunos.map(function (element, index) {
                return {
                    header: '' + element[0],
                    meta: 'Conta: ' + _this2.props.alunosID[index],
                    description: _react2.default.createElement('div', null, _react2.default.createElement('p', { style: { "textAlign": "left" } }, 'Matr\xEDcula: ', element[1], _react2.default.createElement('span', { style: { "float": "right" } }, 'Curso: ', element[3]))),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' } }, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Alunos'), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/turma/' + parseInt(this.props.turma, 16) }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Voltar',
                color: 'blue'
            })))), this.renderAlunos())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, turmaID, alunosID, alunos;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context.sent;
                                turmaID = props.query.id.toString(16);

                                if (!isNaN(turmaID) && turmaID.length < 64) turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

                                _context.next = 8;
                                return _ludiex2.default.methods.obterParticipantes(turmaID).call();

                            case 8:
                                alunosID = _context.sent;
                                _context.next = 11;
                                return _promise2.default.all(Array(parseInt(alunosID.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAluno(alunosID[index]).call();
                                }));

                            case 11:
                                alunos = _context.sent;

                                alunos.map(function (element) {
                                    element[1] = element[1].toNumber();
                                    element[2] = element[2].toNumber();
                                });

                                console.log(parseInt(turmaID, 16));

                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    alunosID: alunosID,
                                    alunos: alunos,
                                    turma: turmaID
                                });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return VerAlunos;
}(_react.Component);

;

exports.default = VerAlunos;

/***/ })

},[903]);
            return { page: comp.default }
          })
        