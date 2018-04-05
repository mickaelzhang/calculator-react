import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import Sidebar from '@components/Sidebar';
import ToggleMenuButton from '@components/ToggleMenuButton';

import './ComputeHistory.scss';

class ComputeHistory extends React.Component {
  state = {
    isActive: false,
  };

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const classes = cn('ComputeHistory');

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
          ComputeHistory
        </Sidebar>
      </React.Fragment>
    );
  };
};


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputeHistory);
