var React = require('react');
var PropTypes = require('prop-types');

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var uncheckedIcon = (
  React.createElement( 'svg', {
    viewBox: "-2 -5 14 20", height: "100%", width: "100%", style: { position: "absolute", top: 0 } },
    React.createElement( 'path', {
      /* eslint-disable max-len */
      d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12", fill: "#fff", fillRule: "evenodd" })
  )
);

var checkedIcon = (
  React.createElement( 'svg', {
    height: "100%", width: "100%", viewBox: "-2 -5 17 21", style: { position: "absolute", top: 0 } },
    React.createElement( 'path', {
      d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0", fill: "#fff", fillRule: "evenodd" })
  )
);

function createBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor
) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);
  if (relativePos === 0) {
    return offColor;
  }
  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";
  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round(
      (1 - relativePos) * offComponent + relativePos * onComponent
    );
    var newComponent = weightedValue.toString(16);
    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }
    newColor += newComponent;
  }
  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }
  var sixDigitColor = "#";
  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }
  return sixDigitColor;
}

function getBackgroundColor(
  pos,
  checkedPos,
  uncheckedPos,
  offColor,
  onColor
) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(
    pos,
    checkedPos,
    uncheckedPos,
    sixDigitOffColor,
    sixDigitOnColor
  );
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];
  if (
    typeof prop !== "string" ||
    prop[0] !== "#" ||
    (prop.length !== 4 && prop.length !== 7)
  ) {
    return new Error(
      ("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'")
    );
  }
  return null;
};

var ReactSwitch = (function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(
      width - height,
      width - (height + this.$handleDiameter) / 2
    );
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };

    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);

    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onTouchCancel = this.$onTouchCancel.bind(this);

    this.$onClick = this.$onClick.bind(this);
    this.$onKeyDown = this.$onKeyDown.bind(this);
  }

  if ( Component ) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create( Component && Component.prototype );
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentWillReceiveProps = function componentWillReceiveProps (ref) {
    var checked = ref.checked;

    var $pos = checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({ $pos: $pos });
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart (clientX) {
    this.setState({ $startX: clientX, $hasOutline: true });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag (clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var newPos = startPos + clientX - $startX;
    var $pos = Math.min(
      this.$checkedPos,
      Math.max(this.$uncheckedPos, newPos)
    );
    this.setState({ $pos: $pos, $isDragging: true });
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop (event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var onChange = ref$1.onChange;
    var id = ref$1.id;

    // Simulate clicking the handle
    if (!$isDragging) {
      this.setState({ $hasOutline: false });
      onChange(!checked, event, id);
      return;
    }
    if (checked) {
      if ($pos > (this.$checkedPos + this.$uncheckedPos) / 2) {
        this.setState({
          $pos: this.$checkedPos,
          $isDragging: false,
          $hasOutline: false
        });
        return;
      }
      this.setState({ $isDragging: false, $hasOutline: false });
      onChange(false, event, id);
      return;
    }
    if ($pos < (this.$checkedPos + this.$uncheckedPos) / 2) {
      this.setState({
        $pos: this.$uncheckedPos,
        $isDragging: false,
        $hasOutline: false
      });
      return;
    }
    this.setState({ $isDragging: false, $hasOutline: false });
    onChange(true, event, id);
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown (event) {
    // Ignore right click and scroll
    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove (event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp (event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart (event) {
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove (event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd (event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onTouchCancel = function $onTouchCancel () {
    this.setState({ $hasOutline: false });
  };

  ReactSwitch.prototype.$onClick = function $onClick (event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.$onKeyDown = function $onKeyDown (event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    var ref$1 = this.state;
    var $isDragging = ref$1.$isDragging;
    // Trigger change on spacebar and enter keys (in violation of wai-aria spec).
    if ((event.keyCode === 32 || event.keyCode === 13) && !$isDragging) {
      event.preventDefault();
      onChange(!checked, event, id);
    }
  };

  ReactSwitch.prototype.render = function render () {
    var this$1 = this;

    var ref = this.props;
    var checked = ref.checked;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon$$1 = ref.checkedIcon;
    var uncheckedIcon$$1 = ref.uncheckedIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var id = ref.id;
    var ariaLabelledby = ref["aria-labelledby"];
    var ariaLabel = ref["aria-label"];

    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;

    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };

    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor(
        $pos,
        this.$checkedPos,
        this.$uncheckedPos,
        offColor,
        onColor
      ),
      borderRadius: height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };

    var checkedIconStyle = {
      height: height,
      width: Math.min(
        height * 1.5,
        width - (this.$handleDiameter + height) / 2 + 1
      ),
      position: "relative",
      opacity:
        ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };

    var uncheckedIconStyle = {
      height: height,
      width: Math.min(
        height * 1.5,
        width - (this.$handleDiameter + height) / 2 + 1
      ),
      position: "absolute",
      opacity:
        1 -
        ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };

    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor(
        $pos,
        this.$checkedPos,
        this.$uncheckedPos,
        offHandleColor,
        onHandleColor
      ),
      cursor: disabled ? "default" : "pointer",
      display: "inline-block",
      borderRadius: "50%",
      position: "absolute",
      transform: ("translateX(" + $pos + "px)"),
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging
        ? null
        : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging
        ? null
        : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging
        ? null
        : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };

    return (
      React.createElement( 'div', { className: className, style: rootStyle },
        React.createElement( 'div', {
          className: "react-switch-bg", style: backgroundStyle, onClick: disabled ? null : this.$onClick },
          checkedIcon$$1 && React.createElement( 'div', { style: checkedIconStyle }, checkedIcon$$1),
          uncheckedIcon$$1 && (
            React.createElement( 'div', { style: uncheckedIconStyle }, uncheckedIcon$$1)
          )
        ),
        React.createElement( 'div', {
          className: "react-switch-handle", role: "checkbox", tabIndex: disabled ? null : 0, onMouseDown: disabled ? null : this.$onMouseDown, onTouchStart: disabled ? null : this.$onTouchStart, onTouchMove: disabled ? null : this.$onTouchMove, onTouchEnd: disabled ? null : this.$onTouchEnd, onTouchCancel: disabled ? null : this.$onTouchCancel, onKeyDown: this.$onKeyDown, onFocus: function () { return this$1.setState({ $hasOutline: true }); }, onBlur: function () { return this$1.setState({ $hasOutline: false }); }, style: handleStyle, id: id, 'aria-checked': checked, 'aria-disabled': disabled, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel })
      )
    );
  };

  return ReactSwitch;
}(React.Component));
ReactSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  "aria-labelledby": PropTypes.string,
  "aria-label": PropTypes.string
};

ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

module.exports = ReactSwitch;
