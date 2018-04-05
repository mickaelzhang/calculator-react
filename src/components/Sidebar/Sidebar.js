import React from 'react';
import cn from 'classnames';

import './Sidebar.scss';

const Sidebar = ({ className, children, active }) => {
  const classes = cn('Sidebar', {
    'Sidebar--Active': active,
  }, className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Sidebar.defaultProps = {
  className: '',
  active: false,
};

export default Sidebar;
