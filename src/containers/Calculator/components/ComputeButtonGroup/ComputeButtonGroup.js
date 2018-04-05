import React from 'react';
import cn from 'classnames';

import Button from '../Button';

import './ComputeButtonGroup.scss';

const ComputeButtonGroup = ({ className, onClick, onClear }) => {
  const classes = cn('ComputeButtonGroup', className);

  const ComputeButton = ({ text, large, ...others }) => {
    return (
      <Button
        className={cn('ComputeButtonGroup__Button', {
          'ComputeButtonGroup__Button--Large': large
        })}
        text={text}
        onClick={onClick}
        {...others}
      />
    );
  };

  return (
    <div className={classes}>
      <ComputeButton text="C" onClick={() => onClear()} />
      <ComputeButton large disabled />
      <ComputeButton text="7" />
      <ComputeButton text="8" />
      <ComputeButton text="9" />
      <ComputeButton text="4" />
      <ComputeButton text="5" />
      <ComputeButton text="6" />
      <ComputeButton text="1" />
      <ComputeButton text="2" />
      <ComputeButton text="3" />
      <ComputeButton text="0" large />
      <ComputeButton text="." />
    </div>
  );
};

ComputeButtonGroup.defaultProps = {
  className: '',
  onClick: () => {},
}

export default ComputeButtonGroup;
