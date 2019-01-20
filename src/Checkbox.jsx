import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from './TextField';

function Checkbox({
  onChange,
  isChecked,
  ...props
}) {
  const [chked, setChecked] = useState(isChecked);

  function handleChange({ target, target: { checked } }) {
    if (onChange) {
      onChange({ target });
    } else {
      setChecked(checked);
    }
  }

  return (
    <TextField
      {...props}
      labelClass="checkbox"
      spanClass="checkbox__label"
      defaultChecked={chked}
      type="checkbox"
      onChange={handleChange}
    />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  spanClass: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  id: '',
  label: '',
  labelClass: '',
  inputClass: '',
  spanClass: '',
  isChecked: false,
  onChange: undefined,
};

export { Checkbox };
