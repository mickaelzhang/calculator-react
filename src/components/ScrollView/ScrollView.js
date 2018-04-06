import React from 'react';
import cn from 'classnames';

import './ScrollView.scss';

const ScrollView = ({ className, children }) => {
  const classes = cn('ScrollView', className);

  return <div className={classes}>{children}</div>;
};

ScrollView.defaultProps = {
  className: '',
}

export default ScrollView;
