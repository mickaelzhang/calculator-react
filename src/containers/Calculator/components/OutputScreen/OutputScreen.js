import React from 'react';
import cn from 'classnames';

import './OutputScreen.scss';

const OutputScreen = ({ className, operation, result }) => {
  const classes = cn('OutputScreen', className);

  return (
    <div className={classes}>
      <div className="OutputScreen__Operation">{operation ? operation : '\u00A0'}</div>
      <div className="OutputScreen__Result">{result ? result : '\u00A0'}</div>
    </div>
  );
};

OutputScreen.defaultProps = {
  className: '',
}

export default OutputScreen;
