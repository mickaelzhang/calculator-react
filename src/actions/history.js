import * as actionTypes from '@constants/history';

export const updateFilter = ({ filterType, value }) => ({
  type: actionTypes.HISTORY_FILTER_UPDATE,
  filterType,
  value
});
