module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _nav = __webpack_require__(2);

	var _nav2 = _interopRequireDefault(_nav);

	var _iosNew = __webpack_require__(3);

	var _iosNew2 = _interopRequireDefault(_iosNew);

	var _iosExisting = __webpack_require__(4);

	var _iosExisting2 = _interopRequireDefault(_iosExisting);

	var _androidNew = __webpack_require__(5);

	var _androidNew2 = _interopRequireDefault(_androidNew);

	var _androidExisting = __webpack_require__(6);

	var _androidExisting2 = _interopRequireDefault(_androidExisting);

	var _jsNew = __webpack_require__(7);

	var _jsNew2 = _interopRequireDefault(_jsNew);

	var _jsExisting = __webpack_require__(8);

	var _jsExisting2 = _interopRequireDefault(_jsExisting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var pages = {
	  ios: {
	    new: _iosNew2.default,
	    existing: _iosExisting2.default
	  },
	  android: {
	    new: _androidNew2.default,
	    existing: _androidExisting2.default
	  },
	  js: {
	    new: _jsNew2.default,
	    existing: _jsExisting2.default
	  }
	};

	var _class = function (_React$Component) {
	  _inherits(_class, _React$Component);

	  function _class(props) {
	    _classCallCheck(this, _class);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, props));

	    var sdk = props.sdk;
	    var guide = props.guide;

	    if (!sdk && guide) throw Error('[skygear-getstarted] Error: SDK not specified');
	    if (sdk && !pages[sdk]) throw Error('[skygear-getstarted] No such SDK: ' + sdk);
	    if (guide && !pages[sdk][guide]) throw Error('[skygear-getstarted] No such guide: ' + guide);
	    _this.state = props;
	    return _this;
	  }

	  _createClass(_class, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(this.template, this.state);
	    }
	  }, {
	    key: 'template',
	    get: function get() {
	      var _state = this.state;
	      var sdk = _state.sdk;
	      var guide = _state.guide;

	      if (pages[sdk] && pages[sdk][guide]) {
	        return pages[sdk][guide];
	      }
	      return _nav2.default;
	    }
	  }]);

	  return _class;
	}(_react2.default.Component);

	exports.default = _class;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	module.exports= function (locals) {
	  return function() {
	    var tags = [];
	    tags.push(React.DOM.h3.apply(React.DOM, [ {} ].concat(function() {
	      return [ "GET STARTED NOW!" ];
	    }.call(this))));
	    if (1 === tags.length) return tags.pop();
	    tags.unshift({});
	    return React.DOM.div.apply(React.DOM, tags);
	  }.call(this);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	module.exports= function (locals) {  var sdk = "sdk" in locals ? locals.sdk : jade_globals_sdk;
	  var guide = "guide" in locals ? locals.guide : jade_globals_guide;
	  return function() {
	    var tags = [];
	    tags.push(React.DOM.h2.apply(React.DOM, [ {} ].concat(function() {
	      return [ "Guide for " + sdk + ": " + guide + " project." ];
	    }.call(this))));
	    if (1 === tags.length) return tags.pop();
	    tags.unshift({});
	    return React.DOM.div.apply(React.DOM, tags);
	  }.call(this);
	}

/***/ },
/* 4 */
3,
/* 5 */
3,
/* 6 */
3,
/* 7 */
3,
/* 8 */
3
/******/ ])));