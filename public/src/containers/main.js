// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.js';
import type { ThunkAction } from '../types/redux';

type PropState = {
  message: string
};

type Props = {
  state: PropState,
  dispatch: (ThunkAction) => void,
};

const mapStateToProps = function mapStateToProps(state: PropState) {
  return {
    state,
  };
};


class Main extends Component<Props> {
  constructor(props: Props) {
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
