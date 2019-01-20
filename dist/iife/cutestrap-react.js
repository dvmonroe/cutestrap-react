var Cutestrap = (function (exports, React, PropTypes, classNames, lodash) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

  function Button(_ref) {
    var classType = _ref.classType,
        type = _ref.type,
        value = _ref.value,
        className = _ref.className,
        onClick = _ref.onClick;
    var klass = classNames("btn--".concat(classType), className);
    return (// eslint-disable-next-line react/button-has-type
      React__default.createElement("button", {
        type: type,
        className: klass,
        onClick: onClick
      }, value)
    );
  }

  Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    classType: PropTypes.oneOf(['primary', 'secondary', 'link']),
    value: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
  };
  Button.defaultProps = {
    classType: 'primary',
    className: '',
    value: '',
    onClick: undefined,
    type: 'button'
  };

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function Input(_ref) {
    var onChange = _ref.onChange,
        inputValue = _ref.inputValue,
        props = _objectWithoutProperties(_ref, ["onChange", "inputValue"]);

    var _useState = React.useState(inputValue),
        _useState2 = _slicedToArray(_useState, 2),
        val = _useState2[0],
        setValue = _useState2[1];

    var inputValues = ['id', 'name', 'type'];

    function handleChange(_ref2) {
      var target = _ref2.target,
          value = _ref2.target.value;

      if (onChange) {
        onChange({
          target: target
        });
      } else {
        setValue(value);
      }
    }

    return React__default.createElement("input", _extends({}, lodash.pick(props, inputValues), {
      onChange: handleChange,
      value: val
    }));
  }

  Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'number', 'tel', 'radio', 'checkbox', 'submit']),
    inputValue: PropTypes.string
  };
  Input.defaultProps = {
    id: '',
    name: '',
    onChange: undefined,
    type: 'text',
    inputValue: ''
  };

  function Label(_ref) {
    var htmlFor = _ref.htmlFor,
        children = _ref.children,
        labelClass = _ref.labelClass,
        spanClass = _ref.spanClass,
        value = _ref.value;
    return React__default.createElement("label", {
      htmlFor: htmlFor,
      className: labelClass
    }, children, React__default.createElement("span", {
      className: spanClass
    }, value));
  }

  Label.propTypes = {
    children: PropTypes.node,
    labelClass: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
    spanClass: PropTypes.string,
    value: PropTypes.string
  };
  Label.defaultProps = {
    children: null,
    labelClass: '',
    spanClass: '',
    value: ''
  };

  function TextField(_ref) {
    var value = _ref.value,
        label = _ref.label,
        props = _objectWithoutProperties(_ref, ["value", "label"]);

    var labelOptions = ['htmlFor', 'spanClass', 'labelClass'];
    var inputOptions = ['id', 'name', 'onChange', 'type'];
    return React__default.createElement(Label, _extends({}, lodash.pick(props, labelOptions), {
      value: label
    }), React__default.createElement(Input, _extends({}, lodash.pick(props, inputOptions), {
      inputValue: value
    })));
  }

  TextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    labelClass: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    defaultChecked: PropTypes.bool,
    spanClass: PropTypes.string
  };
  TextField.defaultProps = {
    type: 'text',
    id: '',
    label: '',
    onChange: undefined,
    name: '',
    value: '',
    defaultChecked: false,
    spanClass: 'textfield__label',
    labelClass: 'textfield'
  };

  function Checkbox(_ref) {
    var onChange = _ref.onChange,
        isChecked = _ref.isChecked,
        props = _objectWithoutProperties(_ref, ["onChange", "isChecked"]);

    var _useState = React.useState(isChecked),
        _useState2 = _slicedToArray(_useState, 2),
        chked = _useState2[0],
        setChecked = _useState2[1];

    function handleChange(_ref2) {
      var target = _ref2.target,
          checked = _ref2.target.checked;

      if (onChange) {
        onChange({
          target: target
        });
      } else {
        setChecked(checked);
      }
    }

    return React__default.createElement(TextField, _extends({}, props, {
      labelClass: "checkbox",
      spanClass: "checkbox__label",
      defaultChecked: chked,
      type: "checkbox",
      onChange: handleChange
    }));
  }

  Checkbox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    labelClass: PropTypes.string,
    inputClass: PropTypes.string,
    spanClass: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func
  };
  Checkbox.defaultProps = {
    id: '',
    label: '',
    labelClass: '',
    inputClass: '',
    spanClass: '',
    isChecked: false,
    onChange: undefined
  };

  function Column(_ref) {
    var weight = _ref.weight,
        children = _ref.children;
    var klass = classNames({
      'column--light': weight === 'light',
      'column--heavy': weight === 'heavy'
    });
    return React__default.createElement("div", {
      className: klass
    }, children);
  }

  Column.propTypes = {
    children: PropTypes.node,
    weight: PropTypes.string
  };
  Column.defaultProps = {
    children: null,
    weight: ''
  };

  function Grid(_ref) {
    var size = _ref.size,
        className = _ref.className,
        children = _ref.children;
    var klass = classNames(className, {
      grid: !size,
      'grid--medium': size === 'medium',
      'grid--large': size === 'large'
    });
    return React__default.createElement("section", {
      className: klass
    }, children);
  }

  Grid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium'])
  };
  Grid.defaultProps = {
    children: null,
    className: '',
    size: ''
  };

  function RadioButton(_ref) {
    var props = _extends({}, _ref);

    return React__default.createElement(TextField, _extends({}, props, {
      type: "radio",
      labelClass: "radio",
      spanClass: "radio__label"
    }));
  }

  RadioButton.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    labelClass: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string
  };
  RadioButton.defaultProps = {
    id: '',
    label: '',
    labelClass: '',
    onChange: undefined,
    name: '',
    value: ''
  };

  function Select(_ref) {
    var id = _ref.id,
        onChange = _ref.onChange,
        selected = _ref.selected,
        options = _ref.options,
        label = _ref.label;

    var _useState = React.useState(selected),
        _useState2 = _slicedToArray(_useState, 2),
        val = _useState2[0],
        setValue = _useState2[1];

    function handleChange(_ref2) {
      var target = _ref2.target,
          value = _ref2.target.value;

      if (onChange) {
        onChange({
          target: target
        });
      } else {
        setValue(value);
      }
    }

    return React__default.createElement(Label, {
      htmlFor: id,
      labelClass: "select",
      spanClass: "select__label",
      value: label
    }, React__default.createElement("select", {
      id: id,
      value: val,
      onChange: handleChange
    }, options.map(function (_ref3) {
      var value = _ref3.value,
          display = _ref3.display;
      return React__default.createElement("option", {
        key: value,
        value: value
      }, display);
    })));
  }

  Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    selected: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired
    }))
  };
  Select.defaultProps = {
    id: '',
    label: '',
    selected: '',
    onChange: undefined,
    options: [{
      display: '',
      value: ''
    }]
  };

  function Textarea(_ref) {
    var inputValue = _ref.inputValue,
        id = _ref.id,
        label = _ref.label,
        onChange = _ref.onChange,
        name = _ref.name;

    var _useState = React.useState(inputValue),
        _useState2 = _slicedToArray(_useState, 2),
        val = _useState2[0],
        setValue = _useState2[1];

    function handleChange(_ref2) {
      var target = _ref2.target,
          value = _ref2.target.value;

      if (onChange) {
        onChange({
          target: target
        });
      } else {
        setValue(value);
      }
    }

    return React__default.createElement(Label, {
      htmlFor: id,
      labelClass: "textfield",
      spanClass: "textfield__label",
      value: label
    }, React__default.createElement("textarea", {
      id: id,
      name: name,
      value: val,
      onChange: handleChange
    }));
  }

  Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    inputValue: PropTypes.string
  };
  Textarea.defaultProps = {
    id: '',
    name: '',
    label: '',
    onChange: undefined,
    inputValue: ''
  };

  function Wrapper(_ref) {
    var className = _ref.className,
        size = _ref.size,
        children = _ref.children;
    var klass = classNames(className, {
      wrapper: !size,
      'wrapper-small': size === 'small',
      'wrapper-large': size === 'large'
    });
    return React__default.createElement("div", {
      className: klass
    }, children);
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small'])
  };
  Wrapper.defaultProps = {
    children: null,
    className: '',
    size: ''
  };

  exports.Button = Button;
  exports.Checkbox = Checkbox;
  exports.Column = Column;
  exports.Grid = Grid;
  exports.Input = Input;
  exports.Label = Label;
  exports.RadioButton = RadioButton;
  exports.Select = Select;
  exports.Textarea = Textarea;
  exports.TextField = TextField;
  exports.Wrapper = Wrapper;

  return exports;

}({}, React, PropTypes, classNames, _));
