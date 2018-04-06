import React from 'react';
import cn from 'classnames';

import './SearchBar.scss';

const SearchBar = ({ className, value, onChange }) => {
  const classes = cn('SearchBar', className);

  return (
    <div className={classes}>
      <input className="SearchBar__Input" value={value} onChange={onChange} />
    </div>
  );
};

SearchBar.defaultProps = {
  className: '',
  value: '',
  onChange: () => {},
};

export default SearchBar;
