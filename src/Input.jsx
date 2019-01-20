import _, { pick } from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({
  onChange,
  inputValue,
  ...props
}) {
  const [val, setValue] = useState(inputValue);
  const inputValues = ['id', 'name', 'type'];

  function handleChange({ target, target: { value } }) {
    if (onChange) {
      onChange({ target });
    } else {
      setValue(value);
    }
  }

  return (
    <input
      {...pick(props, inputValues)}
      onChange={handleChange}
      value={val}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'number', 'tel', 'radio', 'checkbox', 'submit']),
  inputValue: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  name: '',
  onChange: undefined,
  type: 'text',
  inputValue: '',
};

export { Input };
