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
  state = {
    intervalId: null,
  };

  handleKeyPress = (evt) => {
    const SPACE_KEY = 32;

    if (evt.keyCode === SPACE_KEY) {
      this.toggleRandom();
    }
  }

  toggleRandom() {
    const { intervalId } = this.state;

    if (intervalId) {
      this.stopRandom();
    } else {
      this.startRandom();
    }
  }

  startRandom = () => {
    const commands = [
      'CLEAR', 'CALCULATE',
      '0', '1', '2',
      '3', '4', '5',
      '6', '7', '8',
      '9', '.',
      '-', '+', '÷', 'x',
    ];

    const id = setInterval(() => {
      const randCommand = commands[Math.floor(Math.random() * commands.length)];

      switch (randCommand) {
        case 'CLEAR':
          this.props.clearCalculator();
          break;
        case 'CALCULATE':
          this.calculateResult();
          break;
        default:
          this.props.updateOperation(randCommand);
          break;
      }
    }, 100);

    this.setState({ intervalId: id })
  }

  stopRandom() {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  calculateResult = () => {
    const { operation, applyResult } = this.props;

    if (operation === '') {
      applyResult({ operation, result: '0' });
    } else {
      let formatedString = operation.replace('÷', '/');
      formatedString = formatedString.replace('x', '*');

      try {
        const result = math.eval(formatedString);
        applyResult({ operation, result: result.toString() });
      } catch (error) {
        applyResult({ operation, result: 'error' });
      }
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
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
