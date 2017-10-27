// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/main';
import store from './store';

// render app
const appElement = document.getElementById('app');
if (appElement) {
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
    appElement,
  );
} else {
  // TODO: Render some error if appElement returns null
}
