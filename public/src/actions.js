// @flow
import type { Dispatch } from './types/redux';

export const ON_MESSAGE = 'ON_MESSAGE';

export function getMessage() {
  return (dispatch: Dispatch) => {
    fetch('http://localhost:80/hello').then(resp => resp.text()).then((message) => {
      dispatch({
        type: ON_MESSAGE, message,
      });
    });
  };
}
