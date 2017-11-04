import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    router: routerReducer,
    /*
      Async reducer means that the reducer function will be appended
      to store when it was demanded. In our case, the "counter" reducer
      will be appended when the route directed to /couter.
     */
    ...asyncReducers,
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
