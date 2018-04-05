import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import math from 'mathjs';

import { updateOperation, clearCalculator, applyResult } from '@actions/calculator';
import { getOperationValue, getResultValue } from '@reducers';

import OutputScreen from './components/OutputScreen';
import ComputeButtonGroup from './components/ComputeButtonGroup';
import ActionButtonGroup from './components/ActionButtonGroup';

import './Calculator.scss';

class Calculator extends React.Component {
  calculateResult = () => {
    const { operation, applyResult } = this.props;
    let formatedString = operation.replace('÷', '/');
    formatedString = formatedString.replace('x', '*');
    let result = 'error';

    try {
      result = math.eval(formatedString);
    } finally {
      applyResult({ operation, result });
    }
  }

  render() {
    const classes = cn('Calculator');
    const { operation, result, updateOperation, clearCalculator } = this.props;

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
            onCalculate={this.calculateResult}
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
  applyResult
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
