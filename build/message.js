webpackJsonp([6,4],{

/***/ 0:
/*!*********************!*\
  !*** multi message ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/baidu/Desktop/Demo/ReactSPA/app/views/Message.jsx */220);


/***/ },

/***/ 220:
/*!*******************************!*\
  !*** ./app/views/Message.jsx ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Message = function (_React$Component) {
		_inherits(Message, _React$Component);
	
		function Message() {
			_classCallCheck(this, Message);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Message).apply(this, arguments));
		}
	
		_createClass(Message, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h3',
					null,
					'Message ',
					this.props.params.id
				);
			}
		}]);
	
		return Message;
	}(_react2.default.Component);
	
	exports.default = Message;

/***/ }

});
//# sourceMappingURL=message.js.map