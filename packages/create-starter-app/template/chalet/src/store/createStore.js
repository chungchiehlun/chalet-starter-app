import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import makeRootReducer from './reducers';
import history from './history';

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, routerMiddleware(history)];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );

  return store;
};

export default createStore;
