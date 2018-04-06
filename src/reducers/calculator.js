import * as actionTypes from '@constants/calculator';

const initialState = {
  operation: '',
  result: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CALCULATOR_OPERATION_UPDATE: {
      let newOperation, result;

      if (state.result === '') {
        newOperation = state.operation;
        result = state.result;
      } else {
        // Reset both input if result is not empty (when previous action was to calculate the result)
        newOperation = '';
        result = '';
      }

      const isOperator = 'x÷+-'.includes(action.input);

      // Add space around input if it's an operator
      if (isOperator) {
        newOperation += ` ${action.input} `;
      } else {
        newOperation += action.input;
      }

      return {
        ...state,
        operation: newOperation,
        result,
      };
    }
    case actionTypes.CALCULATOR_APPLY_RESULT:
      return {
        ...state,
        result: action.result
      };

    case actionTypes.CALCULATOR_CLEAR:
      return initialState;

    default:
      return state;
  }
}

export const getOperationValue = state => state.operation;
export const getResultValue = state => state.result;