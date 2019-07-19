import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as counterReducer } from '../modules/counter';

export const makeRootReducer = history => {
  return connectRouter(history)(
    combineReducers({
      router: connectRouter(history),
      counter: counterReducer,
    })
  );
};

export default makeRootReducer;
