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

var _LayoutProfessor = require('../../../../components/LayoutProfessor');

var _LayoutProfessor2 = _interopRequireDefault(_LayoutProfessor);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../../routes');

var _ludiex = require('../../../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NovaAtividade = function (_Component) {
    (0, _inherits3.default)(NovaAtividade, _Component);

    function NovaAtividade() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NovaAtividade);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NovaAtividade.__proto__ || (0, _getPrototypeOf2.default)(NovaAtividade)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            unidade: '',
            nomeAtividade: '',
            errorMessage: '',
            prazo: '',
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

                                if (!(_this.state.nomeAtividade == '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Preencha o nome da atividade' });
                                _context.next = 17;
                                break;

                            case 10:
                                if (!(_this.state.unidade == '')) {
                                    _context.next = 14;
                                    break;
                                }

                                _this.setState({ errorMessage: 'Selecione uma unidade' });
                                _context.next = 17;
                                break;

                            case 14:
                                _context.next = 16;
                                return _ludiex2.default.methods.cadastrarAtividade(_this.props.turma[0], _this.state.nomeAtividade, _this.state.unidade, _this.state.prazo).send({
                                    from: contas[0]
                                });

                            case 16:

                                _routes.Router.pushRoute('/professor/' + _this.props.conta + '/turmas/' + parseInt(_this.props.turma[0], 16) + '/atividades/show');

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

    (0, _createClass3.default)(NovaAtividade, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loadingPage: true });
        }
    }, {
        key: 'criarItensSelect',
        value: function criarItensSelect() {
            var itens = [];
            for (var i = 0; i < this.props.quantidadeUnidades; i++) {
                itens.push(_react2.default.createElement('option', { key: i, value: i }, i + 1));
            }
            return itens;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ unidade: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loadingPage }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h1', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, 'Cadastrar atividade'))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, this.props.disciplina[1], ' - ', this.props.disciplina[3])), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Turma: '), parseInt(this.props.turma[0], 16)), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Unidade'), _react2.default.createElement('select', { defaultValue: 'DEFAULT', value: this.state.value, onChange: this.handleChange.bind(this) }, _react2.default.createElement('option', { disabled: true, value: 'DEFAULT' }, ' -- selecione uma unidade -- '), this.criarItensSelect())), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Nome da atividade'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.nomeAtividade,
                onChange: function onChange(event) {
                    return _this3.setState({ nomeAtividade: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Prazo'), _react2.default.createElement(_semanticUiReact.Input, {
                placeholder: 'p. ex. 30/09',
                value: this.state.prazo,
                onChange: function onChange(event) {
                    return _this3.setState({ prazo: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Erro!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Cadastrar')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, turmaID, quantidadeUnidades, turma, disciplina;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context2.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context2.sent;
                                turmaID = props.query.id.toString(16);

                                if (!isNaN(turmaID) && turmaID.length < 64) turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

                                _context2.next = 8;
                                return _ludiex2.default.methods.obterUnidadesDaTurma(turmaID).call();

                            case 8:
                                quantidadeUnidades = _context2.sent;
                                _context2.next = 11;
                                return _ludiex2.default.methods.obterTurma(turmaID).call();

                            case 11:
                                turma = _context2.sent;
                                _context2.next = 14;
                                return _ludiex2.default.methods.obterDisciplina(turma[1]).call();

                            case 14:
                                disciplina = _context2.sent;
                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    turma: turma,
                                    disciplina: disciplina,
                                    quantidadeUnidades: quantidadeUnidades.toNumber()
                                });

                            case 16:
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

    return NovaAtividade;
}(_react.Component);

;

exports.default = NovaAtividade;