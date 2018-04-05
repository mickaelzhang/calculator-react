import React from 'react';
import cn from 'classnames';

import Button from '../Button';

import './ActionButtonGroup.scss';

const ActionButtonGroup = ({ className, onClick, onCalculate, ...others }) => {
  const classes = cn('ActionButtonGroup', className);

  return (
    <div className={classes}>
      <Button text="÷" type="action" onClick={onClick} />
      <Button text="x" type="action" onClick={onClick} />
      <Button text="-" type="action" onClick={onClick} />
      <Button text="+" type="action" onClick={onClick} />
      <Button text="=" type="action" onClick={() => onCalculate()} />
    </div>
  );
};

ActionButtonGroup.defaultProps = {
  className: '',
  onClick: () => {},
  onCalculate: () => {},
}

export default ActionButtonGroup;
