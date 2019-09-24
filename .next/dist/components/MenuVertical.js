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

var _jsxFileName = '/Users/walan/workspace/ludicoin/components/MenuVertical.js';


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

      return _react2.default.createElement(_semanticUiReact.Menu, { color: 'teal', inverted: true, vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { header: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('center', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Menu')), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'inicio', active: activeItem === 'inicio', onClick: function onClick(e) {
          return _this2.onClick(e, 0);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'In\xEDcio'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'disciplinas', active: activeItem === 'disciplinas', onClick: function onClick(e) {
          return _this2.onClick(e, 1);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Disciplinas'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'turmas', active: activeItem === 'turmas', onClick: function onClick(e) {
          return _this2.onClick(e, 2);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Turmas'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'professores', active: activeItem === 'professores', onClick: function onClick(e) {
          return _this2.onClick(e, 3);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Professores'));
    }
  }]);

  return MenuVertical;
}(_react.Component);

exports.default = MenuVertical;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudVZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJMYWJlbCIsIk1lbnUiLCJCdXR0b24iLCJMaW5rIiwiUm91dGVyIiwiTWVudVZlcnRpY2FsIiwic3RhdGUiLCJhY3RpdmVJdGVtIiwiZXZlbnQiLCJpbmRpY2UiLCJjb25zb2xlIiwibG9nIiwicm90YSIsInByb3BzIiwiZW5kZXJlY28iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY2FycmVnYXIiLCJjYWxsIiwicHVzaFJvdXRlIiwib25DbGljayIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFPLEFBQU07O0FBQzdCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0lBR1IsQTs7Ozs7Ozs7Ozs7Ozs7d05BR25CLEEsUUFBUSxFQUFFLFksQUFBRixBQUFjOzs7Ozs0QkFFZCxBLE9BQU8sQSxRQUFRLEFBQ3JCO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtVQUFJLFlBQUosQUFDQTtVQUFHLFVBQUgsQUFBYSxHQUNYLHVCQUFxQixLQUFBLEFBQUssTUFENUIsQUFDRSxBQUFnQyxjQUM3QixJQUFJLFVBQUosQUFBYyxHQUNqQix1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFdBRDdCLHlCQUVBLElBQUksVUFBSixBQUFjLEdBQ2pCLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsV0FEN0Isb0JBRUEsSUFBSSxVQUFKLEFBQWMsR0FDakIsdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxXQUVsQzs7VUFBSSxRQUFRLE9BQUEsQUFBTyxTQUFuQixBQUE0QixVQUMxQixLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsQUFFdEI7O3FCQUFBLEFBQU8sVUFBUCxBQUFpQixBQUNsQjs7Ozs2QkFFUTttQkFBQTs7VUFBQSxBQUNDLGFBQWUsS0FEaEIsQUFDcUIsTUFEckIsQUFDQyxBQUVSOzs2QkFDRSxBQUFDLHVDQUFLLE9BQU4sQUFBYSxRQUFRLFVBQXJCLE1BQThCLFVBQTlCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFFBQVg7b0JBQUE7c0JBQUEsQUFBa0I7QUFBbEI7eUJBQWtCLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURwQixBQUNFLEFBQWtCLEFBRWQsMEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQixVQUFTLFFBQVEsZUFBakMsQUFBZ0QsVUFBVSxTQUFTLG9CQUFBO2lCQUFLLE9BQUEsQUFBSyxRQUFMLEFBQWEsR0FBbEIsQUFBSyxBQUFnQjtBQUF4RjtvQkFBQTtzQkFBQTtBQUFBO1NBSE4sQUFHTSxBQUlGLDhCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsZUFBYyxRQUFRLGVBQXRDLEFBQXFELGVBQWUsU0FBUyxvQkFBQTtpQkFBSyxPQUFBLEFBQUssUUFBTCxBQUFhLEdBQWxCLEFBQUssQUFBZ0I7QUFBbEc7b0JBQUE7c0JBQUE7QUFBQTtTQVBKLEFBT0ksQUFJQSxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLFVBQVMsUUFBUSxlQUFqQyxBQUFnRCxVQUFVLFNBQVMsb0JBQUE7aUJBQUssT0FBQSxBQUFLLFFBQUwsQUFBYSxHQUFsQixBQUFLLEFBQWdCO0FBQXhGO29CQUFBO3NCQUFBO0FBQUE7U0FYSixBQVdJLEFBSUEsMkJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQixlQUFjLFFBQVEsZUFBdEMsQUFBcUQsZUFBZSxTQUFTLG9CQUFBO2lCQUFLLE9BQUEsQUFBSyxRQUFMLEFBQWEsR0FBbEIsQUFBSyxBQUFnQjtBQUFsRztvQkFBQTtzQkFBQTtBQUFBO1NBaEJOLEFBQ0UsQUFlSSxBQU1QOzs7OztBQWhEdUMsQTs7a0JBQXJCLEEiLCJmaWxlIjoiTWVudVZlcnRpY2FsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==