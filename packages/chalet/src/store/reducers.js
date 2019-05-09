import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterReducer from '../routes/Counter/modules/counter';

export const makeRootReducer = history => {
  return connectRouter(history)(
    combineReducers({
      router: connectRouter(history),
      counter: counterReducer
    })
  );
};

export default makeRootReducer;
