/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(5);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var cors = __webpack_require__(13);
app.use(cors());

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.send((0, _renderer2.default)(req));
});
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _Home = __webpack_require__(7);

var _Home2 = _interopRequireDefault(_Home);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { context: {}, location: req.path },
    _react2.default.createElement(_Routes2.default, null)
  ));
  return '\n    <html>\n      <head></head>\n      <body>\n        <div id="root">' + content + ' </div>\n        <script src="bundle.js"></script>\n      </body>\n    </html>';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'I\'m the home component fdfd'
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return console.log('hi therefdfdf');
        } },
      'Press Me'
    )
  );
};
exports.default = Home;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Login = __webpack_require__(9);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(10);

var _Register2 = _interopRequireDefault(_Register);

var _AddTask = __webpack_require__(11);

var _AddTask2 = _interopRequireDefault(_AddTask);

var _Tasks = __webpack_require__(12);

var _Tasks2 = _interopRequireDefault(_Tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Login', component: _Login2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _Register2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/addTask', component: _AddTask2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/tasks', component: _Tasks2.default })
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ errors: [] });
      var user = {
        email: _this.state.email,
        password: _this.state.password
      };
      _axios2.default.post('http://localhost:4000/login', _extends({}, user)).then(function (res) {
        if (res.message) {
          _this.setState({ errors: [{ 'messge': res.message }] });
        } else {
          console.log(res);
          console.log(res.data);
          localStorage.setItem('token', res.data.token);
          _this.props.history.push('/tasks');
        }
      }).catch(function (err) {
        console.log(err);
        _this.setState({ errors: [{ 'message': 'Something went wrong please check email and password again' }] });
      });
    };

    _this.displayErrors = function (errors) {
      return errors.map(function (error, i) {
        return _react2.default.createElement(
          'p',
          { key: i },
          error.message
        );
      });
    };

    _this.state = {
      email: '',
      password: '',
      errors: []
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var errors = this.state.errors;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Login'
        ),
        _react2.default.createElement(
          'form',
          { className: 'center-align', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            _react2.default.createElement(
              'label',
              null,
              'Email'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'email', onChange: this.handleChange })
          ),
          _react2.default.createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            _react2.default.createElement(
              'label',
              null,
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password', name: 'password', onChange: this.handleChange })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', style: { background: '#53b2fe',
                padding: '10px',
                border: '0',
                'borderRadius': '5px' } },
            'Login'
          )
        ),
        errors.length > 0 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Error'
          ),
          errors[0].message
        ),
        _react2.default.createElement(
          'div',
          null,
          'New user? ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/register' },
            'Register'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

