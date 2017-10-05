import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/main';
import store from './store';

// render app
render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
