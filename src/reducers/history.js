import { createSelector } from 'reselect';

import { CALCULATOR_APPLY_RESULT } from '@constants/calculator';
import { HISTORY_FILTER_UPDATE } from '@constants/history';

const initialState = {
  filter: {
    search: '',
  },
  list: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case HISTORY_FILTER_UPDATE: {
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.filterType]: action.value
        }
      };
    }

    case CALCULATOR_APPLY_RESULT: {
      const newHistoryItem = {
        id: state.list.length,
        operation: action.operation,
        result: action.result,
      };

      return {
        ...state,
        list: [
          newHistoryItem,
          ...state.list,
        ]
      };
    }
    default:
      return state;
  }
}

export const getFilter = state => state.filter;
export const getList = state => state.list;
export const getFilteredList = createSelector(
  [getFilter, getList],
  (filter, computes) => computes.filter(compute => compute.result.includes(filter.search))
);
