import React from 'react';
import cn from 'classnames';

import './Button.scss';

const Button = ({ text, value, className, type, disabled, onClick }) => {
  const classes = cn('Button', {
    'Button--ComputeType': type === 'compute',
    'Button--ActionType': type === 'action',
    'Button--Disable': disabled,
  }, className);

  return (
    <div className={classes} onClick={() => onClick(text)}>
      {text}
    </div>
  );
};

Button.defaultProps = {
  text: '',
  type: 'compute',
  disabled: false,
  onClick: () => {},
};

export default Button;
