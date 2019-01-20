import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from './TextField';

function RadioButton({
  ...props
}) {
  return (
    <TextField {...props} type="radio" labelClass="radio" spanClass="radio__label" />
  );
}

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

RadioButton.defaultProps = {
  id: '',
  label: '',
  labelClass: '',
  onChange: undefined,
  name: '',
  value: '',
};

export { RadioButton };
