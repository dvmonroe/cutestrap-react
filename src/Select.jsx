import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';

function Select({
  id,
  onChange,
  selected,
  options,
  label,
}) {
  const [val, setValue] = useState(selected);

  function handleChange({ target, target: { value } }) {
    if (onChange) {
      onChange({ target });
    } else {
      setValue(value);
    }
  }

  return (
    <Label htmlFor={id} labelClass="select" spanClass="select__label" value={label}>
      <select id={id} value={val} onChange={handleChange}>
        { options.map(({ value, display }) => <option key={value} value={value}>{display}</option>)}
      </select>
    </Label>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  })),
};

Select.defaultProps = {
  id: '',
  label: '',
  selected: '',
  onChange: undefined,
  options: [{ display: '', value: '' }],
};

export { Select };
