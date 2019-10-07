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

var _jsxFileName = '/Users/walan/workspace/ludicoin/pages/aluno/turma.js?entry';


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
                    description: _react2.default.createElement('span', { style: { "float": "right" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 159
                        }
                    }, _react2.default.createElement('b', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 160
                        }
                    }, 'Nota: '), ' ', (this.props.notas[indice + _i][0] / 100.0).toFixed(1)),
                    fluid: true
                };

                itens = itens.concat(atividade);
            }

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: itens, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            });
        }
    }, {
        key: 'renderUnidades',
        value: function renderUnidades() {
            var unidades = [];
            for (var i = 0; i < this.props.quantidadeUnidades; i++) {
                unidades.push(_react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }, _react2.default.createElement('a', { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }, _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }), i + 1, '\xAA Unidade'))));
                unidades.push(this.renderAtividades(i));
            }

            return unidades;
        }
    }, {
        key: 'colorirNota',
        value: function colorirNota(indice, nota) {
            if (this.props.bonusLudicoinUnidades[indice] > 0) {
                return _react2.default.createElement('font', { color: '#61D871', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185
                    }
                }, nota);
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
                notas.push(_react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                    }
                }, _react2.default.createElement('b', { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                    }
                }, _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                    }
                }), i + 1, '\xAA Unidade: ', this.colorirNota(i, (notaOficial / 100.0).toFixed(1))))));
            }

            notas.push(_react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }), 'M\xE9dia: ', (somatorioTotal / (100.0 * this.props.quantidadeUnidades)).toFixed(1)))));
            return notas;
        }
    }, {
        key: 'criarItensSelect',
        value: function criarItensSelect() {
            var itens = [];
            for (var i = 0; i < this.props.quantidadeUnidades; i++) {
                itens.push(_react2.default.createElement('option', { key: i, value: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 209
                    }
                }, i + 1));
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

            return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'minHeight': '100vh' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 250
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, this.props.nome), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, this.props.disciplina[1], ' - ', this.props.disciplina[3]), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                },
                floated: 'left',
                color: 'blue',
                content: 'Voltar',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            })), _react2.default.createElement(_routes.Link, { route: '/aluno/' + this.props.conta + '/turma/' + parseInt(this.props.turma[0], 16) + '/verAlunos', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                onClick: function onClick(e) {
                    return _this3.setState({ loading: true });
                },
                floated: 'right',
                content: 'Ver alunos',
                color: 'blue',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                }
            })))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }, 'Per\xEDodo:'), ' ', this.props.turma[6]), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                }
            }, 'ID: '), parseInt(this.props.turma[0], 16)), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, 'Hor\xE1rio:'), ' ', this.props.turma[3]), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 275
                }
            }, _react2.default.createElement('p', { style: { "textAlign": "left" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }, 'Sala:'), ' ', this.props.turma[4], _react2.default.createElement('span', { style: { "float": "right" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 278
                }
            }, 'Cota\xE7\xE3o: '), ' ', this.props.disciplina[6] / 100.0, ' LDC/ponto'))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281
                }
            }, 'Professor:'), ' ', this.props.professor[0]), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': 'orange', 'color': '#000000' }, fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 283
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 284
                }
            }, 'Atividades'))), this.renderUnidades())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }, _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, 'Notas')), this.mostrarNotas(), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 297
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { style: { 'backgroundColor': '#5386ED', 'color': '#000000' }, fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 299
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 300
                }
            }, 'Ludicoins'))), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                }
            }, _react2.default.createElement('b', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 306
                }
            }, 'Saldo dispon\xEDvel: '), ' ', this.props.ludicoins.toFixed(2), ' LDC'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 307
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 308
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 309
                }
            }, 'Unidade'), _react2.default.createElement('select', { defaultValue: 'DEFAULT', value: this.state.value, onChange: this.handleChange.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 310
                }
            }, _react2.default.createElement('option', { disabled: true, value: 'DEFAULT', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 311
                }
            }, ' -- selecione uma unidade -- '), this.criarItensSelect())), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 315
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 316
                }
            }, 'Quantidade de ludicoins'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.quantidadeLudicoins,
                onChange: function onChange(event) {
                    return _this3.setState({ quantidadeLudicoins: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 317
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 322
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 323
                }
            }, 'Gastar')))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FsdW5vL3R1cm1hLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJGb3JtIiwiSGVhZGVyIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGluayIsIlJvdXRlciIsImx1ZGlleCIsImx1ZGljb2luIiwiTGF5b3V0Iiwid2ViMyIsIlR1cm1hIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwidW5pZGFkZSIsInF1YW50aWRhZGVMdWRpY29pbnMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiY29udGFzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidW5pZGFkZXMiLCJ1dGlscyIsInRvV2VpIiwibWV0aG9kcyIsImdhc3Rhckx1ZGljb2lucyIsInNlbmQiLCJmcm9tIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJtZXNzYWdlIiwiaXRlbnMiLCJpbmRpY2UiLCJpIiwiYXRpdmlkYWRlc1BvclVuaWRhZGUiLCJhdGl2aWRhZGUiLCJoZWFkZXIiLCJhdGl2aWRhZGVzIiwibWV0YSIsInBhcnNlSW50IiwiZGVzY3JpcHRpb24iLCJub3RhcyIsInRvRml4ZWQiLCJmbHVpZCIsImNvbmNhdCIsInF1YW50aWRhZGVVbmlkYWRlcyIsInB1c2giLCJyZW5kZXJBdGl2aWRhZGVzIiwibm90YSIsImJvbnVzTHVkaWNvaW5VbmlkYWRlcyIsInNvbWF0b3Jpb1RvdGFsIiwibm90YU9maWNpYWwiLCJub3Rhc0Rhc1VuaWRhZGVzIiwiY29sb3Jpck5vdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5vbWUiLCJkaXNjaXBsaW5hIiwiY29udGEiLCJ0dXJtYSIsInByb2Zlc3NvciIsInJlbmRlclVuaWRhZGVzIiwibW9zdHJhck5vdGFzIiwibHVkaWNvaW5zIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImNyaWFySXRlbnNTZWxlY3QiLCJxdWVyeSIsImVuZGVyZWNvIiwibm9tZUVudGlkYWRlIiwiY2FsbCIsImVudGlkYWRlIiwiYmFsYW5jZU9mIiwidG9TdHJpbmciLCJsZW5ndGgiLCJzdWJzdHIiLCJ0dXJtYUlEIiwiaWQiLCJpc05hTiIsInJlcGVhdCIsIm9idGVyVHVybWEiLCJ0b051bWJlciIsIm9idGVyRGlzY2lwbGluYSIsIm9idGVyUHJvZmVzc29yIiwib2J0ZXJVbmlkYWRlc0RhVHVybWEiLCJhbGwiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJvYnRlclVuaWRhZGVUdXJtYSIsIm1hdHJpekF0aXZpZGFkZXNJRCIsImF0aXZpZGFkZXNJRCIsIm9idGVyQXRpdmlkYWRlIiwib2J0ZXJBdGl2aWRhZGVSZWFsaXphZGEiLCJvYnRlcklkVW5pZGFkZXNEYVR1cm1hIiwiaWRVbmlkYWRlcyIsIm5vdGFVbmlkYWRlIiwibm90YXNEYXNVbmlkYWRlc051bWJlciIsIm9idGVyQm9udXNMdWRpY29pbiIsImJvbnVzTHVkaWNvaW5OdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTSxBQUFRLEFBQU87O0FBQ2xELEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUdYLEE7Ozs7Ozs7Ozs7Ozs7Ozs4TSxBQW1JRjswQkFBUSxBQUNVLEFBQ2Q7cUJBRkksQUFFSyxBQUNUO3FCQUhJLEFBR0ssQUFDVDtpQyxBQUpJLEFBSWlCO0FBSmpCLEFBQ0osaUIsQUE0RUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FIeEIsQUFHUCxBQUFjLEFBQStCOztnREFIdEM7Z0RBQUE7dUNBTWtCLGNBQUEsQUFBSyxJQU52QixBQU1rQixBQUFTOztpQ0FBeEI7QUFOSCxrREFRSDs7d0NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxNQUFBLEFBQUssTUFBckMsQUFBWSxBQUErQixBQUMzQztBQUNBO3dDQUFBLEFBQVEsSUFBSSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLHFCQVZyQyxBQVVILEFBQVksQUFBaUQ7O2dEQVYxRDt3REFZRyxBQUFPLFFBQVAsQUFBZSxnQkFBZ0IsT0FBL0IsQUFBK0IsQUFBTyxJQUNwQyxNQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsTUFBQSxBQUFLLE1BRDNCLEFBQ0UsQUFBK0IsVUFBVSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLHFCQUR2RSxBQUMyQyxBQUFpRCxVQUQ1RixBQUVEOzBDQUNTLE9BZlgsQUFZRyxBQUVJLEFBQ0ksQUFBTztBQURYLEFBQ0YsaUNBSEY7O2lDQU1OOzt1Q0FBQSxBQUFPLFNBbEJKLEFBa0JILEFBQWdCO2dEQWxCYjtBQUFBOztpQ0FBQTtnREFBQTtnRUFvQkg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFwQjNCLEFBb0JILEFBQWMsQUFBb0I7O2lDQUNyQztBQUVEOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQXZCVCxBQXVCUCxBQUFjLEFBQVc7O2lDQXZCbEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7Ozt5Q0FyRU0sQSxTQUFTLEFBQ3RCO2dCQUFJLFFBQUosQUFBWSxBQUNaO2dCQUFJLFNBQUosQUFBYSxBQUNiO2lCQUFJLElBQUksSUFBUixBQUFZLEdBQUcsSUFBZixBQUFtQixTQUFuQixBQUE0QixLQUN4QjswQkFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLHFCQUR6QixBQUNJLEFBQVUsQUFBZ0M7QUFDOUMsa0JBQUksSUFBSSxLQUFSLEFBQVksR0FBRyxLQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcscUJBQTlCLEFBQW1CLEFBQWdDLFVBQW5ELEFBQTZELE1BQUksQUFDN0Q7b0JBQU07aUNBQ1UsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLFNBQXRCLEFBQTZCLElBRDNCLEFBQ0YsQUFBZ0MsQUFDNUM7bUNBQWMsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsU0FBdEIsQUFBNkIsSUFBdEMsQUFBUyxBQUFnQyxJQUF2RCxBQUFjLEFBQTZDLHFCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsU0FBdEIsQUFBNkIsSUFGMUYsQUFFNkQsQUFBZ0MsQUFDM0c7aURBQ0ksY0FBQSxVQUFNLE9BQU8sRUFBQyxTQUFkLEFBQWEsQUFBVTtzQ0FBdkI7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFESixBQUNJLFdBQWUsTUFBQyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sU0FBakIsQUFBd0IsSUFBeEIsQUFBMkIsS0FBNUIsQUFBaUMsT0FBakMsQUFBd0MsUUFMakQsQUFJVixBQUNtQixBQUFnRCxBQUd2RTsyQkFSSixBQUFrQixBQVFQLEFBR1g7QUFYa0IsQUFDZDs7d0JBVUksTUFBQSxBQUFNLE9BQWQsQUFBUSxBQUFhLEFBQ3hCO0FBRUQ7O2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7eUNBSU0sQUFDYjtnQkFBSSxXQUFKLEFBQWUsQUFDZjtpQkFBSSxJQUFJLElBQVIsQUFBWSxHQUFHLElBQUksS0FBQSxBQUFLLE1BQXhCLEFBQThCLG9CQUE5QixBQUFrRCxLQUFJLEFBQ2xEO3lCQUFBLEFBQVMscUJBQUssY0FBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsaUJBQUEsa0JBQUssY0FBQSxPQUFHLEtBQUgsQUFBUTtrQ0FBUjtvQ0FBQSxBQUFXO0FBQVg7bUNBQVcsY0FBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUE7O2tDQUFJO29DQUFKLEFBQUksQUFBTztBQUFQO0FBQUEsd0JBQUosQUFBYSxHQUEzQyxBQUFjLEFBQUssQUFBVyxBQUM5Qjt5QkFBQSxBQUFTLEtBQUssS0FBQSxBQUFLLGlCQUFuQixBQUFjLEFBQXNCLEFBQ3ZDO0FBRUQ7O21CQUFBLEFBQU8sQUFDVjs7OztvQyxBQUVXLFFBQVEsQSxNQUFNLEFBQ3RCO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsc0JBQVgsQUFBaUMsVUFBcEMsQUFBOEMsR0FBRyxBQUM3Qzt1Q0FBTyxjQUFBLFVBQU0sT0FBTixBQUFZO2tDQUFaO29DQUFBLEFBQXVCO0FBQXZCO2lCQUFBLEVBQVAsQUFBTyxBQUNWO0FBRkQsbUJBRU8sQUFDSDt1QkFBQSxBQUFPLEFBQ1Y7QUFDSjs7Ozt1Q0FFYyxBQUNYO2dCQUFJLFFBQUosQUFBWSxBQUNaO2dCQUFJLGlCQUFKLEFBQXFCLEFBQ3JCO2dCQUFJLGNBQUosQUFBa0IsQUFFbEI7O2lCQUFJLElBQUksSUFBUixBQUFZLEdBQUcsSUFBSSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsb0JBQTlCLEFBQWtELEtBQUksQUFDbEQ7OEJBQWUsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixLQUE3QixBQUFrQyxPQUFsQyxBQUEwQyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQTFFLEFBQStELEFBQTRCLEFBQzNGO2tDQUFBLEFBQWtCLEFBQ2xCO3NCQUFBLEFBQU0scUJBQUssY0FBQTs7a0NBQUE7b0NBQUEsQUFBSztBQUFMO0FBQUEsaUJBQUEsa0JBQUssY0FBQSxPQUFHLEtBQUgsQUFBUTtrQ0FBUjtvQ0FBQSxBQUFXO0FBQVg7bUNBQVcsY0FBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUE7O2tDQUFJO29DQUFKLEFBQUksQUFBTztBQUFQO0FBQUEsd0JBQUosQUFBYSxHQUFjLHVCQUFBLEFBQUssWUFBTCxBQUFpQixHQUFHLENBQUMsY0FBRCxBQUFjLE9BQWQsQUFBcUIsUUFBL0YsQUFBVyxBQUFLLEFBQVcsQUFBMkIsQUFBb0IsQUFBNkIsQUFDMUc7QUFFRDs7a0JBQUEsQUFBTSxxQkFBSyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSxhQUFBLGtCQUFLLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBOzs4QkFBSTtnQ0FBSixBQUFJO0FBQUE7QUFBQSxnQkFBYyxlQUFDLGtCQUFrQixRQUFRLEtBQUEsQUFBSyxNQUFoQyxBQUFDLEFBQXFDLHFCQUF0QyxBQUEyRCxRQUFoRyxBQUFXLEFBQUssQUFBRyxBQUFrQixBQUFtRSxBQUN4RzttQkFBQSxBQUFPLEFBQ1Y7Ozs7MkNBRWtCLEFBQ2Y7Z0JBQUksUUFBSixBQUFZLEFBQ1o7aUJBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFJLEtBQUEsQUFBSyxNQUF6QixBQUErQixvQkFBL0IsQUFBbUQsS0FBSyxBQUNuRDtzQkFBQSxBQUFNLHFCQUFLLGNBQUEsWUFBUSxLQUFSLEFBQWEsR0FBRyxPQUFoQixBQUF1QjtrQ0FBdkI7b0NBQUEsQUFBMkI7QUFBM0I7aUJBQUEsTUFBWCxBQUFXLEFBQTZCLEFBQzVDO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O3FDLEFBRVksT0FBTyxBQUNoQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFTLE1BQUEsQUFBTSxPQUE5QixBQUFjLEFBQXVCLEFBQ3hDOzs7O2lDQTZCUTt5QkFDTDs7bUNBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBRSxtQkFBRixBQUFxQixXQUFXLFNBQWhDLEFBQXlDLFdBQVcsYUFBaEUsQUFBWSxBQUFpRTs4QkFBN0U7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxjQUFhLE9BQU8sRUFBRSxTQUFGLEFBQVcsUUFBUSxVQUF0RCxBQUFtQyxBQUE2Qjs4QkFBaEU7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFEZCxBQUNJLEFBQWdCLEFBQVU7OzhCQUFBO2dDQUQ5QixBQUM4QixBQUMxQjtBQUQwQjtBQUFBLGdDQUMxQixjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFRO0FBQVI7QUFBQSwrQkFBUSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BQUwsQUFBVyxXQUFmLEFBQUksQUFBc0IsSUFBTyxZQUFBLEFBQUssTUFBTCxBQUFXLFdBQXBELEFBQVEsQUFBaUMsQUFBc0IsQUFDL0QscUJBQUEsQUFBQyw4QkFBSyxtQkFBaUIsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFFBQWxDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDO3lCQUNZLG9CQUFBOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUUsU0FBckIsQUFBSyxBQUFjLEFBQVc7QUFEM0MsQUFFSTt5QkFGSixBQUVZLEFBQ1I7dUJBSEosQUFHVSxBQUNOO3lCQUpKLEFBSVk7OzhCQUpaO2dDQUZKLEFBQ0EsQUFDSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFDLDhCQUFLLG1CQUFpQixLQUFBLEFBQUssTUFBdEIsQUFBNEIsb0JBQWUsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQXBCLEFBQVMsQUFBaUIsSUFBckUsQUFBMkMsQUFBOEIsTUFBL0U7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7eUJBQ1ksb0JBQUE7MkJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFyQixBQUFLLEFBQWMsQUFBVztBQUQzQyxBQUVJO3lCQUZKLEFBRVksQUFDUjt5QkFISixBQUdZLEFBQ1I7dUJBSkosQUFJVTs7OEJBSlY7Z0NBWlosQUFFSSxBQUFJLEFBU0EsQUFDSSxBQVFSO0FBUlE7QUFDSSxtQ0FPWixjQUFBOzs4QkFBQTtnQ0FBQSxBQUFHO0FBQUg7QUFBQSwrQkFBRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBSCxBQUFHLGdCQUFpQixVQUFBLEFBQUssTUFBTCxBQUFXLE1BcEJuQyxBQW9CSSxBQUFvQixBQUFpQixBQUNyQyxxQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFHO0FBQUg7QUFBQSwrQkFBRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBSCxBQUFHLEFBQVksa0JBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFwQixBQUFTLEFBQWlCLElBckI3QyxBQXFCSSxBQUFlLEFBQThCLEFBQzdDLHNCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFILEFBQUcsZ0JBQWlCLFVBQUEsQUFBSyxNQUFMLEFBQVcsTUF0Qm5DLEFBc0JJLEFBQW9CLEFBQWlCLEFBQ3JDLHFCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsT0FBRyxPQUFPLEVBQUMsYUFBWCxBQUFVLEFBQWM7OEJBQXhCO2dDQUFBLEFBQWlDO0FBQWpDOytCQUFpQyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBakMsQUFBaUMsVUFBYyxVQUFBLEFBQUssTUFBTCxBQUFXLE1BQTFELEFBQStDLEFBQWlCLEFBQzVELG9CQUFBLGNBQUEsVUFBTSxPQUFPLEVBQUMsU0FBZCxBQUFhLEFBQVU7OEJBQXZCO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLG9CQUFrQixVQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsS0FEeEMsQUFDNkMsT0ExQnpELEFBdUJJLEFBQ0ksQUFDSSxBQUlSLGlDQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUc7QUFBSDtBQUFBLCtCQUFHLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFILEFBQUcsZUFBbUIsVUFBQSxBQUFLLE1BQUwsQUFBVyxVQTdCckMsQUE2QkksQUFBc0IsQUFBcUIsQUFBTzs7OEJBQUE7Z0NBN0J0RCxBQTZCc0QsQUFDbEQ7QUFEa0Q7QUFBQSxnQ0FDakQsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxtQkFBRixBQUFxQixVQUFVLFNBQTVDLEFBQWEsQUFBd0MsYUFBYSxPQUFsRTs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQjs4QkFBQTtnQ0FBQTtBQUFBO2VBaENaLEFBOEJJLEFBQ0ksQUFDSSxBQU1QLHNCQXhDYixBQUNJLEFBQ0ksQUFzQ0ssQUFBSyxBQUdkLG9DQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlLGNBQWEsT0FBTyxFQUFFLFNBQUYsQUFBVyxRQUFRLFVBQXRELEFBQW1DLEFBQTZCOzhCQUFoRTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBUTtBQUFSO0FBQUEsK0JBQVEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRFosQUFDSSxBQUFRLEFBQ1AsZ0JBRkwsQUFFSyxBQUFLLEFBQ047OzhCQUFBO2dDQUhKLEFBR0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxtQkFBRixBQUFxQixXQUFXLFNBQTdDLEFBQWEsQUFBeUMsYUFBYSxPQUFuRTs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQjs4QkFBQTtnQ0FBQTtBQUFBO2VBTlosQUFJSSxBQUNJLEFBQ0ksQUFLSixnQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQTs7OEJBQ0k7Z0NBREosQUFDSSxBQUFLO0FBQUw7QUFBQSxnQ0FBSyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFHO0FBQUg7QUFBQSwrQkFBRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBSCxBQUFHLDBCQUEyQixVQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsUUFBbkQsQUFBOEIsQUFBNkIsSUFEcEUsQUFDUyxBQUNMLHlCQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNJLDRCQUFBLGNBQUEsWUFBUSxjQUFSLEFBQXNCLFdBQVcsT0FBTyxLQUFBLEFBQUssTUFBN0MsQUFBbUQsT0FBTyxVQUFVLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRGLEFBQW9FLEFBQXVCOzhCQUEzRjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFRLFVBQVIsTUFBaUIsT0FBakIsQUFBdUI7OEJBQXZCO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0MsdUNBTGpCLEFBQ0ksQUFFUSxBQUVLLEFBQUssQUFHbEIsc0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNENBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxxQkFBcUIsTUFBQSxBQUFNLE9BQXBELEFBQVMsQUFBYyxBQUFvQztBQUZ6RTs7OEJBQUE7Z0NBVlIsQUFRSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBZkosQUFlSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUE3RXhDLEFBQ0ksQUFDSSxBQUNJLEFBQ0ksQUEyQ0ksQUFDSSxBQVdRLEFBRUksQUFnQkksQUFXM0M7Ozs7O21IQWxVNEIsQTs7Ozs7aUNBQ25CO0Esd0NBQVEsTUFBQSxBQUFNLE1BQU0sQTs7dUNBQ0gsaUJBQUEsQUFBTyxRQUFQLEFBQWUsZUFBZixBQUE4QixBOztpQ0FBL0M7QTs7dUNBRWdCLG1CQUFBLEFBQVMsUUFBVCxBQUFpQixVQUFqQixBQUEyQixPQUFPLEEsQUFBbEM7O2lDQUFsQjtBLHNEQUNKOzs0Q0FBWSxVQUFaLEFBQVksQUFBVSxBQUN0QjtvQ0FBRyxVQUFBLEFBQVUsU0FBYixBQUFzQixJQUNsQixZQUFZLFVBQUEsQUFBVSxPQUFWLEFBQWlCLEdBQUksVUFBQSxBQUFVLFNBRC9DLEFBQ0ksQUFBWSxBQUF3QyxTQUVwRCxZQUFBLEFBQVksQUFDaEI7NENBQVksU0FBQSxBQUFTLFdBQXJCLEFBQVksQUFBb0IsQUFFNUI7O0EsMENBQVcsTUFBQSxBQUFNLE1BQVAsQUFBYSxHQUFiLEFBQWlCLFNBQWpCLEFBQTBCLEEsQUFFeEM7O29DQUFHLENBQUMsTUFBRCxBQUFDLEFBQU0sWUFBWSxRQUFBLEFBQVEsU0FBOUIsQUFBdUMsSUFDbkMsVUFBVSxPQUFPLElBQUEsQUFBSSxPQUFPLEtBQUssUUFBdkIsQUFBTyxBQUF3QixVQUF6QyxBQUFtRDs7O3VDQUdyQyxpQkFBQSxBQUFPLFFBQVAsQUFBZSxXQUFmLEFBQTBCLFNBQTFCLEFBQW1DLEE7O2lDQUFqRDtBLGtEQUNKOztzQ0FBQSxBQUFNLEtBQUssTUFBQSxBQUFNLEdBQWpCLEFBQVcsQUFBUzs7O3VDQUdHLGlCQUFBLEFBQU8sUUFBUCxBQUFlLGdCQUFnQixNQUEvQixBQUErQixBQUFNLElBQXJDLEFBQXlDLEE7O2lDQUE1RDtBLHVEQUNKOzsyQ0FBQSxBQUFXLEtBQUssV0FBQSxBQUFXLEdBQTNCLEFBQWdCLEFBQWM7Ozt1Q0FFTixpQkFBQSxBQUFPLFFBQVAsQUFBZSxlQUFlLE1BQTlCLEFBQThCLEFBQU0sSUFBcEMsQSxBQUF3Qzs7aUNBQTFEO0E7O3VDQUMyQixpQkFBQSxBQUFPLFFBQVAsQUFBZSxxQkFBZixBQUFvQyxTLEFBQXBDLEFBQTZDOztpQ0FBeEU7QTs7eURBRTJCLEFBQVEsVUFDL0IsU0FBTixBQUFNLEFBQVMscUJBQWYsQUFDSyxPQURMLEFBRUssSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDckI7MkNBQU8saUJBQUEsQUFBTyxRQUFQLEFBQWUsa0JBQWYsQUFBaUMsU0FBakMsQUFBMEMsT0FBakQsQUFBTyxBQUFpRCxBQUMzRDtBQUx3QixBQUM3QixBLGlDQUFBLENBRDZCOztpQ0FBM0I7QSwrREFRRjtBLCtDQUFlLEFBQ2YsQTtBLHVEQUVKLEEsQUFGMkI7O3FDQUUzQixBQUFRLElBQVIsQUFBWSxHQUFHLElBQWYsQUFBbUIsb0JBQW5CLEFBQXVDLEtBQUssQUFDeEM7bURBQWUsYUFBQSxBQUFhLE9BQU8sbUJBQW5DLEFBQWUsQUFBb0IsQUFBbUIsQUFDdEQ7eURBQUEsQUFBcUIsS0FBSyxtQkFBQSxBQUFtQixHQUE3QyxBQUFnRCxBQUNuRDs7Ozt5REFHd0IsQUFBUSxVQUN2QixTQUFTLGFBQWYsQUFBTSxBQUFzQixTQUE1QixBQUNLLE9BREwsQUFFSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNyQjsyQ0FBTyxpQkFBQSxBQUFPLFFBQVAsQUFBZSxlQUFlLGFBQTlCLEFBQThCLEFBQWEsUUFBbEQsQUFBTyxBQUFtRCxBQUM3RDtBQUxnQixBQUNyQixBLGlDQUFBLENBRHFCOztpQ0FBbkI7QTs7eURBUVksQUFBUSxVQUNoQixTQUFTLGFBQWYsQUFBTSxBQUFzQixTQUE1QixBQUNLLE9BREwsQUFFSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNyQjsyQ0FBTyxpQkFBQSxBQUFPLFFBQVAsQUFBZSx3QkFBd0IsYUFBdkMsQUFBdUMsQUFBYSxRQUFwRCxBQUE0RCxPQUFuRSxBQUFPLEFBQW1FLEFBQzdFO0FBTFMsQUFDZCxBLGlDQUFBLENBRGM7O2lDQUFkO0Esa0RBUUo7O3NDQUFBLEFBQU0sSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUNuQjs0Q0FBQSxBQUFRLEtBQUssUUFBQSxBQUFRLEdBQXJCLEFBQWEsQUFBVyxBQUMzQjtBQUZEOzs7dUNBSXlCLGlCQUFBLEFBQU8sUUFBUCxBQUFlLHVCQUFmLEFBQXNDLFMsQUFBdEMsQUFBK0M7O2lDQUFsRTtBOzt5REFFdUIsQUFBUSxVQUMzQixTQUFTLFdBQWYsQUFBTSxBQUFvQixTQUExQixBQUNLLE9BREwsQUFFSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNyQjsyQ0FBTyxpQkFBQSxBQUFPLFFBQVAsQUFBZSxZQUFmLEFBQTJCLE9BQU8sV0FBbEMsQUFBa0MsQUFBVyxRQUFwRCxBQUFPLEFBQXFELEFBQy9EO0FBSkwsQSxBQUR5QixpQ0FDekIsQ0FEeUI7O2lDQUF6QjtBLDZEQVFBO0EseURBQXlCLEEsQUFDN0I7O2lEQUFBLEFBQWlCLElBQUksVUFBQSxBQUFDLFNBQVksQUFDOUI7MkRBQUEsQUFBdUIsS0FBSyxRQUE1QixBQUE0QixBQUFRLEFBQ3ZDO0FBRkQ7Ozt5REFJa0MsQUFBUSxVQUNoQyxTQUFTLFdBQWYsQUFBTSxBQUFvQixTQUExQixBQUNLLE9BREwsQUFFSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNyQjsyQ0FBTyxpQkFBQSxBQUFPLFFBQVAsQUFBZSxtQkFBbUIsV0FBbEMsQUFBa0MsQUFBVyxRQUE3QyxBQUFxRCxPQUE1RCxBQUFPLEFBQTRELEFBQ3RFO0FBTHlCLEFBQzlCLEEsaUNBQUEsQ0FEOEI7O2lDQUE5QjtBLGtFQU9BO0Esc0RBQXNCLEEsQUFDMUI7O3NEQUFBLEFBQXNCLElBQUksVUFBQSxBQUFDLFNBQVksQUFDbkM7d0RBQUEsQUFBb0IsS0FBSyxRQUF6QixBQUF5QixBQUFRLEFBQ3BDO0FBRkQsQUFJQTs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FTTyxBQUNJLEFBQ1A7MENBRkcsQUFFRyxBQUNOOzJDQUhHLEFBR0ksQUFDUDtnREFKRyxBQUlTLEFBQ1o7K0NBTEcsQUFLUSxBQUNYO2dEQU5HLEFBTVMsQUFDWjt3REFBb0IsbUJBUGpCLEFBT2lCLEFBQW1CLEFBQ3ZDOzBEQVJHLEFBUW1CLEFBQ3RCOzJDQVRHLEFBU0ksQUFDUDsrQ0FBVyxZQVZSLEFBVWtCLEFBQ3JCOzhDQVhHLEFBV08sQUFDVjtzREFaRyxBQVllLEFBQ2xCOzJEQWJHLEFBYW9CLEE7QUFicEIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5IUSxBOztBQXNVbkIsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ0dXJtYS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvd2FsYW4vd29ya3NwYWNlL2x1ZGljb2luIn0=