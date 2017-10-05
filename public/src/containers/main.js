import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.js';

const mapStateToProps = function mapStateToProps(state) {
  return {
    state,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(actions.getMessage());
  }

  render() {
    return (
      <div id="main">
        {this.props.state.message}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
