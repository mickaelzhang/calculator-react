import * as actionTypes from '@constants/calculator';

export const clearCalculator = () => ({
  type: actionTypes.CALCULATOR_CLEAR
});

export const updateOperation = (input) => ({
  type: actionTypes.CALCULATOR_OPERATION_UPDATE,
  input
});

export const applyResult = ({ operation, result }) => ({
  type: actionTypes.CALCULATOR_APPLY_RESULT,
  operation,
  result
});