;
exports.default = (0, _reactRouterDom.withRouter)(Login);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.isFormValid = function () {
      var errors = [],
          error = {};
      if (_this.isFormEmpty(_this.state)) {
        error = { message: "Fill in all fields" };
        _this.setState({ errors: errors.concat(error) });
        return false;
      } else if (!_this.isPasswordValid(_this.state)) {
        error = { message: "Password is invalid" };
        _this.setState({ errors: errors.concat(error) });
        return false;
      } else {
        return true;
      }
    };

    _this.isPasswordValid = function (_ref) {
      var password = _ref.password,
          passwordConfirmation = _ref.passwordConfirmation;

      if (password !== passwordConfirmation) {
        return false;
      } else {
        return true;
      }
    };

    _this.isFormEmpty = function (_ref2) {
      var name = _ref2.name,
          email = _ref2.email,
          password = _ref2.password,
          passwordConfirmation = _ref2.passwordConfirmation;

      return !name.length || !email.length || !password.length || !passwordConfirmation.length;
    };

    _this.displayErrors = function (errors) {
      return errors.map(function (error, i) {
        return _react2.default.createElement(
          'p',
          { key: i },
          error.message
        );
      });
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      console.log(_this.isFormValid());
      if (_this.isFormValid()) {
        _this.setState({ errors: [] });
        var user = {
          username: _this.state.name,
          email: _this.state.email,
          password: _this.state.password
        };
        _axios2.default.post('http://localhost:4000/register', _extends({}, user)).then(function (res) {
          if (res.message) {
            console.log('here');
            _this.setState({ errors: [{ 'messge': res.message }] });
          } else {
            localStorage.setItem('token', res.data.token);
            _this.props.history.push('/tasks');
          }
        }).catch(function (err) {
          _this.setState({ errors: [{ message: err.response.data.message }] });
        });
      }
    };

    _this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: []
    };
    return _this;
  }

  _createClass(Register, [{
    key: 'render',
    value: function render() {
      var errors = this.state.errors;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Register'
        ),
        _react2.default.createElement(
          'form',
          { className: 'center-align', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            _react2.default.createElement(
              'label',
              null,
              'Name'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'name', onChange: this.handleChange, required: true })
          ),
          _react2.default.createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            _react2.default.createElement(
              'label',
              null,
              'Email'
            ),
            _react2.default.createElement('input', { type: 'email', name: 'email', onChange: this.handleChange, required: true })
          ),
          _react2.default.createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            _react2.default.createElement(
              'label',
              null,
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password', name: 'password', onChange: this.handleChange, required: true })
          ),
          _react2.default.createElement(
            'div',
            { style: { 'marginBottom': '20px' } },
            _react2.default.createElement(
              'label',
              null,
              'Confirm Password'
            ),
            _react2.default.createElement('input', { type: 'password', name: 'passwordConfirmation', onChange: this.handleChange, required: true })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', style: { background: '#53b2fe',
                padding: '10px',
                border: '0',
                'borderRadius': '5px' } },
            'Register'
          )
        ),
        errors.length > 0 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Error'
          ),
          this.displayErrors(errors)
        ),
        _react2.default.createElement(
          'div',
          null,
          'Already a user? ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login' },
            'Login'
          )
        )
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

;
exports.default = (0, _reactRouterDom.withRouter)(Register);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(1);

var _NavBar = __webpack_require__(14);

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = ['business', 'consultant', 'IT', 'leisure', 'Fitness'];

var AddTask = function (_React$Component) {
  _inherits(AddTask, _React$Component);

  function AddTask(props) {
    _classCallCheck(this, AddTask);

    var _this = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

    _this.handleClick = function (event) {
      var ts = new Date(Date.now());
      _this.setState(_defineProperty({}, event.target.name, ts));
    };

    _this.handleChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var token = localStorage.getItem('token');
      var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
      var data = _this.state;
      _axios2.default.post('http://localhost:4000/addTask', _extends({}, data), {
        headers: headers
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.state = {
      name: '',
      type: '',
      startTime: null,
      endTime: null,
      isAuth: false,
      isLoading: true
    };
    return _this;
  }

  _createClass(AddTask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var token = localStorage.getItem('token');
      this.setState({
        isAuth: token ? true : false,
        isLoading: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isAuth = _state.isAuth,
          isLoading = _state.isLoading;

      if (isLoading) {
        return null;
      }
      if (!isAuth) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: {
            pathname: '/login'
          } });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_NavBar2.default, null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              ' Add Task'
            ),
            _react2.default.createElement(
              'form',
              { className: 'center-align', onSubmit: this.handleSubmit },
              _react2.default.createElement(
                'div',
                { style: { 'marginBottom': '20px' } },
                _react2.default.createElement(
                  'label',
                  null,
                  'Task Name'
                ),
                _react2.default.createElement('input', { type: 'text', name: 'name', onChange: this.handleChange })
              ),
              _react2.default.createElement(
                'div',
                { style: { 'marginBottom': '20px' } },
                _react2.default.createElement(
                  'label',
                  null,
                  'Type'
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'type', onChange: this.handleChange },
                  types.map(function (type, key) {
                    return _react2.default.createElement(
                      'option',
                      { value: type, key: 'type-' + key },
                      type
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'button',
                { style: { display: 'block', 'marginBottom': '20px' }, type: 'button', name: 'startTime', onClick: this.handleClick },
                'Start Time'
              ),
              _react2.default.createElement(
                'button',
                { style: { display: 'block', 'marginBottom': '20px' }, type: 'button', name: 'endTime', onClick: this.handleClick },
                'End Time'
              ),
              _react2.default.createElement(
                'button',
                { style: { background: '#53b2fe',
                    padding: '10px',
                    border: '0',
                    'borderRadius': '5px' }, type: 'submit' },
                'Submit'
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { 'marginTop': '20px' } },
              'To view all tasks Go to ',
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/tasks' },
                'See All Tasks'
              )
            )
          )
        );
      }
    }
  }]);

  return AddTask;
}(_react2.default.Component);

