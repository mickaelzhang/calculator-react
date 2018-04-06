import React from 'react';
import cn from 'classnames';

import ScrollView from '@components/ScrollView';
import ComputeItem from '../ComputeItem';

import './ComputeList.scss';

const ComputeList = ({ className, computes }) => {
  const classes = cn('ComputeList', className);

  console.log(computes);
  const items = computes.map(compute => (
    <ComputeItem
      key={compute.id}
      operation={compute.operation}
      result={compute.result}
    />
  ));

  return (
    <ScrollView className={classes}>
      {items}
    </ScrollView>
  );
};

ComputeList.defaultProps = {
  className: '',
};

export default ComputeList;
