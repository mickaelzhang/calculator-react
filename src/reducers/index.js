import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromCalculator from './calculator';

const rootReducer = combineReducers({
  calculator: fromCalculator.reducer,
});

export const getCalculatorState = state => state.calculator;

export const getOperationValue = createSelector(getCalculatorState, fromCalculator.getOperationValue);
export const getResultValue = createSelector(getCalculatorState, fromCalculator.getResultValue);

export default rootReducer;
