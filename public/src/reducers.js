import * as actions from './actions.js';

const initalState = {
  message: '',
};

function appReducer(state = initalState, action) {
  switch (action.type) {
    case actions.ON_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
      });
  }

  return state;
}

export default appReducer;
