import * as actionTypes from '@constants/calculator';

const initialState = {
  operation: "",
  result: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CALCULATOR_OPERATION_UPDATE:
      return {
        ...state,
        operation: `${state.operation}${action.input}`,
      };
    case actionTypes.CALCULATOR_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export const getOperationValue = state => state.operation;
export const getResultValue = state => state.result;