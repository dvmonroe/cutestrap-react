import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({
  classType,
  type,
  value,
  className,
  onClick,
}) {
  const klass = classNames(`btn--${classType}`, className);

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={klass} onClick={onClick}>{value}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  classType: PropTypes.oneOf(['primary', 'secondary', 'link']),
  value: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  classType: 'primary',
  className: '',
  value: '',
  onClick: undefined,
  type: 'button',
};

export { Button };
