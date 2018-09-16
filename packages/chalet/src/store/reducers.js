import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./history";

export const makeRootReducer = asyncReducers => {
  return connectRouter(history)(
    combineReducers({
      app: (state = {}) => state,
      /*
      Async reducer means that the reducer function will be appended
      to store when it was demanded. In our case, the "counter" reducer
      will be appended when the route directed to /couter.
     */
      ...asyncReducers
    })
  );
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    connectRouter(history)(makeRootReducer(store.asyncReducers))
  );
};

export default makeRootReducer;
