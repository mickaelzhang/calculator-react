import React from 'react';
import cn from 'classnames';

import openIcon from './open-icon.svg';
import closeIcon from './close-icon.svg';
import './ToggleMenuButton.scss';

const ToggleMenuButton = ({ className, onClick, open }) => {
  const classes = cn('ToggleMenuButton', className);

  return (
    <div
      className={classes}
      style={{ backgroundImage: `url(${open ? closeIcon : openIcon})` }}
      onClick={onClick}
    />
  );
};

ToggleMenuButton.defaultProps = {
  className: '',
  onClick: () => {},
};

export default ToggleMenuButton;
