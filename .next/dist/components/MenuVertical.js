'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuVertical = function (_Component) {
  (0, _inherits3.default)(MenuVertical, _Component);

  function MenuVertical() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuVertical.__proto__ || (0, _getPrototypeOf2.default)(MenuVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuVertical, [{
    key: 'onClick',
    value: function onClick(event, indice) {
      console.log('Oi');
      var rota = void 0;
      if (indice == 0) rota = '/professor/' + this.props.endereco;else if (indice == 1) rota = '/professor/' + this.props.endereco + '/disciplinas/show';else if (indice == 2) rota = '/professor/' + this.props.endereco + '/turmas/show';else if (indice == 3) rota = '/professor/' + this.props.endereco + '/professores/show';

      if (rota != window.location.pathname) this.props.carregar.call();

      _routes.Router.pushRoute(rota);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeItem = this.state.activeItem;

      return _react2.default.createElement(_semanticUiReact.Menu, { color: 'teal', inverted: true, vertical: true }, _react2.default.createElement(_semanticUiReact.Menu.Item, { header: true }, _react2.default.createElement('center', null, 'Menu')), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'inicio', active: activeItem === 'inicio', onClick: function onClick(e) {
          return _this2.onClick(e, 0);
        } }, 'In\xEDcio'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'disciplinas', active: activeItem === 'disciplinas', onClick: function onClick(e) {
          return _this2.onClick(e, 1);
        } }, 'Disciplinas'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'turmas', active: activeItem === 'turmas', onClick: function onClick(e) {
          return _this2.onClick(e, 2);
        } }, 'Turmas'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'professores', active: activeItem === 'professores', onClick: function onClick(e) {
          return _this2.onClick(e, 3);
        } }, 'Professores'));
    }
  }]);

  return MenuVertical;
}(_react.Component);

exports.default = MenuVertical;