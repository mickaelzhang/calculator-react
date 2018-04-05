import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import OutputScreen from './components/OutputScreen';
import Button from './components/Button';

import './Calculator.scss';

class Calculator extends React.Component {
  render() {
    const classes = cn('Calculator');

    return (
      <div className={classes}>
        <OutputScreen
          className="Calculator__OutputArea"
          operation="14 + 18"
          result="32"
        />
        <div className="Calculator__InputArea">
          <div className="Calculator__ComputeButtonGroup">
            <Button text="C" />
            <Button className="Calculator__LargeButton" disabled />
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="0" className="Calculator__LargeButton" />
            <Button text="." />
          </div>
          <div className="Calculator__ActionButtonGroup">
            <Button text="/" type="action" />
            <Button text="x" type="action" />
            <Button text="-" type="action" />
            <Button text="+" type="action" />
            <Button text="=" type="action" />
          </div>
        </div>
      </div>
    );
  };
};


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
