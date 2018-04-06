import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { updateFilter } from '@actions/history';
import { getHistoryFilter, getHistoryFilteredList } from '@reducers';

import Sidebar from '@components/Sidebar';
import ToggleMenuButton from '@components/ToggleMenuButton';
import SearchBar from './components/SearchBar';
import ComputeList from './components/ComputeList';

import './ComputeHistory.scss';

class ComputeHistory extends React.Component {
  state = {
    isActive: false,
  };

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  handleSearchChange = (evt) => {
    this.props.updateFilter({ filterType: 'search', value: evt.target.value });
  }

  render() {
    const classes = cn('ComputeHistory');
    const { filter, history } = this.props;

    return (
      <React.Fragment>
        <ToggleMenuButton
          className="ComputeHistory__ToggleMenuIcon"
          open={this.state.isActive}
          onClick={this.toggleMenu}
        />
        <Sidebar
          className={classes}
          active={this.state.isActive}
        >
          <SearchBar
            className="ComputeHistory__SearchBar"
            value={filter.search}
            onChange={this.handleSearchChange}
          />
          <ComputeList
            className="ComputeHistory__Logs"
            computes={history}
          />
        </Sidebar>
      </React.Fragment>
    );
  };
};


const mapStateToProps = (state) => ({
  filter: getHistoryFilter(state),
  history: getHistoryFilteredList(state),
});

const mapDispatchToProps = {
  updateFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputeHistory);
