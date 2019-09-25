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

var _web = require('../../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MostrarAtividades = function (_Component) {
    (0, _inherits3.default)(MostrarAtividades, _Component);

    function MostrarAtividades() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MostrarAtividades);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MostrarAtividades.__proto__ || (0, _getPrototypeOf2.default)(MostrarAtividades)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MostrarAtividades, [{
        key: 'carregar',
        value: function carregar() {
            this.setState({ loading: true });
        }
    }, {
        key: 'onClick',
        value: function onClick(event, index) {
            this.setState({ loading: true });
            _routes.Router.pushRoute('/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma[0], 16) + '/atividades/' + parseInt(this.props.atividades[index][0], 16) + '/notas');
        }
    }, {
        key: 'renderAtividades',
        value: function renderAtividades(unidade) {
            var _this2 = this;

            var itens = [];
            var indice = 0;
            for (var i = 0; i < unidade; i++) {
                indice += this.props.atividadesPorUnidade[i];
            }
            var _loop = function _loop(_i) {
                var atividade = {
                    onClick: function onClick(e) {
                        return _this2.onClick(e, indice + _i);
                    },
                    header: '' + _this2.props.atividades[indice + _i][2],
                    meta: 'ID: ' + parseInt(_this2.props.atividades[indice + _i][0], 16) + ' -  Data: ' + _this2.props.atividades[indice + _i][4],
                    fluid: true
                };

                itens = itens.concat(atividade);
            };

            for (var _i = 0; _i < this.props.atividadesPorUnidade[unidade]; _i++) {
                _loop(_i);
            }

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens });
        }
    }, {
        key: 'renderUnidades',
        value: function renderUnidades() {
            var unidades = [];
            for (var i = 0; i < this.props.quantidadeUnidades; i++) {
                unidades.push(_react2.default.createElement('div', null, _react2.default.createElement('a', { key: i }, _react2.default.createElement('h3', null, _react2.default.createElement('br', null), i + 1, '\xAA Unidade'))));
                unidades.push(this.renderAtividades(i));
            }

            console.log(unidades);

            return unidades;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_LayoutProfessor2.default, { endereco: this.props.conta, action: this.carregar.bind(this), loading: this.state.loading }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h2', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, this.props.disciplina[1], ' - ', this.props.disciplina[3]), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma[0], 16) + '/update' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'left',
                icon: 'edit',
                color: 'blue',
                content: 'Editar'
            })), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma[0], 16) + '/participantes/matriculados' }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Ver alunos',
                color: 'blue'
            })))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Per\xEDodo:'), ' ', this.props.turma[6]), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'ID: '), parseInt(this.props.turma[0], 16)), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Hor\xE1rio:'), ' ', this.props.turma[3]), _react2.default.createElement('div', null, _react2.default.createElement('p', { style: { "textAlign": "left" } }, _react2.default.createElement('b', null, 'Sala:'), ' ', this.props.turma[4], _react2.default.createElement('span', { style: { "float": "right" } }, _react2.default.createElement('b', null, 'Cota\xE7\xE3o: '), ' ', this.props.disciplina[6] / 100.0, ' LDC/ponto'))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Professor:'), ' ', this.props.professor[0]), _react2.default.createElement('hr', null), _react2.default.createElement(_routes.Link, { route: '/professor/' + this.props.conta + '/turmas/' + parseInt(this.props.turma[0], 16) + '/atividades/new' }, _react2.default.createElement(_semanticUiReact.Button, {
                icon: 'add',
                floated: 'right',
                color: 'orange'
            })), _react2.default.createElement(_semanticUiReact.Card.Group, null, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': 'orange', 'color': '#000000' }, fluid: true }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true }, 'Atividades'))), this.renderUnidades());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var conta, entidade, turmaID, turma, disciplina, professor, quantidadeUnidades, matrizAtividadesID, atividadesID, atividadesPorUnidade, i, atividades;
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
                                return _ludiex2.default.methods.obterTurma(turmaID).call();

                            case 8:
                                turma = _context.sent;

                                turma[5] = turma[5].toNumber();

                                _context.next = 12;
                                return _ludiex2.default.methods.obterDisciplina(turma[1]).call();

                            case 12:
                                disciplina = _context.sent;

                                disciplina[6] = disciplina[6].toNumber();

                                _context.next = 16;
                                return _ludiex2.default.methods.obterProfessor(turma[2]).call();

                            case 16:
                                professor = _context.sent;
                                _context.next = 19;
                                return _ludiex2.default.methods.obterUnidadesDaTurma(turmaID).call();

                            case 19:
                                quantidadeUnidades = _context.sent;

                                console.log("unidades " + quantidadeUnidades);

                                _context.next = 23;
                                return _promise2.default.all(Array(parseInt(quantidadeUnidades)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterUnidadeTurma(turmaID, index).call();
                                }));

                            case 23:
                                matrizAtividadesID = _context.sent;
                                atividadesID = [];
                                atividadesPorUnidade = [];

                                for (i = 0; i < quantidadeUnidades; i++) {
                                    atividadesID = atividadesID.concat(matrizAtividadesID[i]);
                                    atividadesPorUnidade.push(matrizAtividadesID[i].length);
                                }

                                _context.next = 29;
                                return _promise2.default.all(Array(parseInt(atividadesID.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAtividade(atividadesID[index]).call();
                                }));

                            case 29:
                                atividades = _context.sent;

                                console.log("Atividades por Unidade " + atividadesPorUnidade);

                                return _context.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    turma: turma,
                                    disciplina: disciplina,
                                    professor: professor,
                                    atividades: atividades,
                                    quantidadeUnidades: quantidadeUnidades.toNumber(),
                                    atividadesPorUnidade: atividadesPorUnidade
                                });

                            case 32:
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

    return MostrarAtividades;
}(_react.Component);

;

exports.default = MostrarAtividades;