import math from 'mathjs';

import * as actionTypes from '@constants/calculator';

const initialState = {
  operation: '',
  result: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CALCULATOR_OPERATION_UPDATE: {
      let newOperation = state.operation;
      const isOperator = 'x÷+-'.includes(action.input);

      if (isOperator) {
        newOperation += ` ${action.input} `;
      } else {
        newOperation += action.input;
      }

      return {
        ...state,
        operation: newOperation,
      };
    }
    case actionTypes.CALCULATOR_CALCULATE_RESULT:
      let formatedString = state.operation.replace('÷', '/');
      formatedString = formatedString.replace('x', '*');
      let result = 'error';

      try {
        result = math.eval(formatedString);
      } finally {
        return { ...state, result };
      }

    case actionTypes.CALCULATOR_CLEAR:
      return initialState;

    default:
      return state;
  }
}

export const getOperationValue = state => state.operation;
export const getResultValue = state => state.result;