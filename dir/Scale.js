'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Zoom = _interopRequireDefault(require("./Zoom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Scale =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scale, _React$Component);

  function Scale(props) {
    var _this;

    _classCallCheck(this, Scale);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scale).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rescale", function () {
      _this.setState(function (currentState) {
        var newState = _objectSpread({}, currentState);

        newState.width = window.innerWidth;
        newState.height = window.innerHeight;

        if (_this.props.scaleTo) {
          newState.zoom = Math.floor(window.innerWidth / _this.props.scaleTo * 100);
        }

        return newState;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      window.removeEventListener('resize', _this.rescale);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      window.addEventListener('resize', _this.rescale);
    });

    _this.state = {
      width: 0,
      zoom: _this.props.scaleTo ? Math.floor(window.innerWidth / props.scaleTo * 100) : 100
    };
    return _this;
  }

  _createClass(Scale, [{
    key: "render",
    value: function render() {
      var style = {};
      style.zoom = this.state.zoom + '%';
      return _react.default.createElement("div", {
        className: "scale-component",
        style: style
      }, this.props.children);
    }
  }]);

  return Scale;
}(_react.default.Component);

Scale.displayName = 'ScaleComponent'; // Uncomment properties you need
// ScaleComponent.propTypes = {};
// ScaleComponent.defaultProps = {};

var _default = Scale;
exports.default = _default;