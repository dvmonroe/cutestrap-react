import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Grid({
  size,
  className,
  children,
}) {
  const klass = classNames(className, {
    grid: !size,
    'grid--medium': (size === 'medium'),
    'grid--large': (size === 'large'),
  });

  return (
    <section className={klass}>{children}</section>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium']),
};

Grid.defaultProps = {
  children: null,
  className: '',
  size: '',
};

export { Grid };
