import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';

function Textarea({
  inputValue,
  id,
  label,
  onChange,
  name,
}) {
  const [val, setValue] = useState(inputValue);

  function handleChange({ target, target: { value } }) {
    if (onChange) {
      onChange({ target });
    } else {
      setValue(value);
    }
  }

  return (
    <Label htmlFor={id} labelClass="textfield" spanClass="textfield__label" value={label}>
      <textarea id={id} name={name} value={val} onChange={handleChange} />
    </Label>
  );
}

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};

Textarea.defaultProps = {
  id: '',
  name: '',
  label: '',
  onChange: undefined,
  inputValue: '',
};


export { Textarea };
