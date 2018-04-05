import { CALCULATOR_APPLY_RESULT } from '@constants/calculator';

const initialState = [];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CALCULATOR_APPLY_RESULT:
      return [
        ...state,
        {
          id: state.length,
          operation: action.operation,
          result: action.result,
        }
      ];

    default:
      return state;
  }
}

export const getHistory = state => state;