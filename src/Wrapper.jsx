import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Wrapper({
  className,
  size,
  children,
}) {
  const klass = classNames(className, {
    wrapper: !size,
    'wrapper-small': size === 'small',
    'wrapper-large': size === 'large',
  });

  return (
    <div className={klass}>{children}</div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
};

Wrapper.defaultProps = {
  children: null,
  className: '',
  size: '',
};

export { Wrapper };
