import React from 'react';
import PropTypes from 'prop-types';

function Label({
  htmlFor,
  children,
  labelClass,
  spanClass,
  value,
}) {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      <span className={spanClass}>{value}</span>
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  labelClass: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  spanClass: PropTypes.string,
  value: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  labelClass: '',
  spanClass: '',
  value: '',
};

export { Label };
