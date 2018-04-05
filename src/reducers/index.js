import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromCalculator from './calculator';
import * as fromHistory from './history';

const rootReducer = combineReducers({
  calculator: fromCalculator.reducer,
  history: fromHistory.reducer,
});

export const getCalculatorState = state => state.calculator;

export const getOperationValue = createSelector(getCalculatorState, fromCalculator.getOperationValue);
export const getResultValue = createSelector(getCalculatorState, fromCalculator.getResultValue);

export default rootReducer;
