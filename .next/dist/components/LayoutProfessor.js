'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _MenuVertical = require('./MenuVertical');

var _MenuVertical2 = _interopRequireDefault(_MenuVertical);

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/walan/workspace/ludicoin/components/LayoutProfessor.js';

exports.default = function (props) {

    return _react2.default.createElement('div', { style: { 'backgroundColor': '#439cef', 'color': '#000000', 'min-height': '100vh' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_Layout2.default, { carregando: props.loading, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_MenuVertical2.default, { endereco: props.endereco, carregar: props.action, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('div', { className: 'ui message', style: { 'width': '100%', 'heigth': '100%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, props.children))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0UHJvZmVzc29yLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR3JpZCIsIk1lbnVWZXJ0aWNhbCIsIkxheW91dCIsInByb3BzIiwibG9hZGluZyIsImVuZGVyZWNvIiwiYWN0aW9uIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZLEFBRW5COzs7Ozs7OztrQkFBZSxpQkFBUyxBQUVwQjs7MkJBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBRSxtQkFBRixBQUFxQixXQUFXLFNBQWhDLEFBQXlDLFdBQVcsY0FBaEUsQUFBWSxBQUFrRTtzQkFBOUU7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQyxrQ0FBTyxZQUFZLE1BQXBCLEFBQTBCO3NCQUExQjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUEsdUJBQ0MsY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyx3Q0FBYSxVQUFVLE1BQXhCLEFBQThCLFVBQVUsVUFBVSxNQUFsRCxBQUF3RDtzQkFBeEQ7d0JBRlIsQUFDSSxBQUNJLEFBR0o7QUFISTt5QkFHSCxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxjQUFhLE9BQU8sRUFBRSxTQUFGLEFBQVcsUUFBUSxVQUF0RCxBQUFtQyxBQUE2QjtzQkFBaEU7d0JBQUEsQUFDSztBQURMO2FBVmhCLEFBQ0ksQUFDSSxBQUNBLEFBQ0EsQUFLSSxBQUNJLEFBQ1csQUFTOUI7QUF0QkQiLCJmaWxlIjoiTGF5b3V0UHJvZmVzc29yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy93YWxhbi93b3Jrc3BhY2UvbHVkaWNvaW4ifQ==