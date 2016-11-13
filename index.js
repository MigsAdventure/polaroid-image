'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polaroid = function (_Component) {
  _inherits(Polaroid, _Component);

  function Polaroid(props) {
    _classCallCheck(this, Polaroid);

    var _this = _possibleConstructorReturn(this, (Polaroid.__proto__ || Object.getPrototypeOf(Polaroid)).call(this, props));

    _this.state = {
      hovered: false
    };
    _this.toggleHover = _this.toggleHover.bind(_this);
    return _this;
  }

  _createClass(Polaroid, [{
    key: 'toggleHover',
    value: function toggleHover() {
      this.setState({
        hovered: !this.state.hovered
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          imageShadow = _props.imageShadow,
          imageMargin = _props.imageMargin,
          imageWidth = _props.imageWidth,
          imageHeight = _props.imageHeight,
          imgClass = _props.imgClass,
          imgSrc = _props.imgSrc,
          frameDisplay = _props.frameDisplay,
          frameMargin = _props.frameMargin,
          frameHeight = _props.frameHeight,
          frameWidth = _props.frameWidth,
          frameShadow = _props.frameShadow,
          frameColor = _props.frameColor,
          zoom = _props.zoom,
          hoverFrameShadow = _props.hoverFrameShadow,
          rotate = _props.rotate;

      var imageProperties = {
        boxShadow: imageShadow || '0 0 1px black',
        margin: imageMargin || '1em auto 0',
        width: imageWidth || '18em',
        height: imageHeight || '18em'
      };

      var containerProperties = {
        transform: 'rotate(' + (rotate || '0') + 'deg)',
        textAlign: 'center',
        display: frameDisplay || 'inline-block',
        margin: frameMargin || '1.5em',
        verticalAlign: 'bottom',
        height: frameHeight || '25em',
        width: frameWidth || '20em',
        boxShadow: frameShadow || '0 0 15px black, 0 0 5px black',
        backgroundColor: frameColor || 'white'
      };

      if (this.state.hovered) {
        containerProperties.transform = zoom || 'scale(1.3)';
        containerProperties.boxShadow = hoverFrameShadow || ' 0 0 45px black';
      }

      return _react2.default.createElement(
        'div',
        { style: containerProperties, className: 'polaroidFrame' },
        _react2.default.createElement('img', { className: imgClass, style: imageProperties, src: imgSrc || 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/20157_103262589700319_6142195_n.jpg?oh=6089448d44d9e6da2d1fbca18cb63457&oe=588C007F', onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover }),
        _react2.default.createElement(
          'h4',
          { className: 'polaroid-text' },
          text
        )
      );
    }
  }]);

  return Polaroid;
}(_react.Component);

exports.default = Polaroid;


Polaroid.propTypes = {
  imgSrc: _react2.default.PropTypes.string,
  zoom: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
  imageShadow: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
  frameShadow: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
  hoverFrameShadow: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
  imageMargin: _react2.default.PropTypes.string,
  imageWidth: _react2.default.PropTypes.string,
  imageHeight: _react2.default.PropTypes.string,
  frameDisplay: _react2.default.PropTypes.string,
  frameMargin: _react2.default.PropTypes.string,
  frameWidth: _react2.default.PropTypes.string,
  frameHeight: _react2.default.PropTypes.string,
  frameColor: _react2.default.PropTypes.string,
  imgClass: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string,
  rotate: _react2.default.PropTypes.string
};
