// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';
import type { Store } from './types/redux';

const store: Store = createStore(appReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
