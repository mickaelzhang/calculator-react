import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, composedEnhancers);
}
