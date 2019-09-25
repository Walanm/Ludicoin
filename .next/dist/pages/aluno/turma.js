'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _ludiex = require('../../ethereum/ludiex');

var _ludiex2 = _interopRequireDefault(_ludiex);

var _ludicoin = require('../../ethereum/ludicoin');

var _ludicoin2 = _interopRequireDefault(_ludicoin);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Turma = function (_Component) {
    (0, _inherits3.default)(Turma, _Component);

    function Turma() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Turma);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Turma.__proto__ || (0, _getPrototypeOf2.default)(Turma)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false,
            unidade: '',
            quantidadeLudicoins: 0
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

                                console.log(_this.props.unidades[_this.state.unidade]);
                                //console.log(this.state.quantidadeLudicoins);
                                console.log(_web2.default.utils.toWei(_this.state.quantidadeLudicoins, 'ether'));

                                _context.next = 10;
                                return _ludiex2.default.methods.gastarLudicoins(contas[0], _this.props.unidades[_this.state.unidade], _web2.default.utils.toWei(_this.state.quantidadeLudicoins, 'ether')).send({
                                    from: contas[0]
                                });

                            case 10:

                                window.location.reload();
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                ;

                                _this.setState({ loading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Turma, [{
        key: 'renderAtividades',
        value: function renderAtividades(unidade) {
            var itens = [];
            var indice = 0;
            for (var i = 0; i < unidade; i++) {
                indice += this.props.atividadesPorUnidade[i];
            }for (var _i = 0; _i < this.props.atividadesPorUnidade[unidade]; _i++) {
                var atividade = {
                    header: '' + this.props.atividades[indice + _i][2],
                    meta: 'ID: ' + parseInt(this.props.atividades[indice + _i][0], 16) + ' -  Data: ' + this.props.atividades[indice + _i][4],
                    description: _react2.default.createElement('span', { style: { "float": "right" } }, _react2.default.createElement('b', null, 'Nota: '), ' ', (this.props.notas[indice + _i][0] / 100.0).toFixed(1)),
                    fluid: true
                };

                itens = itens.concat(atividade);
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

            return unidades;
        }
    }, {
        key: 'colorirNota',
        value: function colorirNota(indice, nota) {
            if (this.props.bonusLudicoinUnidades[indice] > 0) {
                return _react2.default.createElement('font', { color: 'green' }, nota);
            } else {
                return nota;
            }
        }
    }, {
        key: 'mostrarNotas',
        value: function mostrarNotas() {
            var notas = [];
            var somatorioTotal = 0;
            var notaOficial = 0;

            for (var i = 0; i < this.props.quantidadeUnidades; i++) {
                notaOficial = this.props.notasDasUnidades[i] > 1000 ? 1000 : this.props.notasDasUnidades[i];
                somatorioTotal += notaOficial;
                notas.push(_react2.default.createElement('div', null, _react2.default.createElement('b', { key: i }, _react2.default.createElement('h3', null, _react2.default.createElement('br', null), i + 1, '\xAA Unidade: ', this.colorirNota(i, (notaOficial / 100.0).toFixed(1))))));
            }

            notas.push(_react2.default.createElement('div', null, _react2.default.createElement('a', null, _react2.default.createElement('h3', null, _react2.default.createElement('br', null), 'M\xE9dia: ', (somatorioTotal / (100.0 * this.props.quantidadeUnidades)).toFixed(1)))));
            return notas;
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

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' } }, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11 }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('h2', null, this.props.nome), _react2.default.createElement('hr', null), _react2.default.createElement('h2', null, _react2.default.createElement('center', null, _react2.default.createElement('b', null, this.props.disciplina[1], ' - ', this.props.disciplina[3]), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/' }, _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                },
                floated: 'left',
                color: 'blue',
                content: 'Voltar'
            })), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/turma/' + parseInt(this.props.turma[0], 16) + '/verAlunos' }, _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                },
                floated: 'right',
                content: 'Ver alunos',
                color: 'blue'
            })))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Per\xEDodo:'), ' ', this.props.turma[6]), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'ID: '), parseInt(this.props.turma[0], 16)), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Hor\xE1rio:'), ' ', this.props.turma[3]), _react2.default.createElement('div', null, _react2.default.createElement('p', { style: { "textAlign": "left" } }, _react2.default.createElement('b', null, 'Sala:'), ' ', this.props.turma[4], _react2.default.createElement('span', { style: { "float": "right" } }, _react2.default.createElement('b', null, 'Cota\xE7\xE3o: '), ' ', this.props.disciplina[6] / 100.0, ' LDC/ponto'))), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Professor:'), ' ', this.props.professor[0]), _react2.default.createElement('hr', null), _react2.default.createElement(_semanticUiReact.Card.Group, null, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': 'orange', 'color': '#000000' }, fluid: true }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true }, 'Atividades'))), this.renderUnidades())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5 }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' } }, _react2.default.createElement('center', null, _react2.default.createElement('h2', null, 'Notas')), this.mostrarNotas(), _react2.default.createElement('br', null), _react2.default.createElement(_semanticUiReact.Card.Group, null, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': '#5386ED', 'color': '#000000' }, fluid: true }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true }, 'Ludicoins'))), _react2.default.createElement('div', null, _react2.default.createElement('br', null), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Saldo dispon\xEDvel: '), ' ', this.props.ludicoins.toFixed(2), ' LDC'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Unidade'), _react2.default.createElement('select', { defaultValue: 'DEFAULT', value: this.state.value, onChange: this.handleChange.bind(this) }, _react2.default.createElement('option', { disabled: true, value: 'DEFAULT' }, ' -- selecione uma unidade -- '), this.criarItensSelect())), _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement('label', null, 'Quantidade de ludicoins'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.quantidadeLudicoins,
                onChange: function onChange(event) {
                    return _this3.setState({ quantidadeLudicoins: event.target.value });
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true }, 'Gastar')))))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var conta, entidade, ludicoins, turmaID, turma, disciplina, professor, quantidadeUnidades, matrizAtividadesID, atividadesID, atividadesPorUnidade, i, atividades, notas, idUnidades, notasDasUnidades, notasDasUnidadesNumber, bonusLudicoinUnidades, bonusLudicoinNumber;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                conta = props.query.endereco;
                                _context2.next = 3;
                                return _ludiex2.default.methods.nomeEntidade().call();

                            case 3:
                                entidade = _context2.sent;
                                _context2.next = 6;
                                return _ludicoin2.default.methods.balanceOf(conta).call();

                            case 6:
                                ludicoins = _context2.sent;

                                ludicoins = ludicoins.toString();
                                if (ludicoins.length > 16) ludicoins = ludicoins.substr(0, ludicoins.length - 16);else ludicoins = 0;
                                ludicoins = parseInt(ludicoins, 10);

                                turmaID = props.query.id.toString(16);

                                if (!isNaN(turmaID) && turmaID.length < 64) turmaID = '0x' + '0'.repeat(64 - turmaID.length) + turmaID;

                                _context2.next = 14;
                                return _ludiex2.default.methods.obterTurma(turmaID).call();

                            case 14:
                                turma = _context2.sent;

                                turma[5] = turma[5].toNumber();

                                _context2.next = 18;
                                return _ludiex2.default.methods.obterDisciplina(turma[1]).call();

                            case 18:
                                disciplina = _context2.sent;

                                disciplina[6] = disciplina[6].toNumber();

                                _context2.next = 22;
                                return _ludiex2.default.methods.obterProfessor(turma[2]).call();

                            case 22:
                                professor = _context2.sent;
                                _context2.next = 25;
                                return _ludiex2.default.methods.obterUnidadesDaTurma(turmaID).call();

                            case 25:
                                quantidadeUnidades = _context2.sent;
                                _context2.next = 28;
                                return _promise2.default.all(Array(parseInt(quantidadeUnidades)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterUnidadeTurma(turmaID, index).call();
                                }));

                            case 28:
                                matrizAtividadesID = _context2.sent;
                                atividadesID = [];
                                atividadesPorUnidade = [];

                                for (i = 0; i < quantidadeUnidades; i++) {
                                    atividadesID = atividadesID.concat(matrizAtividadesID[i]);
                                    atividadesPorUnidade.push(matrizAtividadesID[i].length);
                                }

                                _context2.next = 34;
                                return _promise2.default.all(Array(parseInt(atividadesID.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAtividade(atividadesID[index]).call();
                                }));

                            case 34:
                                atividades = _context2.sent;
                                _context2.next = 37;
                                return _promise2.default.all(Array(parseInt(atividadesID.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterAtividadeRealizada(atividadesID[index], conta).call();
                                }));

                            case 37:
                                notas = _context2.sent;

                                notas.map(function (element) {
                                    element[0] = element[0].toNumber();
                                });

                                _context2.next = 41;
                                return _ludiex2.default.methods.obterIdUnidadesDaTurma(turmaID).call();

                            case 41:
                                idUnidades = _context2.sent;
                                _context2.next = 44;
                                return _promise2.default.all(Array(parseInt(idUnidades.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.notaUnidade(conta, idUnidades[index]).call();
                                }));

                            case 44:
                                notasDasUnidades = _context2.sent;
                                notasDasUnidadesNumber = [];

                                notasDasUnidades.map(function (element) {
                                    notasDasUnidadesNumber.push(element.toNumber());
                                });

                                _context2.next = 49;
                                return _promise2.default.all(Array(parseInt(idUnidades.length)).fill().map(function (element, index) {
                                    return _ludiex2.default.methods.obterBonusLudicoin(idUnidades[index], conta).call();
                                }));

                            case 49:
                                bonusLudicoinUnidades = _context2.sent;
                                bonusLudicoinNumber = [];

                                bonusLudicoinUnidades.map(function (element) {
                                    bonusLudicoinNumber.push(element.toNumber());
                                });

                                /*
                                let unidadesID = [];
                                let indice = 0;
                                for(let i = 0; i < this.props.quantidadeUnidades; i++){
                                    for(let j = 0; j < i; j++)
                                        indice += this.props.atividadesPorUnidade[i];
                                    unidadesID.push(atividades[indice][1]);
                                }*/

                                /*
                                let notaUnidade = await Promise.all(
                                    Array(parseInt(quantidadeUnidades.length))
                                        .fill()
                                        .map((element, index) => {
                                            return ludiex.methods.notaUnidade(conta, conta).call();
                                        })
                                );*/

                                return _context2.abrupt('return', {
                                    conta: conta,
                                    nome: entidade,
                                    turma: turma,
                                    disciplina: disciplina,
                                    professor: professor,
                                    atividades: atividades,
                                    quantidadeUnidades: quantidadeUnidades.toNumber(),
                                    atividadesPorUnidade: atividadesPorUnidade,
                                    notas: notas,
                                    ludicoins: ludicoins / 100.0,
                                    unidades: idUnidades,
                                    notasDasUnidades: notasDasUnidadesNumber,
                                    bonusLudicoinUnidades: bonusLudicoinNumber
                                });

                            case 53:
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

    return Turma;
}(_react.Component);

;

exports.default = Turma;