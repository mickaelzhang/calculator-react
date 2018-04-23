import React from 'react';
import cn from 'classnames';

import { outputFormat } from '@utils/output';

import './ComputeItem.scss';

const ComputeItem = ({ className, operation, result }) => {
  const classes = cn('ComputeItem', className);

  return (
    <div className={classes}>
      <div className="ComputeItem__Operation">{operation}</div>
      <div className="ComputeItem__Result">= {outputFormat(result)}</div>
    </div>
  );
};

ComputeItem.defaultProps = {
  className: '',
};

export default ComputeItem;
