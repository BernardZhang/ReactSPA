webpackJsonp([5,3],{

/***/ 0:
/*!*******************!*\
  !*** multi inbox ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/baidu/Desktop/Demo/ReactSPA/app/views/Inbox.jsx */217);


/***/ },

/***/ 217:
/*!*****************************!*\
  !*** ./app/views/Inbox.jsx ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Notes = __webpack_require__(/*! ../components/Notes */ 218);
	
	var _Notes2 = _interopRequireDefault(_Notes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import uuid from 'node-uuid';
	
	var Inbox = function (_React$Component) {
		_inherits(Inbox, _React$Component);
	
		function Inbox(props) {
			var _arguments = arguments;
	
			_classCallCheck(this, Inbox);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Inbox).call(this));
	
			_this.onEdit = function (id, task) {
				if (task === '') {
					return;
				}
				console.log('Inbox: onEdit', _arguments, _this);
				var notes = _this.state.notes.map(function (note) {
					if (note.id === id) {
						note.task = task;
					}
	
					return note;
				});
				_this.setState({ notes: notes });
			};
	
			_this.onDelete = function (id) {
				console.log('Inbox: onDelete', _arguments, _this);
				_this.setState({
					notes: _this.state.notes.filter(function (note) {
						return note.id !== id;
					})
				});
			};
	
			_this.addNote = function (e) {
				_this.setState({
					notes: [].concat(_toConsumableArray(_this.state.notes), [{
						id: _this.state.notes.length + 1,
						task: 'New Task'
					}])
				});
			};
	
			_this.state = {
				notes: [{
					id: 1,
					task: 'Learn React'
				}, {
					id: 2,
					task: 'Learn Webpack'
				}]
			};
			return _this;
		}
	
		_createClass(Inbox, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						'Inbox'
					),
					_react2.default.createElement(
						'button',
						{ onClick: this.addNote },
						'+'
					),
					_react2.default.createElement(_Notes2.default, { notes: this.state.notes, onEdit: this.onEdit, onDelete: this.onDelete })
				);
			}
		}]);
	
		return Inbox;
	}(_react2.default.Component);
	
	exports.default = Inbox;

/***/ },

/***/ 218:
/*!**********************************!*\
  !*** ./app/components/Notes.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Note = __webpack_require__(/*! ./Note.jsx */ 219);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	    var notes = _ref.notes;
	    var onEdit = _ref.onEdit;
	    var onDelete = _ref.onDelete;
	
	    return _react2.default.createElement(
	        'ul',
	        null,
	        notes.map(function (note) {
	            return _react2.default.createElement(
	                'li',
	                { key: note.id },
	                _react2.default.createElement(_Note2.default, {
	                    task: note.task,
	                    onEdit: onEdit.bind(null, note.id),
	                    onDelete: onDelete.bind(null, note.id) })
	            );
	        })
	    );
	};

/***/ },

/***/ 219:
/*!*********************************!*\
  !*** ./app/components/Note.jsx ***!
  \*********************************/
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
	
	var Note = function (_React$Component) {
		_inherits(Note, _React$Component);
	
		function Note(props) {
			_classCallCheck(this, Note);
	
			debugger;
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Note).call(this, props));
	
			_this.renderNote = function () {
				return _react2.default.createElement(
					'div',
					{ onClick: _this.edit },
					_react2.default.createElement(
						'span',
						null,
						_this.props.task
					),
					_this.props.onDelete ? _this.renderDelete() : null
				);
			};
	
			_this.renderEdit = function () {
				return _react2.default.createElement('input', { type: 'text',
					autoFocus: true,
					placeholder: _this.props.task,
					onBlur: _this.finishEdit,
					onKeyPress: _this.checkEnter });
			};
	
			_this.renderDelete = function () {
				return _react2.default.createElement(
					'button',
					{ onClick: _this.props.onDelete },
					'x'
				);
			};
	
			_this.edit = function () {
				_this.setState({
					editing: true
				});
			};
	
			_this.checkEnter = function (e) {
				debugger;
				if (e.key === 'Enter') {
					_this.finishEdit(e);
				}
			};
	
			_this.finishEdit = function (e) {
				debugger;
				if (_this.props.onEdit) {
					_this.props.onEdit(e.target.value);
				}
	
				_this.setState({
					editing: false
				});
			};
	
			_this.state = {
				editing: false
			};
			return _this;
		}
	
		_createClass(Note, [{
			key: 'render',
			value: function render() {
				if (this.state.editing) {
					return this.renderEdit();
				}
	
				return this.renderNote();
			}
		}]);
	
		return Note;
	}(_react2.default.Component);
	
	exports.default = Note;

/***/ }

});
//# sourceMappingURL=inbox.js.map