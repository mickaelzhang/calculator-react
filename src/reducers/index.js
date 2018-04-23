import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromCalculator from './calculator';
import * as fromHistory from './history';

const rootReducer = combineReducers({
  calculator: fromCalculator.reducer,
  history: fromHistory.reducer,
});

export const getCalculatorState = state => state.calculator;
export const getHistoryState = state => state.history;

/**
 * Calculator Selector
 */
export const getOperationValue = createSelector(getCalculatorState, fromCalculator.getOperationValue);
export const getResultValue = createSelector(getCalculatorState, fromCalculator.getResultValue);

/**
 * History Selector
 */
export const getHistoryFilter = createSelector(getHistoryState, fromHistory.getFilter);
export const getHistoryList = createSelector(getHistoryState, fromHistory.getList);
export const getHistoryFilteredList = createSelector(getHistoryState, fromHistory.getFilteredList);

export default rootReducer;
