// @flow
import * as actions from './actions.js';
import type { Action, State } from './types/redux';

const initalState = {
  message: '',
};

function appReducer(state: State = initalState, action: Action) {
  switch (action.type) {
    case actions.ON_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
      });
  }

  return state;
}

export default appReducer;
