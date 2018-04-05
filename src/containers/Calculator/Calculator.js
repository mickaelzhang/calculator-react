import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { updateOperation, clearCalculator, calculateResult } from '@actions/calculator';
import { getOperationValue, getResultValue } from '@reducers';

import OutputScreen from './components/OutputScreen';
import ComputeButtonGroup from './components/ComputeButtonGroup';
import ActionButtonGroup from './components/ActionButtonGroup';

import './Calculator.scss';

class Calculator extends React.Component {
  render() {
    const classes = cn('Calculator');
    const { operation, result, updateOperation, clearCalculator, calculateResult } = this.props;

    return (
      <div className={classes}>
        <OutputScreen
          className="Calculator__OutputArea"
          operation={operation}
          result={result}
        />
        <div className="Calculator__InputArea">
          <ComputeButtonGroup
            className="Calculator__ComputeButtonGroup"
            onClick={updateOperation}
            onClear={clearCalculator}
          />
          <ActionButtonGroup
            className="Calculator__ActionButtonGroup"
            onClick={updateOperation}
            onCalculate={calculateResult}
          />
        </div>
      </div>
    );
  };
};


const mapStateToProps = (state) => ({
  operation: getOperationValue(state),
  result: getResultValue(state),
});

const mapDispatchToProps = {
  updateOperation,
  clearCalculator,
  calculateResult
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
