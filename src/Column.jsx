import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Column({
  weight,
  children,
}) {
  const klass = classNames({
    'column--light': (weight === 'light'),
    'column--heavy': (weight === 'heavy'),
  });

  return (
    <div className={klass}>{children}</div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  weight: PropTypes.string,
};

Column.defaultProps = {
  children: null,
  weight: '',
};

export { Column };
