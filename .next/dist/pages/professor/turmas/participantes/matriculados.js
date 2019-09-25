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

var _routes = require('../../../../routes');

var _ludiex = require('../../../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _LayoutProfessor = require('../../../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MostrarMatriculados = function (_Component) {
    (0, _inherits3.default)(MostrarMatriculados, _Component);

    function MostrarMatriculados() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MostrarMatriculados);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MostrarMatriculados.__proto__ || (0, _getPrototypeOf2.default)(MostrarMatriculados)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MostrarMatriculados, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loading: true });
        }
    }, {
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
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Alunos'), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma, 16) + '/participantes/matricula' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Matricular',
                icon: 'add circle',
                color: 'green'
            })), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma, 16) + '/participantes/todasNotas' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'left',
                content: 'Ver notas',
                color: 'blue'
            })))), this.renderAlunos());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
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
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return MostrarMatriculados;
}(_react.Component);

;

exports.default = MostrarMatriculados;