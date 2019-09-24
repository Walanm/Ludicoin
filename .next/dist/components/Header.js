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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/walan/workspace/ludicoin/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'home' }, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var color = this.props.color;
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '0px' }, color: 'blue', inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Ludicoin'))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'In\xEDcio'))));
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  color: _propTypes2.default.string
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkxpbmsiLCJIZWFkZXIiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJlIiwibmFtZSIsInNldFN0YXRlIiwiY29sb3IiLCJwcm9wcyIsIm1hcmdpblRvcCIsInByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7NE0sQUFLSixRQUFRLEVBQUUsWUFBRixBQUFjLEEsZ0IsQUFFdEIsa0JBQWtCLFVBQUEsQUFBQyxVQUFEO1VBQUEsQUFBTSxhQUFOLEFBQU07YUFBVyxNQUFBLEFBQUssU0FBUyxFQUFFLFlBQWpDLEFBQWlCLEFBQWMsQUFBYztBOzs7Ozs2QkFFdEQ7VUFBQSxBQUNDLFFBQVUsS0FEWCxBQUNnQixNQURoQixBQUNDO1VBREQsQUFFQyxhQUFlLEtBRmhCLEFBRXFCLE1BRnJCLEFBRUMsQUFFUjs7NkJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWEsU0FBUyxPQUFuQyxBQUEwQyxRQUFRLFVBQWxEO29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBLEFBQW9CO0FBQXBCO3lCQUFvQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGeEIsQUFDRSxBQUNFLEFBQW9CLEFBR3RCLCtCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBUlIsQUFDRSxBQUtFLEFBQ0UsQUFDRSxBQU1UOzs7OztBLEFBM0JrQjs7QSxBQUFmLE8sQUFDRztTQUNFLG9CQURVLEFBQ0EsQSxBQTRCckI7QUE3QnFCLEFBQ2pCOztrQkE0QkosQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3dhbGFuL3dvcmtzcGFjZS9sdWRpY29pbiJ9