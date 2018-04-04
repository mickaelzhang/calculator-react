import { combineReducers } from 'redux';

import * as fromCalculator from './calculator';

const rootReducer = combineReducers({
  calculator: fromCalculator.reducer,
});

export const getCalculatorState = state => state.settings;

export default rootReducer;