;
exports.default = AddTask;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _NavBar = __webpack_require__(14);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableHeads = [{ name: 'name', colspan: 2 }, { name: 'type', colspan: 1 }, { name: 'startTime', colspan: '1' }, { name: 'endTime', colspan: 1 }];
var TaskElement = function TaskElement(_ref) {
  var task = _ref.task;

  return _react2.default.createElement(
    'tr',
    { key: task._id },
    _react2.default.createElement(
      'td',
      { colSpan: '2', style: { border: '1px solid #ddd' } },
      task.name
    ),
    _react2.default.createElement(
      'td',
      { colSpan: '1', style: { border: '1px solid #ddd' } },
      task.type
    ),
    _react2.default.createElement(
      'td',
      { colSpan: '1', style: { border: '1px solid #ddd' } },
      task.startTime
    ),
    _react2.default.createElement(
      'td',
      { colSpan: '1', style: { border: '1px solid #ddd' } },
      task.endTime
    )
  );
};

var Tasks = function (_React$Component) {
  _inherits(Tasks, _React$Component);

  function Tasks(props) {
    _classCallCheck(this, Tasks);

    // const token = localStorage.getItem('token');
    // console.log(token);
    var _this = _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).call(this, props));

    _this.state = {
      tasks: [],
      isAuth: false,
      isLoading: true
    };
    _this._isMounted = false;
    return _this;
  }

  _createClass(Tasks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._isMounted = true;
      var token = localStorage.getItem('token');
      this.setState({
        isAuth: token ? true : false,
        isLoading: false
      });
      if (this._isMounted) {
        _axios2.default.get('http://localhost:4000/tasks', { headers: { "Authorization": 'Bearer ' + token } }).then(function (res) {
          var tasks = res.data;
          _this2.setState({ tasks: tasks });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          tasks = _state.tasks,
          isAuth = _state.isAuth,
          isLoading = _state.isLoading;

      if (isLoading) {
        return null;
      }
      if (!isAuth) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: {
            pathname: '/login'
          } });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_NavBar2.default, null),
          _react2.default.createElement(
            'h3',
            null,
            'All Tasks'
          ),
          _react2.default.createElement(
            'table',
            { style: { width: '100%', 'borderCollapse': 'collapse' } },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                tableHeads.map(function (tableHead, index) {
                  return _react2.default.createElement(
                    'th',
                    { colSpan: tableHead.colspan, style: { border: '1px solid #ddd' }, key: 'tableHead-' + index + '}' },
                    tableHead.name
                  );
                })
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              tasks.map(function (task, index) {
                return _react2.default.createElement(TaskElement, { task: task, key: 'task-' + index });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { 'marginTop': '20px' } },
            'Want to add New Task ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/addTask' },
              'Add Task'
            )
          )
        );
      }
    }
  }]);

  return Tasks;
}(_react2.default.Component);

;
exports.default = Tasks;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.handleLogout = function () {
      localStorage.removeItem("token");
      _this.props.history.push('/login');
    };

    return _this;
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { style: { display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid rgba(0,0,0,0.1)' } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/tasks', style: { margin: '20px 20px 20px 20px',
              textDecoration: 'none',
              fontSize: '18px',
              color: 'rgba(0,0,0,0.6)' } },
          'Tasks'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/addTask', style: { margin: '20px 20px 20px 20px',
              textDecoration: 'none',
              fontSize: '18px',
              color: 'rgba(0,0,0,0.6)' } },
          'Add Task'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleLogout, style: { border: '0px',
              fontSize: '18px',
              color: 'rgba(0,0,0,0.6)',
              fontWeight: 'normal' } },
          'Logout'
        )
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(NavBar);

/***/ })
/******/ ]);