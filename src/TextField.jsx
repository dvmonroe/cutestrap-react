import _, { pick } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Input';
import { Label } from './Label';

function TextField({
  value,
  label,
  ...props
}) {
  const labelOptions = ['htmlFor', 'spanClass', 'labelClass'];
  const inputOptions = ['id', 'name', 'onChange', 'type'];

  return (
    <Label {...pick(props, labelOptions)} value={label}>
      <Input {...pick(props, inputOptions)} inputValue={value} />
    </Label>
  );
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
  spanClass: PropTypes.string,
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
  labelClass: 'textfield',
};

export { TextField };
