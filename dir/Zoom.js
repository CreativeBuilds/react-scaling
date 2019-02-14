'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Zoom = function Zoom(props) {
  var zoom = props.zoom;
  var IF = !(typeof zoom === 'string' && zoom.includes('%'));

  if (IF && !isNaN(parseFloat(props.zoom))) {
    zoom = Math.floor(parseInt(zoom)) + '%';
  }

  var style = {
    zoom: zoom || '100%',
    width: '100%',
    height: '100%'
  };
  style = Object.assign(props.style || {}, style);
  return _react.default.createElement("div", {
    className: "zoom-component ".concat(props.className || ''),
    style: style,
    id: props.id || null
  }, props.children || null);
};

Zoom.displayName = 'ZoomComponent';
Zoom.defaultProps = {
  zoom: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = Zoom;
exports.default = _default;